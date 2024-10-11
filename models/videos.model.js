import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../plugins/sequelize.js";


const Videos = sequelize.define('videos', {
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true, 
        unique: true 
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },

    path: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default Videos;