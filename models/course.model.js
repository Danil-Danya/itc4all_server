import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../plugins/sequelize.js";

const Courses = sequelize.define('courses', {
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

    mentor: {
        type: DataTypes.STRING,
        allowNull: false, 
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },

    full_price: {
        type: DataTypes.INTEGER,
    },

    lesson_count: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    }
})

export default Courses;