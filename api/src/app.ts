import express, { Application } from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import cors from 'cors';
import userRoute from './routes/user';

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 4047;

app.use(json());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.end(`<h3>app.ts</h3><br /> <a href="/user">go to user</a>`);
});

app.use('/user', userRoute);

app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});
