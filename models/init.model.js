import sequelize from '../plugins/sequelize.js'; 

import UserModel from './user.model.js';
import ProfileModel from './profile.model.js';
import AvararModel from './avatar.model.js';
import RolesModel from './roles.model.js';
import MentorsModel from './mentors.model.js';
import MentrosPreviewsModel from './mentorsPreview.model.js';
import MentrosSocialModel from './mentorsSocial.model.js';
import EventsModel from './events.model.js';
import CourseModel from './course.model.js';
import CourseCategoriesModel from './courseCategories.model.js';
import CourseListModel from './courseList.model.js';
import CoursePreviewModel from './coursePreview.model.js';
import VideosModel from './videos.model.js';
import Transactions from './transactions.model.js';
import IsBuedCourse from './courseBuyed.model.js';
import RequestsModel from './requests.model.js';
import ZoomSessionsModel from './zoomSessions.model.js';

UserModel.hasOne(ProfileModel, { as: 'profile', foreignKey: 'profile_id' });
UserModel.hasOne(AvararModel, { as: 'avatar', foreignKey: 'avatar_id' });

MentorsModel.hasOne(MentrosPreviewsModel, { as: 'mentors_previews', foreignKey: 'mentors_previevs_id' });
MentorsModel.hasOne(MentrosSocialModel, { as: 'mentros_social', foreignKey: 'mentors_social_id' });

CourseModel.belongsToMany(CourseCategoriesModel, { through: 'courses_categories_branch', as: 'coureses_categories' });
CourseCategoriesModel.belongsToMany(CourseModel, { through: 'courses_categories_branch', as: 'coureses' });
CourseModel.hasMany(CourseListModel, { as: 'course_list', foreignKey: 'course_id' });
CourseModel.hasOne(CoursePreviewModel, { as: 'course_preview', foreignKey: 'course_preview_id' });
CourseModel.hasMany(VideosModel, { as: 'videos', foreignKey: 'course_id' });

UserModel.belongsToMany(CourseModel, { through: IsBuedCourse, foreignKey: 'userId' });
CourseModel.belongsToMany(UserModel, { through: IsBuedCourse, foreignKey: 'courseId' });

VideosModel.belongsTo(CourseModel, { as: 'course', foreignKey: 'course_id' });

UserModel.hasMany(ZoomSessionsModel, { foreignKey: 'user_id', as: 'zoom_sessions' });
ZoomSessionsModel.belongsTo(UserModel, { foreignKey: 'user_id', as: 'user' });

MentorsModel.hasMany(ZoomSessionsModel, { foreignKey: 'mentor_id', as: 'zoom_sessions' });
ZoomSessionsModel.belongsTo(MentorsModel, { foreignKey: 'mentor_id', as: 'menror' });

sequelize.sync();

export default {
    UserModel,
    ProfileModel,
    AvararModel,
    RolesModel,
    MentorsModel,
    MentrosPreviewsModel,
    MentrosSocialModel,
    EventsModel,
    CourseModel,
    CourseCategoriesModel,
    CourseListModel,
    CoursePreviewModel,
    VideosModel,
    Transactions,
    RequestsModel
}