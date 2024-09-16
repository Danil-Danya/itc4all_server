/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */





















/**
 * @swagger
 * /registration:
 *   post:
 *     summary: Регистрация нового пользователя
 *     description: Регистрирует нового пользователя на основе переданных данных.
 *     tags:
 *       - Authorisation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "example@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "password123"
 *               first_name:
 *                 type: string
 *                 example: "John"
 *               last_name:
 *                 type: string
 *                 example: "Doe"
 *     responses:
 *       200:
 *         description: Успешная регистрация
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 email:
 *                   type: string
 *                   example: "example@example.com"
 *                 first_name:
 *                   type: string
 *                   example: "John"
 *                 last_name:
 *                   type: string
 *                   example: "Doe"
 *       400:
 *         description: Ошибка валидации данных
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Войти в систему
 *     description: Аутентифицирует пользователя и возвращает JWT токен.
 *     tags:
 *       - Authorisation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *                 description: Электронная почта пользователя
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "password123"
 *                 description: Пароль пользователя
 *     responses:
 *       200:
 *         description: Успешная аутентификация, возвращен JWT токен
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Неверные учетные данные
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Получить профиль текущего пользователя
 *     description: Возвращает профиль текущего пользователя на основе JWT токена.
 *     tags:
 *       - Authorisation
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     responses:
 *       200:
 *         description: Успешно получен профиль пользователя
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 first_name:
 *                   type: string
 *                   example: "John"
 *                 last_name:
 *                   type: string
 *                   example: "Doe"
 *                 country:
 *                   type: string
 *                   example: "USA"
 *                 city:
 *                   type: string
 *                   example: "New York"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-01-01T12:00:00Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-01-01T12:00:00Z"
 *                 profile_id:
 *                   type: integer
 *                   example: 123
 *       401:
 *         description: Неавторизован (JWT токен отсутствует или недействителен)
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /active-account/{activate_link}:
 *   get:
 *     summary: Активация учетной записи
 *     description: Активирует учетную запись пользователя по уникальной ссылке активации.
 *     tags:
 *       - Authorisation
 *     parameters:
 *       - in: path
 *         name: activation_link
 *         required: true
 *         schema:
 *           type: string
 *           example: "12345-activation-link"
 *         description: Уникальная ссылка активации, которая была отправлена пользователю на почту
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     responses:
 *       302:
 *         description: Перенаправление на страницу успешной активации
 *         headers:
 *           Location:
 *             description: URL для редиректа
 *             schema:
 *               type: string
 *               example: "/activation-success"
 *       400:
 *         description: Ошибка в запросе (неверная ссылка активации)
 *       401:
 *         description: Неавторизован (JWT токен отсутствует или недействителен)
 *       500:
 *         description: Внутренняя ошибка сервера
 */
























//Mentor

/**
 * @swagger
 * /mentors:
 *   post:
 *     summary: Создать нового ментора
 *     description: Создает нового ментора на основе предоставленных данных, включая социальные сети и файл изображения.
 *     tags:
 *       - Mentor
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "mentor@example.com"
 *               first_name:
 *                 type: string
 *                 example: "John"
 *               last_name:
 *                 type: string
 *                 example: "Doe"
 *               speciality:
 *                 type: string
 *                 example: "Software Engineering"
 *               experience:
 *                 type: number
 *                 example: 5
 *               instagram:
 *                 type: string
 *                 format: url
 *                 example: "https://instagram.com/mentor"
 *               telegram:
 *                 type: string
 *                 format: url
 *                 example: "https://t.me/mentor"
 *               gmail:
 *                 type: string
 *                 format: email
 *                 example: "mentor@gmail.com"
 *               github:
 *                 type: string
 *                 format: url
 *                 example: "https://github.com/mentor"
 *               linkedin:
 *                 type: string
 *                 format: url
 *                 example: "https://linkedin.com/in/mentor"
 *               image:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Успешное создание ментора
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 email:
 *                   type: string
 *                   example: "mentor@example.com"
 *                 first_name:
 *                   type: string
 *                   example: "John"
 *                 last_name:
 *                   type: string
 *                   example: "Doe"
 *                 speciality:
 *                   type: string
 *                   example: "Software Engineering"
 *                 experience:
 *                   type: number
 *                   example: 5
 *                 social:
 *                   type: object
 *                   properties:
 *                     instagram:
 *                       type: string
 *                       example: "https://instagram.com/mentor"
 *                     telegram:
 *                       type: string
 *                       example: "https://t.me/mentor"
 *                     gmail:
 *                       type: string
 *                       example: "mentor@gmail.com"
 *                     github:
 *                       type: string
 *                       example: "https://github.com/mentor"
 *                     linkedin:
 *                       type: string
 *                       example: "https://linkedin.com/in/mentor"
 *                 path:
 *                   type: string
 *                   example: "/uploads/profile.jpg"
 *       400:
 *         description: Ошибка валидации данных
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /mentors/{id}:
 *   delete:
 *     summary: Удалить ментора
 *     description: Удаляет ментора по идентификатору.
 *     tags:
 *       - Mentor
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Идентификатор ментора
 *     responses:
 *       200:
 *         description: Успешное удаление ментора
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deletedMentor:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     email:
 *                       type: string
 *                       example: "mentor@example.com"
 *                     first_name:
 *                       type: string
 *                       example: "John"
 *                     last_name:
 *                       type: string
 *                       example: "Doe"
 *                     speciality:
 *                       type: string
 *                       example: "Software Engineering"
 *                     experience:
 *                       type: number
 *                       example: 5
 *       404:
 *         description: Ментор не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /mentors/{id}:
 *   put:
 *     summary: Редактировать информацию о менторе
 *     description: Редактирует данные ментора по его идентификатору.
 *     tags:
 *       - Mentor
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Идентификатор ментора
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "mentor@example.com"
 *               first_name:
 *                 type: string
 *                 example: "John"
 *               last_name:
 *                 type: string
 *                 example: "Doe"
 *               speciality:
 *                 type: string
 *                 example: "Software Engineering"
 *               experience:
 *                 type: number
 *                 example: 5
 *     responses:
 *       200:
 *         description: Успешное редактирование ментора
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 email:
 *                   type: string
 *                   example: "mentor@example.com"
 *                 first_name:
 *                   type: string
 *                   example: "John"
 *                 last_name:
 *                   type: string
 *                   example: "Doe"
 *                 speciality:
 *                   type: string
 *                   example: "Software Engineering"
 *                 experience:
 *                   type: number
 *                   example: 5
 *       404:
 *         description: Ментор не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */



