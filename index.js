import express from 'express';
import expressCsrf from 'express-csrf';
import cors from 'cors';
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import swagger from './plugins/swagger.js';


import errorMiddleware from './middlewares/error.middleware.js';
import router from './routers/init.routes.js';

import initModel from './models/init.model.js'

import path from 'path';
import fs from 'fs';

import { fileURLToPath } from 'url';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({extended:  true, limit: "500mb"}));
app.use(express.json());
app.use('/server-api', router);
app.use(errorMiddleware);

swagger(app)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/emails', express.static(path.join(__dirname, 'static', 'email', 'images')));

//app.get('*', (req, res) => )

app.listen(PORT, () => console.log(`server has been started in: http://localhost:${PORT}`));