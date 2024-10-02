import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../plugins/sequelize.js";


const CoursesCategories = sequelize.define('courses_categories', {
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true, 
        unique: true 
    },

    category_name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
}, {
    timestamps: false,
})

export default CoursesCategories;