/**
 * @swagger
 * /mentors/{id}:
 *   patch:
 *     summary: Обновить информацию о менторе
 *     description: Обновляет частично данные ментора по его идентификатору.
 *     tags:
 *       - Mentor
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Идентификатор ментора
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "mentor@example.com"
 *               first_name:
 *                 type: string
 *                 example: "John"
 *               last_name:
 *                 type: string
 *                 example: "Doe"
 *               speciality:
 *                 type: string
 *                 example: "Software Engineering"
 *               experience:
 *                 type: number
 *                 example: 5
 *     responses:
 *       200:
 *         description: Успешное обновление данных ментора
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 email:
 *                   type: string
 *                   example: "mentor@example.com"
 *                 first_name:
 *                   type: string
 *                   example: "John"
 *                 last_name:
 *                   type: string
 *                   example: "Doe"
 *                 speciality:
 *                   type: string
 *                   example: "Software Engineering"
 *                 experience:
 *                   type: number
 *                   example: 5
 *       404:
 *         description: Ментор не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /mentors:
 *   get:
 *     summary: Получить список всех менторов
 *     description: Возвращает список менторов с возможностью фильтрации, сортировки и пагинации.
 *     tags:
 *       - Mentor
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Номер страницы для пагинации (по умолчанию 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Количество записей на странице (по умолчанию 10)
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *           example: "John Doe"
 *         description: Поисковый запрос для поиска по имени и другим полям
 *       - in: query
 *         name: ordering
 *         schema:
 *           type: string
 *           example: "first_name"
 *         description: Поле для сортировки
 *       - in: query
 *         name: oredering_type
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *           example: "ASC"
 *         description: Направление сортировки (по возрастанию или убыванию)
 *       - in: query
 *         name: where
 *         schema:
 *           type: string
 *           example: "experience>3"
 *         description: Условие фильтрации по значению
 *       - in: query
 *         name: whereFields
 *         schema:
 *           type: string
 *           example: "experience"
 *         description: Поле для применения фильтрации
 *     responses:
 *       200:
 *         description: Список менторов успешно получен
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   email:
 *                     type: string
 *                     example: "mentor@example.com"
 *                   first_name:
 *                     type: string
 *                     example: "John"
 *                   last_name:
 *                     type: string
 *                     example: "Doe"
 *                   speciality:
 *                     type: string
 *                     example: "Software Engineering"
 *                   experience:
 *                     type: number
 *                     example: 5
 *       400:
 *         description: Ошибка в запросе (неверные параметры)
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /mentors/{id}:
 *   get:
 *     summary: Получить информацию о менторе
 *     description: Возвращает данные одного ментора по его ID.
 *     tags:
 *       - Mentor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID ментора
 *     responses:
 *       200:
 *         description: Успешно получен ментор
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 email:
 *                   type: string
 *                   example: "mentor@example.com"
 *                 first_name:
 *                   type: string
 *                   example: "John"
 *                 last_name:
 *                   type: string
 *                   example: "Doe"
 *                 speciality:
 *                   type: string
 *                   example: "Software Engineering"
 *                 experience:
 *                   type: number
 *                   example: 5
 *       400:
 *         description: Ошибка в запросе (неверные параметры)
 *       401:
 *         description: Неавторизован (JWT токен отсутствует или недействителен)
 *       404:
 *         description: Ментор не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /mentors/social/{id}:
 *   patch:
 *     summary: Обновить социальные сети ментора
 *     description: Обновляет информацию о социальных сетях ментора по его уникальному идентификатору.
 *     tags:
 *       - Mentor
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Уникальный идентификатор ментора
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               instagram:
 *                 type: string
 *                 format: url
 *                 example: "https://instagram.com/mentor"
 *                 description: Ссылка на Instagram профайл
 *               telegram:
 *                 type: string
 *                 format: url
 *                 example: "https://t.me/mentor"
 *                 description: Ссылка на Telegram профайл
 *               gmail:
 *                 type: string
 *                 format: email
 *                 example: "mentor@gmail.com"
 *                 description: Электронная почта
 *               github:
 *                 type: string
 *                 format: url
 *                 example: "https://github.com/mentor"
 *                 description: Ссылка на GitHub профайл
 *               linkedin:
 *                 type: string
 *                 format: url
 *                 example: "https://linkedin.com/in/mentor"
 *                 description: Ссылка на LinkedIn профайл
 *     responses:
 *       200:
 *         description: Успешное обновление информации о социальных сетях ментора
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 instagram:
 *                   type: string
 *                   example: "https://instagram.com/mentor"
 *                 telegram:
 *                   type: string
 *                   example: "https://t.me/mentor"
 *                 gmail:
 *                   type: string
 *                   example: "mentor@gmail.com"
 *                 github:
 *                   type: string
 *                   example: "https://github.com/mentor"
 *                 linkedin:
 *                   type: string
 *                   example: "https://linkedin.com/in/mentor"
 *       400:
 *         description: Ошибка валидации данных
 *       404:
 *         description: Ментор не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /mentors/social/{id}:
 *   put:
 *     summary: Обновить социальные сети ментора
 *     description: Обновляет информацию о социальных сетях ментора по его уникальному идентификатору.
 *     tags:
 *       - Mentor
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Уникальный идентификатор ментора
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               instagram:
 *                 type: string
 *                 format: url
 *                 example: "https://instagram.com/mentor"
 *                 description: Ссылка на Instagram профайл
 *               telegram:
 *                 type: string
 *                 format: url
 *                 example: "https://t.me/mentor"
 *                 description: Ссылка на Telegram профайл
 *               gmail:
 *                 type: string
 *                 format: email
 *                 example: "mentor@gmail.com"
 *                 description: Электронная почта
 *               github:
 *                 type: string
 *                 format: url
 *                 example: "https://github.com/mentor"
 *                 description: Ссылка на GitHub профайл
 *               linkedin:
 *                 type: string
 *                 format: url
 *                 example: "https://linkedin.com/in/mentor"
 *                 description: Ссылка на LinkedIn профайл
 *     responses:
 *       200:
 *         description: Успешное обновление информации о социальных сетях ментора
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 instagram:
 *                   type: string
 *                   example: "https://instagram.com/mentor"
 *                 telegram:
 *                   type: string
 *                   example: "https://t.me/mentor"
 *                 gmail:
 *                   type: string
 *                   example: "mentor@gmail.com"
 *                 github:
 *                   type: string
 *                   example: "https://github.com/mentor"
 *                 linkedin:
 *                   type: string
 *                   example: "https://linkedin.com/in/mentor"
 *       400:
 *         description: Ошибка валидации данных
 *       404:
 *         description: Ментор не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */










































































































































