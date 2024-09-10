import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../plugins/sequelize.js";

const CoursesPreview = sequelize.define('courses_preview', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },

    path: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    timestamps: false,
})

export default CoursesPreview;