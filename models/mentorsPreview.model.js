import sequelize from "../plugins/sequelize.js";
import { DataTypes } from "sequelize";

const MentrosPreviews = sequelize.define('mentros_previews', {
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

export default MentrosPreviews;