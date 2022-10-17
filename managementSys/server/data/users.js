import bcrypt from "bcryptjs";

const users = [
  {

    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {

    email: "user@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
