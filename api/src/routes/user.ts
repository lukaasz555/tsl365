import express, { Request, Response } from 'express';
import { UserModel } from '../interfaces/UserModel';
import { HydratedDocument } from 'mongoose';
import { findUserByEmail } from '../helpers/findUserByEmail';
import { validatePassword, getHashedPassword } from '../helpers/bcryptAuth';
import bcrypt from 'bcrypt';
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
	const usersCount = await User.count();
	const isUserExists: HydratedDocument<UserModel> = await findUserByEmail(
		req.body.email
	);
	if (!isUserExists) {
		const hashedPassword = await getHashedPassword(req.body.password);
		const user: HydratedDocument<UserModel> = new User({
			...req.body,
			id: usersCount + 1,
			password: hashedPassword,
		});

		try {
			await user
				.save()
				.then((user) => {
					res.status(200).json(user);
				})
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
			res.status(500).json('Server error');
		}
	} else {
		res.status(409).json('User already exists');
	}
});

router.post('/login', async (req: Request, res: Response) => {
	const isUserExists: HydratedDocument<UserModel> = await findUserByEmail(
		req.body.email
	);
	if (isUserExists) {
		const isValidPassword = await validatePassword(
			req.body.password,
			isUserExists.password
		);

		isValidPassword
			? res.status(200).json(isUserExists)
			: res.status(401).json('Wrong credentials');
	} else {
		res.status(404).json("This user doesn't exist");
	}
});

export default router;
