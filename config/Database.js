import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tcc-2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
