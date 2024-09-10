import sequelize from "../plugins/sequelize.js";
import { DataTypes } from "sequelize";

const MentrosSocials = sequelize.define('mentors_socials', {
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true, 
        unique: true 
    },

    instagram: {
        type: DataTypes.TEXT,
    },

    telegram: {
        type: DataTypes.TEXT,
    },

    gmail: {
        type: DataTypes.TEXT,
    },

    github: {
        type: DataTypes.TEXT,
    },
}, {
    timestamps: false,
})

export default MentrosSocials;