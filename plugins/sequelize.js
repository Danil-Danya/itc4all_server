import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize({
    username: process.env.DB_SERVERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
});

(async function () {
    try {
        await sequelize.authenticate();
        console.log("connected");
    } catch (error) {
        console.log(error);
    }
})();

export default sequelize;