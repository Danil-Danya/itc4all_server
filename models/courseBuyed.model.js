import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../plugins/sequelize.js";

import UserModel from './user.model.js';
import CourseModel from "./course.model.js";

const IsBuedCourse = sequelize.define('is_bued_course', {
    is_purchased: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: UserModel, 
            key: 'id',
        }
    },
    courseId: {
        type: DataTypes.INTEGER,
        references: {
            model: CourseModel,
            key: 'id',
        }
    },
}, {
    timestamps: false
})

export default IsBuedCourse