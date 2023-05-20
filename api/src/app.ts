import express, { Application } from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoute from './routes/user';

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 4047;

app.use(json());
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);

async function run() {
	if (process.env.MONGODB) {
		await mongoose.connect(process.env.MONGODB);
	}
}

run().catch((e) => console.log(e));

app.use('/user', userRoute);

app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});
