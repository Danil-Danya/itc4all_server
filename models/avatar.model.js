import sequelize from "../plugins/sequelize.js";
import { DataTypes } from "sequelize";

const Avatars = sequelize.define('avatars', {
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true, 
        unique: true 
    },

    path: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
}, {
    timestamps: false,
})

export default Avatars;