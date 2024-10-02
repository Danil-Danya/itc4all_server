import ApiError from '../exeptions/api.error.js';
import courseService from '../services/course.service.js';

class CourseController {
    async createCourse (req, res, next) {
        try {
            const name = req.body.name;
            const mentor = req.body.mentor;
            const price = req.body.price;
            const full_price = req.body.full_price;
            const lesson_count = 0;

            const categories = req.query.categories;

            const path = req.file ? req.file.filename : null;

            const courseData = { name, mentor, price, full_price, lesson_count };
            console.log(req.body);
            

            const newCourse = await courseService.createCourse(courseData, path, categories);
            return res.json(newCourse);
        }
        catch (error) {
            next(error);
        }
    }

    async deleteCourse (req, res, next) {
        try {
            const { id } = req.body;
            const deletedCourse = await courseService.deleteCourse(id);

            return res.json({ message: 'This course has been deleted' });
        }
        catch (error) {
            next(error);
        }
    }

    async editeCourse (req, res, next) {
        try {
            const { id } = req.body;
            const editedCourse = await courseService.editeCourse(id);

            return res.json(editedCourse);
        }
        catch (error) {
            next(error);
        }
    }

    async updateCourse (req, res, next) {
        try {
            const { id } = req.body;
            const updatedCourse = await courseService.updateCourse(id);

            return res.json(updatedCourse);
        }
        catch (error) {
            next(error);
        }
    }

    async getAllCourse (req, res, next) {
        try {
            const page = req.query.page || 1;
            const limit = req.query.limit || 10;

            const where = req.query.where;
            const whereField = req.query.whereField;
            const ordering = req.query.ordering;
            const orderingType = req.query.orderingType;
            const include = req.query.include; //modelName

            const pagination = { page, limit };
            const filter = { where, whereField, ordering, orderingType, include };

            const courses = await courseService.getAllCourses(pagination, filter);
            return res.json(courses);
        }
        catch (error) {
            next(error);
        }
    }

    async getOneCourse (req, res, next) {
        try {
            const { where } = req.query.where; // если я захочу сделать поиск по имени курса
            const course = await courseService.getOneCourse({ where });

            return res.json(course);
        }
        catch (error) {
            next(error);
        }
    }
}

export default new CourseController();