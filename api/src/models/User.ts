import { Schema, model, Types } from 'mongoose';
import { UserModel } from '../interfaces/UserModel';

const UserSchema = new Schema<UserModel>(
	{
		id: {
			type: Number,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = model('User', UserSchema);
