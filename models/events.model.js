import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../plugins/sequelize.js";

const Events = sequelize.define('events', {
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true, 
        unique: true 
    },

    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    preview: {
        type: DataTypes.STRING,
        allowNull: false
    },

    content: {
        type: DataTypes.JSON,
        allowNull: false, 
    },

    views: {
        type: INTEGER,
        allowNull: false, 
    }
})

export default Events;