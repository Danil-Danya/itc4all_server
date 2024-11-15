import sequelize from "../plugins/sequelize.js";
import { DataTypes } from "sequelize";

const Roles = sequelize.define('roles', {
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true, 
        unique: true 
    },

    name: { 
        type: DataTypes.ENUM('SUPER_ADMIN', 'ADMIN', 'USER'), 
        allowNull: false, 
    },
}, {
    timestamps: false,
})

export default Roles;