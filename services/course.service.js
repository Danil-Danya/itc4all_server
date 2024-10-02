import ApiError from "../exeptions/api.error.js";

import CoursePreviewModel from '../models/coursePreview.model.js';
import CoursesCategoriesModel from "../models/courseCategories.model.js";
import CourseListModel from '../models/courseList.model.js';
import VideoModel from '../models/videos.model.js';

import { 
    getAllCourse,
    createCourse,
    deleteCourse,
    updateCourse, 
    editeCourse,
    getOneCourse
} from "../repositories/course.repository.js";

//import { createCoursePreview } from "../repositories/couresePreview.repository.js";

class CourseService {
    constructor () {
        //{ model: CoursePreviewModel, as: 'course_preview' }
        this.include = [];
    }

    async createCourse (data, path, categories) {
        if (categories) {
            categories = categories.split(',');
        }

        const createdCourse = await createCourse(data, categories);

        const { id } = createdCourse.id; 
        const createdCoursePreview = await createCoursePreview(id, path);
        
        return {
            createdCourse,
            //createdCoursePreview
        }
    }

    async deleteCourse (id) {
        const deletedCourse = await deleteCourse(id);
        return deletedCourse;
    }

    async editeCourse (id, data) {
        const editedCourse = await editeCourse(id, data);
        return editedCourse;
    }

    async updateCourse (id, course) {
        const updatedCourse = await updateCourse(id, course);
        return updatedCourse;
    }

    async getOneCourse (id) {
        const course = await getOneCourse(id, this.include);
        return course;
    }

    async getAllCourses (pagination, filter, whereClause={}) {
        const { limit, page } = pagination;
        const { search, where, whereField, ordering, orderingType, include } = filter;


        if (whereField && where !== undefined) {
            whereClause[whereField] = where;
        }

        const offset = page * limit - limit;
        const order = ordering ? [[ordering, orderingType ? orderingType : 'ACS']] : [];

        if (search) {
            whereClause.first_name = { [Op.like]: `%${search}%` };
        }

        if (include) {
            //const videosInclude = { model: VideoModel, as: 'course' };
            //const courseListInclude = { model: CourseListModel, as: 'course_list' };
            const courseCategoriesInclude = { model: CoursesCategoriesModel, as: 'coureses_categories', 
                attributes: { exclude: ['id'] },
                through: { attributes: [] }
            };

            this.include.push(courseCategoriesInclude);
        }

        const courses = await getAllCourse({ limit, offset }, whereClause, order, this.include);
        return courses;
    }
}

export default new CourseService();