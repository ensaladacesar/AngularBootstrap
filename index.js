const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
let {PythonShell} = require('python-shell')

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
   next();
});
const data = {"falla":"falla",
              "automovil":"n",
              "nuevo":"n",
              "automatico":"n",
              "manejar":"n",
              "aprender":"n",
              "modoestandar":"n",
              "manejarestandar":"n",
              "mantenimiento":"n",
              "estabilizadores":"s",
              "combustible":"s",
              "sonido":"s",
              "pilotos":"s",
              "meteorologia":"n"
            };
messageArray = [];
app.post('/script', (request, response) => {

  var pyshell = new PythonShell('script.py');
  messageArray = [];
  pyshell.send(JSON.stringify(request.body));

  pyshell.on('message', function (message) {
    messageArray.push(message);
    //console.log(message);
  });

  pyshell.end(function (err) {
    if (err){
      response.status(400).send(err);
    };
    response.status(200).send(messageArray);
    
  });
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});