
  var express = require('express');
  var bodyParser = require('body-parser');

  var app = express();

  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  app.all('*', function(req, res,next) {

      /**
       * Response settings
       * @type {Object}
       */
      var responseSettings = {
          "AccessControlAllowOrigin": req.headers.origin,
          "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
          "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
          "AccessControlAllowCredentials": true
      };

      /**
       * Headers
       */
      res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
      res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
      res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
      res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

      if ('OPTIONS' == req.method) {
          res.send(200);
      }
      else {
          next();
      }
  });


  var contatos = [
    {nome: "Pedro", telefone: "88889999", data: new Date(), operadora:{nome:"Vivo", codigo:"1", categoria:"Cel"}, cor: "blue", serial: "8374834"},
    {nome: "Maria", telefone: "88885555", data: new Date(), operadora:{nome:"Oi", codigo:"1", categoria:"Cel"}, cor: "yellow"},
    {nome: "Manuela", telefone: "88887777", data: new Date(), operadora:{nome:"Claro", codigo:"1", categoria:"Cel"}, cor: "black"}
  ];

  app.get('/', function (req, res) {
    res.setHeader('X-Frame-Options', 'ALLOWALL');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.send('Hello World!');
  });

  app.get('/contatos', function (req, res) {
    res.setHeader('X-Frame-Options', 'ALLOWALL');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.send(JSON.stringify(contatos));
  });

  app.get('/contatos/:serial', function (req, res) {
    res.setHeader('X-Frame-Options', 'ALLOWALL');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    var serial = req.param('serial').substring(1);

    var contato = contatos.filter(function(con){
      if(con.serial == serial){
        return con;
      }
    });

    console.log(contato);

    res.send(JSON.stringify(contato[0]));
  });

  app.post('/contatos/add',function(req, res, next){
    console.log(req.body);
    res.setHeader('X-Frame-Options', 'ALLOWALL');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    contatos.push(req.body);

    res.sendStatus(200);
  });

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
