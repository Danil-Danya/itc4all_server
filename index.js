import express from 'express';
import expressCsrf from 'express-csrf';
import cors from 'cors';
import bodyParser from 'body-parser';

import path from 'path';
import fs from 'fs';

import { fileURLToPath } from 'url';

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:  true, limit: "500mb"}));
app.use(express.json());

//app.get('*', (req, res) => )

app.listen(PORT, () => console.log(`server has been started in: http://localhost:${PORT}`));