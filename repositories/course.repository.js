import CoursesModel from "../models/course.model.js"
import CoursesCategoriesModel from "../models/courseCategories.model.js";
import ApiError from "../exeptions/api.error.js"

const createCourse = async (data, categories=[]) => {
    const newCourse = await CoursesModel.create(data);
    if (!newCourse) {
        throw ApiError.BadRequest('Course does not be created');
    }

    if (categories.length > 0 && Array.isArray(categories)) {
        await categories.forEach(async (item) => {
            const category = await CoursesCategoriesModel.findOne({ where: { category_name: item } });
            console.log(category);
            
            await newCourse.setCoureses_categories(category);
        })
    }

    return newCourse;
}

const deleteCourse = async (id) => {
    const course = await CoursesModel.findOne({ where: { id } });
    if (!course) {
        throw ApiError.BadRequest('Course is not found');
    }

    await course.destroy();
    return { 
        message: 'This course has been deleted' 
    }
}

const editeCourse = async (id, data) => {
    const course = await CoursesModel.findOne({ where: { id } });
    if (!course) {
        throw ApiError.BadRequest('Course is not found');
    }

    Object.keys(data).forEach((key) => {
        if (course[key] !== undefined) {
            course[key] = data[key];
        }
    });

    const editedCourse = await course.save();
    return editedCourse;
}

const updateCourse = async (id, courseData) => {
    const course = await CoursesModel.findOne({ where: { id } });
    if (!course) {
        throw ApiError.BadRequest('Course is not found');
    }

    const updatedCourse = await course.update(updateCourse);
    if (!updatedCourse) {
        throw ApiError.BadRequest('Course does be not updated');
    }

    return updatedCourse;
}

const getOneCourse = async (id, include=[]) => {
    const course = await CoursesModel.findOne({ where: { id }, include });
    if (!course) {
        throw ApiError.BadRequest('Course is not found');
    }

    return course;
}

const getAllCourse = async (pagination, where={}, order={}, include=[]) => {
    const { offset, limit } = pagination;
    const courses = await CoursesModel.findAndCountAll({ where, limit, offset, order, include });

    return courses;
}

export {
    createCourse,
    deleteCourse,
    editeCourse,
    updateCourse,
    getOneCourse,
    getAllCourse
}