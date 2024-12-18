import express from 'express';
import routes from './routes.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import 'dotenv/config'
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();

const url = 'mongodb://localhost:27017';
// const url = 'mongodb://127.0.0.1:27017';
const cookieSecret = 'secret'
mongoose.connect(url, { dbName: 'fragrances' })
    .then(() => console.log('Db successfully connected'))
    .catch((err) => console.log(`DB failed: ${err}`))

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
}))

app.use(express.json())
app.use(cookieParser(cookieSecret))
app.use(authMiddleware)
app.use(routes)

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))