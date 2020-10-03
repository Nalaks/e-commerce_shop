const bcrypt = require('bcryptjs')

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true
	},
	{
		name: 'User 2',
		email: 'user1@example.com',
		password: bcrypt.hashSync('123456', 10)
	},
	{
		name: 'User 1',
		email: 'user2@example.com',
		password: bcrypt.hashSync('123456', 10)
	}
]

module.exports = users
