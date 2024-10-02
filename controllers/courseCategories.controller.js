import courseCategoriesService from "../services/courseCategories.service.js";

class CoursesCategoriesController {
    async createCourseCategory (req, res, next) {
        try {
            const categoriesName = req.body.category_name;

            const createdCategory = await courseCategoriesService.createCoureseCategories(categoriesName);
            
            return res.json(createdCategory);
        }
        catch (error) {
            next(error);
        }
    }

    async getOneCourseCategory(req, res, next) {
        try {
            const categoriesName = req.query.category_name;

            const category = await courseCategoriesService.getOneCoureseCategories(categoriesName);

            return res.json(category);
        }
        catch (error) {
            next(error);
        }
    }

    async getAllCourseCategory(req, res, next) {
        try {
            const categories = await courseCategoriesService.getAllCoureseCategories();
            return res.json(categories);
        }
        catch (error) {
            next(error);
        }
    }

    async deleteCourseCategory(req, res, next) {
        try {
            const id = req.params.id;

            const deltedCategory = await courseCategoriesService.deleteCoureseCategories(id);
            return res.json(deltedCategory);
        }
        catch (error) {
            next(error);
        }
    }

    async updateCourseCategory(req, res, next) {
        try {
            const id = req.params.id;
            const data = req.body; // category_name only;

            const updatedCategory = await courseCategoriesService.updateCoureseCategories(id, data);
            return res.json(updatedCategory);
        }
        catch (error) {
            next(error);
        }
    }

    async editeCourseCategory(req, res, next) {
        try {
            const id = req.params.id;
            const data = req.body; // category_name only;

            const editedCategory = await courseCategoriesService.editeCoureseCategories(id, data);
            return res.json(editedCategory);
        }
        catch (error) {
            next(error);
        }
    }
}

export default new CoursesCategoriesController();