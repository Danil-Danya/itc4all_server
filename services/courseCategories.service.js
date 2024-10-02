import ApiError from "../exeptions/api.error.js";
import {
    createCourseCategory,
    deleteCourseCategory,
    updateCourseCategory,
    editeCourseCategory,
    getAllCourseCategory,
    getOneCourseCategory
} from '../repositories/courseCategories.repositoy.js'

class CoursesCategoriesServices {
    async createCoureseCategories (category_name) {
        const newCourseCategory = await createCourseCategory(category_name);
        return newCourseCategory;
    }

    async deleteCoureseCategories (id) {
        const deletedCourseCategory = await deleteCourseCategory(id);
        return deletedCourseCategory;
    }

    async updateCoureseCategories (id, data) {
        const updatedCourseCategory = await updateCourseCategory(id, data);
        return updatedCourseCategory;
    }

    async editeCoureseCategories (id, data) {
        const editedCourseCategory = await editeCourseCategory(id, data);
        return editedCourseCategory;
    }

    async getOneCoureseCategories(category_name) {
        const getOneCoureseCategories = await getAllCourseCategory(category_name);
        return getOneCoureseCategories;
    }

    async getAllCoureseCategories () {
        const getAllCoureseCategories = await getAllCourseCategory();
        return getAllCoureseCategories;
    }
}

export default new CoursesCategoriesServices()