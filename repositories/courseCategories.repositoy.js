import ApiError from '../exeptions/api.error.js';
import CoursesCategoriesModel from '../models/courseCategories.model.js';

const createCourseCategory = async (category_name) => {
    const candidateCategory = await CoursesCategoriesModel.findOne({ where: { category_name } });
    if (candidateCategory) {
        throw ApiError.BadRequest('This course is true; Categories is unical unit');
    }

    const newCourse = await CoursesCategoriesModel.create({ category_name });
    if (!newCourse) {
        throw ApiError.BadRequest('This course categories is not be created');
    }

    return newCourse;
}

const deleteCourseCategory = async (id) => {
    const courseCategory = await CoursesCategoriesModel.findOne({ where: { id } });
    if (!courseCategory) {
        throw ApiError.BadRequest('This course categories is not defined');
    }

    await courseCategory.destroy();

    return {
        message: 'This categoru has been deleted',
    };
}

const updateCourseCategory = async (id, data) => {
    if (!id || !data) {
        return ApiError.BadRequest('Id and data fields is required');
    }

    const courseCategory = await CoursesCategoriesModel.findOne({ where: { id } });
    if (!courseCategory) {
        return ApiError.BadRequest('The course category not found');
    }

    const updatedCourseCategory = await courseCategory.update(data);
    return updatedCourseCategory;
}

const editeCourseCategory = async (id, data) => {
    if (!id || !data) {
        return ApiError.BadRequest('Id and data fields is required');
    }

    const courseCategory = await CoursesCategoriesModel.findOne({ where: { id } });
    if (!courseCategory) {
        return ApiError.BadRequest('The course category not found');
    }

    Object.keys(data).forEach((key) => {
        if (courseCategory[key] !== undefined) {
            courseCategory[key] = data[key];
        }
    });

    const editedCourseCategory = await courseCategory.save();
    return editedCourseCategory;
}

const getOneCourseCategory = async (category_name) => {
    const courseCategory = await CoursesCategoriesModel.findOne({ where: { id } });
    if (!courseCategory) {
        return ApiError.BadRequest('The course category not found');
    }

    return courseCategory
}

const getAllCourseCategory = async () => {
    const courseCategories = await CoursesCategoriesModel.findAll();
    return courseCategories
}

export {
    createCourseCategory,
    deleteCourseCategory,
    updateCourseCategory,
    editeCourseCategory,
    getAllCourseCategory,
    getOneCourseCategory
}