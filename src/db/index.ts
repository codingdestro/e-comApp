import { Sequelize } from "sequelize";
export const sequelize = new Sequelize({
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",
  database: "e_com",
  dialect: "mysql",
});

const initDB = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been stabilished successfully to database ");
    })
    .catch((reason) => console.log("Unable to connect", reason));
  return sequelize;
};