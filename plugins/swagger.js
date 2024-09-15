import swaggerJsdoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "ACT4All API Документация",
            version: "1.0.0",
            description: "Апи документация для сайта по продаже курсов из сферы IT.",
        },
        servers: [
            {
                url: "http://localhost:5000/server-api/",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: ["./swagger/*.js"],
};

const specs = swaggerJsdoc(options);

export default (app) => {
    app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));
}