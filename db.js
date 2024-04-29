const bcrypt = require('bcrypt');

// This is just for demo purposes, NEVER hardcode passwords in your source code
// In production, store hashed version of password in your db
const users = [
  {
    id: 1,
    name: "User One",
    email: "userone@example.com",
    password: bcrypt.hashSync('password1', 10),
  },
  {
    id: 2,
    name: "User Two",
    email: "usertwo@example.com",
    password: bcrypt.hashSync('password2', 10),
  },
];
module.exports = users;