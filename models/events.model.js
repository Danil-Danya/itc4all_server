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