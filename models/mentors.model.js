import sequelize from "../plugins/sequelize.js";
import { DataTypes } from "sequelize";

const Mentros = sequelize.define('mentors', {
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
    },

    first_name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },

    speciality: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
})

export default Mentros;