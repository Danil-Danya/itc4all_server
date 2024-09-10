import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../plugins/sequelize.js";

const CoursesList = sequelize.define('courses_list', {
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true, 
        primaryKey: true, 
        unique: true 
    },

    list_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    videos_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false,
})

export default CoursesList;