import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import public_route from './routes/public_routes'
import private_route from './routes/private_routes'
import config from '../config.json'
var bodyParser = require('body-parser')
var cors = require('cors')
dotenv.config();

function main(){

  var publicDir = require('path').join(__dirname,'../public'); 
  
  const app = express()
  app.use(cors())
  app.use(express.json({limit: '5mb'}));
  app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
  app.use(express.static(publicDir)); 
  app.use('/v1/public', public_route);
  app.use('/v1/private', private_route);
    
    app.listen(config.app.port, () => {
      console.log(`⚡️[server]: Server is running at http://${config.app.host}:${config.app.port}`);
    });
}

main()