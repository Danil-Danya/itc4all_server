import CoursesPreviewModel from "../models/coursePreview.model.js";
import ApiError from "../exeptions/api.error.js";

const createCoursesPreview = async (id, path) => {
    const createdCouresePreview = await CoursesPreviewModel.create({ path, course_preview_id: id });
    if (!createCoursesPreview) {
        throw ApiError.BadRequest('This course does not be created');
    }

    return createdCouresePreview;
}

const updateCoursesPreview = async (id, data) => {
    const preview = await CoursesPreviewModel.findOne({ where: { course_preview_id: id } });
    if (!preview) {
        throw ApiError.BadRequest('This preview not found');
    }

    const updatedPreview = await preview.update(data);
    if (!updateCoursesPreview) {
        throw ApiError.BadRequest('This preview not be updeted');
    }

    return updatedPreview;
}

export {
    createCoursesPreview,
    updateCoursesPreview
}