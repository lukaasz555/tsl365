const User = require('../models/User');

export async function findUserByEmail(userEmail: string) {
	return await User.findOne({ email: userEmail });
}
