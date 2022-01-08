import express from 'express';
import bodyParser from 'body-parser';
import { getRoutes } from './routes';
import cors from 'cors';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/', getRoutes());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});