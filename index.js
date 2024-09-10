import express from 'express';
import expressCsrf from 'express-csrf';
import cors from 'cors';
import dotenv from "dotenv";
import bodyParser from 'body-parser';


import errorMiddleware from './middlewares/error.middleware.js';

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
app.use(errorMiddleware);

//app.get('*', (req, res) => )

app.listen(PORT, () => console.log(`server has been started in: http://localhost:${PORT}`));