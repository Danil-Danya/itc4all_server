import { DataTypes } from "sequelize";
import sequelize from "../plugins/sequelize.js";

const TransactionsPayme = sequelize.define('TransactionsPayme', {
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true, 
        unique: true 
    },

    time: {
        type: DataTypes.BIGINT, 
        allowNull: false
    },

    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    account: {
        type: DataTypes.JSON,
        allowNull: false
    },

    create_time: {
        type: DataTypes.BIGINT, 
        allowNull: false
    },

    perform_time: {
        type: DataTypes.BIGINT, 
        allowNull: true
    },

    cancel_time: {
        type: DataTypes.BIGINT, 
        allowNull: true
    },

    transaction: {
        type: DataTypes.STRING,
        allowNull: false
    },

    state: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    reason: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    receivers: {
        type: DataTypes.JSON, 
        allowNull: true
    }
}, {
    tableName: 'transactions_payme',
    timestamps: false
});

export default TransactionsPayme;
