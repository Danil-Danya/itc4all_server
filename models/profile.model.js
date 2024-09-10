import sequelize from "../plugins/sequelize.js";
import { DataTypes } from "sequelize";

const Profiles = sequelize.define('profiles', {
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true, 
        unique: true 
    },

    first_name: {
        type: DataTypes.STRING, 
    },

    last_name: {
        type: DataTypes.STRING, 
    },

    country: {
        type: DataTypes.STRING, 
    },

    city: {
        type: DataTypes.STRING, 
    },
}, {
    timestamps: false,
})

export default Profiles;