/**
 * @swagger
 * /transactions/payme:
 *   post:
 *     summary: Обработка платежей через Payme API
 *     description: Обрабатывает различные запросы, такие как создание, выполнение, отмена транзакций, и получение выписки через Payme API.
 *     tags:
 *       - Transactions
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               method:
 *                 type: string
 *                 example: "CheckPerformTransaction"
 *                 description: Метод Payme API
 *               params:
 *                 type: object
 *                 properties:
 *                   account:
 *                     type: object
 *                     properties:
 *                       user_email:
 *                         type: string
 *                         example: "user@example.com"
 *                         description: Электронная почта пользователя
 *                       product_type:
 *                         type: string
 *                         example: "subscription"
 *                         description: Тип продукта, который оплачивается
 *                       product_id:
 *                         type: integer
 *                         example: 123
 *                         description: Идентификатор продукта
 *                   amount:
 *                     type: object
 *                     properties:
 *                       amount:
 *                         type: number
 *                         example: 100000
 *                         description: Сумма транзакции в минимальной валюте (например, тиины)
 *                 required:
 *                   - account
 *                   - amount
 *               id:
 *                 type: string
 *                 example: "1234567890"
 *                 description: Уникальный идентификатор запроса
 *     responses:
 *       200:
 *         description: Успешная обработка запроса
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: object
 *                   description: Результат выполнения метода Payme
 *       400:
 *         description: Неверные параметры запроса
 *       500:
 *         description: Внутренняя ошибка сервера
 */

