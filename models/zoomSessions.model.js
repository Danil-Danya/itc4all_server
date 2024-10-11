import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../plugins/sequelize.js";

const ZoomSessions = sequelize.define('zoom_sessions', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    start_session_link: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    join_session_link: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    start_date_and_time: {
        type: DataTypes.DATE,
        allowNull: false
    },

    unical_zoom_session_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },

    zoom_session_password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    mentor_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    mentor_email: {
        type: DataTypes.STRING,
        allowNull: false
    }, 

    user_email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default ZoomSessions;