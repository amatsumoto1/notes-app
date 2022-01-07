import express from 'express';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});