import { DataTypes } from "sequelize";
import sequelize from "../plugins/sequelize.js";

const Transactions = sequelize.define('transactions', {
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true, 
        unique: true 
    },

    amount: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },

    user_first_name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },

    user_last_name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },

    product_name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },

    payment_method: {
        type: DataTypes.STRING,
        allowNull: false, 
    }
})