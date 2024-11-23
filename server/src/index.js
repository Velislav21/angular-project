import express from 'express';
import routes from './routes.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import 'dotenv/config'
import { authMiddleware2 } from './middlewares/authMiddleware2.js';

const app = express();

const url = 'mongodb://localhost:27017';

mongoose.connect(url, { dbName: 'fragrances' })
    .then(() => console.log('Db successfully connected'))
    .catch((err) => console.log(`DB failed: ${err}`))

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
}))

app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(authMiddleware2)
app.use(routes)

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))