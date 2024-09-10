import sequelize from "../plugins/sequelize.js";
import { DataTypes } from "sequelize";

const User = sequelize.define('user', {
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true, 
        unique: true 
    },

    email: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true 
    },

    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'USER'
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    activation_link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

export default User;