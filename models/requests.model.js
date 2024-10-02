import sequelize from "../plugins/sequelize.js";
import { DataTypes } from "sequelize";

const Requests = sequelize.define('requests', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true 
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

export default Requests;