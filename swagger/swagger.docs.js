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
 * /request:
 *   post:
 *     summary: Отправить новый запрос
 *     description: Создает новый запрос с информацией о пользователе, такой как номер телефона, имя и сообщение.
 *     tags:
 *       - Request
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "+123456789"
 *                 description: Номер телефона пользователя
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *                 description: Имя пользователя
 *               message:
 *                 type: string
 *                 example: "I would like more information."
 *                 description: Сообщение от пользователя
 *     responses:
 *       200:
 *         description: Успешное создание нового запроса
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 phone:
 *                   type: string
 *                   example: "+123456789"
 *                 name:
 *                   type: string
 *                   example: "John Doe"
 *                 message:
 *                   type: string
 *                   example: "I would like more information."
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-09-23T14:23:00Z"
 *       400:
 *         description: Неверные параметры запроса
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /request/{id}:
 *   get:
 *     summary: Получить данные запроса по ID
 *     description: Возвращает информацию о запросе по уникальному идентификатору.
 *     tags:
 *       - Request
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Уникальный идентификатор запроса
 *     responses:
 *       200:
 *         description: Успешное получение данных запроса
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 phone:
 *                   type: string
 *                   example: "+123456789"
 *                 name:
 *                   type: string
 *                   example: "John Doe"
 *                 message:
 *                   type: string
 *                   example: "I would like more information."
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-09-23T14:23:00Z"
 *       400:
 *         description: Неверные параметры запроса
 *       404:
 *         description: Запрос не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /request/{id}:
 *   delete:
 *     summary: Удалить запрос по ID
 *     description: Удаляет запрос по уникальному идентификатору.
 *     tags:
 *       - Request
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Уникальный идентификатор запроса
 *     responses:
 *       200:
 *         description: Успешное удаление запроса
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "This request has been deleted"
 *       400:
 *         description: Неверные параметры запроса
 *       404:
 *         description: Запрос не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */



















































/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Создать новый курс
 *     description: Создает новый курс с указанными параметрами, включая имя, наставника, цену, полную цену, категории и загруженный файл (например, изображение обложки курса).
 *     tags:
 *       - Course
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:  # Используем для загрузки файла
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Web Development"
 *                 description: Название курса
 *               mentor:
 *                 type: string
 *                 example: "John Doe"
 *                 description: Имя наставника курса
 *               price:
 *                 type: number
 *                 example: 100
 *                 description: Стоимость курса
 *               full_price:
 *                 type: number
 *                 example: 200
 *                 description: Полная цена курса (без скидок)
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Изображение обложки курса
 *     parameters:
 *       - in: query
 *         name: categories
 *         schema:
 *           type: string
 *           example: "Development, Programming"
 *         description: Категории курса, разделенные запятыми
 *     responses:
 *       200:
 *         description: Успешное создание курса
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Web Development"
 *                 mentor:
 *                   type: string
 *                   example: "John Doe"
 *                 price:
 *                   type: number
 *                   example: 100
 *                 full_price:
 *                   type: number
 *                   example: 200
 *                 lesson_count:
 *                   type: integer
 *                   example: 0
 *                 categories:
 *                   type: string
 *                   example: "Development, Programming"
 *                 image:
 *                   type: string
 *                   example: "course-image.jpg"
 *       400:
 *         description: Ошибка валидации данных
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /courses:
 *   delete:
 *     summary: Удалить курс
 *     description: Удаляет курс по указанному ID.
 *     tags:
 *       - Course
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *                 description: Уникальный идентификатор курса
 *     responses:
 *       200:
 *         description: Успешное удаление курса
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "This course has been deleted"
 *       400:
 *         description: Неверные параметры запроса
 *       404:
 *         description: Курс не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /courses:
 *   put:
 *     summary: Редактировать курс
 *     description: Редактирует курс по указанному ID.
 *     tags:
 *       - Course
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *                 description: Уникальный идентификатор курса
 *     responses:
 *       200:
 *         description: Успешное редактирование курса
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Web Development"
 *                 mentor:
 *                   type: string
 *                   example: "John Doe"
 *                 price:
 *                   type: number
 *                   example: 300
 *                 full_price:
 *                   type: number
 *                   example: 500
 *                 lesson_count:
 *                   type: integer
 *                   example: 12
 *       400:
 *         description: Неверные параметры запроса
 *       404:
 *         description: Курс не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /courses:
 *   patch:
 *     summary: Обновить курс
 *     description: Обновляет существующий курс по указанному ID.
 *     tags:
 *       - Course
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *                 description: Уникальный идентификатор курса
 *     responses:
 *       200:
 *         description: Успешное обновление курса
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Advanced JavaScript"
 *                 mentor:
 *                   type: string
 *                   example: "Jane Smith"
 *                 price:
 *                   type: number
 *                   example: 400
 *                 full_price:
 *                   type: number
 *                   example: 600
 *                 lesson_count:
 *                   type: integer
 *                   example: 15
 *       400:
 *         description: Неверные параметры запроса
 *       404:
 *         description: Курс не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Получить список всех курсов
 *     description: Возвращает список курсов с поддержкой фильтрации, сортировки и пагинации.
 *     tags:
 *       - Course
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Номер страницы для пагинации
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Количество курсов на страницу
 *       - in: query
 *         name: where
 *         schema:
 *           type: string
 *           example: "mentor"
 *         description: Поле для фильтрации
 *       - in: query
 *         name: whereField
 *         schema:
 *           type: string
 *           example: "John Doe"
 *         description: Значение для фильтрации по указанному полю
 *       - in: query
 *         name: ordering
 *         schema:
 *           type: string
 *           example: "price"
 *         description: Поле для сортировки
 *       - in: query
 *         name: orderingType
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *           example: "ASC"
 *         description: Тип сортировки (по возрастанию или убыванию)
 *       - in: query
 *         name: include
 *         schema:
 *           type: string
 *           example: "categories"
 *         description: Включить связанные модели (например, категории)
 *     responses:
 *       200:
 *         description: Успешное получение списка курсов
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                   example: 100
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 courses:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "Advanced JavaScript"
 *                       mentor:
 *                         type: string
 *                         example: "Jane Smith"
 *                       price:
 *                         type: number
 *                         example: 400
 *                       full_price:
 *                         type: number
 *                         example: 600
 *                       lesson_count:
 *                         type: integer
 *                         example: 15
 *       400:
 *         description: Неверные параметры запроса
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /courses/one:
 *   get:
 *     summary: Получить один курс по имени
 *     description: Возвращает информацию о курсе, используя фильтрацию по имени курса.
 *     tags:
 *       - Course
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: query
 *         name: where
 *         schema:
 *           type: string
 *           example: "Advanced JavaScript"
 *         description: Имя курса для поиска
 *     responses:
 *       200:
 *         description: Успешное получение курса
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Advanced JavaScript"
 *                 mentor:
 *                   type: string
 *                   example: "Jane Smith"
 *                 price:
 *                   type: number
 *                   example: 400
 *                 full_price:
 *                   type: number
 *                   example: 600
 *                 lesson_count:
 *                   type: integer
 *                   example: 15
 *       400:
 *         description: Неверные параметры запроса
 *       404:
 *         description: Курс не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */







































/**
 * @swagger
 * /course-category:
 *   post:
 *     summary: Создать новую категорию курса
 *     description: Создает новую категорию для курсов на основе названия, предоставленного в запросе.
 *     tags:
 *       - Course Categories
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category_name:
 *                 type: string
 *                 example: "Programming"
 *                 description: Название категории курса
 *     responses:
 *       200:
 *         description: Категория успешно создана
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                   description: Уникальный идентификатор категории
 *                 category_name:
 *                   type: string
 *                   example: "Programming"
 *                   description: Название созданной категории курса
 *       400:
 *         description: Неверные параметры запроса
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /course-category:
 *   get:
 *     summary: Получить информацию о категории курса
 *     description: Возвращает информацию о категории курса на основе её названия, переданного в запросе.
 *     tags:
 *       - Course Categories
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - name: category_name
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *           example: "Programming"
 *         description: Название категории курса для поиска
 *     responses:
 *       200:
 *         description: Информация о категории успешно получена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                   description: Уникальный идентификатор категории
 *                 category_name:
 *                   type: string
 *                   example: "Programming"
 *                   description: Название категории курса
 *       400:
 *         description: Неверные параметры запроса
 *       404:
 *         description: Категория не найдена
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /course-categories:
 *   get:
 *     summary: Получить список всех категорий курсов
 *     description: Возвращает список всех категорий курсов.
 *     tags:
 *       - Course Categories
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     responses:
 *       200:
 *         description: Список категорий курсов успешно получен
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
 *                     description: Уникальный идентификатор категории
 *                   category_name:
 *                     type: string
 *                     example: "Programming"
 *                     description: Название категории курса
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /course-category/{id}:
 *   delete:
 *     summary: Удалить категорию курса
 *     description: Удаляет категорию курса по её ID.
 *     tags:
 *       - Course Categories
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Уникальный идентификатор категории курса
 *     responses:
 *       200:
 *         description: Категория успешно удалена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "This category has been deleted"
 *       400:
 *         description: Неверный ID категории курса
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /course-category/{id}:
 *   put:
 *     summary: Обновить категорию курса
 *     description: Обновляет название категории курса по её ID.
 *     tags:
 *       - Course Categories
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Уникальный идентификатор категории курса
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category_name:
 *                 type: string
 *                 example: "Web Development"
 *                 description: Новое название категории курса
 *     responses:
 *       200:
 *         description: Категория успешно обновлена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 category_name:
 *                   type: string
 *                   example: "Web Development"
 *       400:
 *         description: Неверные параметры запроса
 *       404:
 *         description: Категория не найдена
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /course-category/{id}:
 *   patch:
 *     summary: Редактировать категорию курса
 *     description: Редактирует название категории курса по её ID.
 *     tags:
 *       - Course Categories
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Уникальный идентификатор категории курса
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category_name:
 *                 type: string
 *                 example: "Software Engineering"
 *                 description: Новое название категории курса
 *     responses:
 *       200:
 *         description: Категория успешно отредактирована
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 category_name:
 *                   type: string
 *                   example: "Software Engineering"
 *       400:
 *         description: Неверные параметры запроса
 *       404:
 *         description: Категория не найдена
 *       500:
 *         description: Внутренняя ошибка сервера
 */





























































/**
 * @swagger
 * /transactions/{id}:
 *   get:
 *     summary: Получить одну транзакцию по ID
 *     description: Возвращает информацию о транзакции по её идентификатору.
 *     tags:
 *       - Transactions
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Идентификатор транзакции
 *     responses:
 *       200:
 *         description: Успешное получение транзакции
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123456"
 *                 amount:
 *                   type: number
 *                   example: 1000
 *                 status:
 *                   type: string
 *                   example: "completed"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-09-20T15:34:22Z"
 *       400:
 *         description: Неверные параметры запроса
 *       404:
 *         description: Транзакция не найдена
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Получить список транзакций
 *     description: Возвращает список транзакций с возможностью фильтрации, сортировки и пагинации.
 *     tags:
 *       - Transactions
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Номер страницы для пагинации
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Количество транзакций на странице
 *       - in: query
 *         name: where
 *         schema:
 *           type: string
 *         description: Значение для фильтрации по полю
 *       - in: query
 *         name: whereField
 *         schema:
 *           type: string
 *         description: Поле, по которому производится фильтрация
 *       - in: query
 *         name: ordering
 *         schema:
 *           type: string
 *         description: Поле для сортировки
 *       - in: query
 *         name: orderingType
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Тип сортировки (asc или desc)
 *     responses:
 *       200:
 *         description: Успешное получение списка транзакций
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "123456"
 *                   amount:
 *                     type: number
 *                     example: 1000
 *                   status:
 *                     type: string
 *                     example: "completed"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-09-20T15:34:22Z"
 *       400:
 *         description: Неверные параметры запроса
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /transactions/{id}:
 *   put:
 *     summary: Обновить транзакцию
 *     description: Обновляет информацию о транзакции по ее идентификатору.
 *     tags:
 *       - Transactions
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Идентификатор транзакции
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_first_name:
 *                 type: string
 *                 example: "John"
 *               user_last_name:
 *                 type: string
 *                 example: "Doe"
 *               product_name:
 *                 type: string
 *                 example: "Product A"
 *               operator_unical_id:
 *                 type: string
 *                 example: "OP-123456"
 *               payment_method:
 *                 type: string
 *                 example: "PAYME"
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-09-23T15:00:00Z"
 *               state:
 *                 type: integer
 *                 example: 1
 *               amount:
 *                 type: number
 *                 example: 1000
 *     responses:
 *       200:
 *         description: Транзакция успешно обновлена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123456"
 *                 user_first_name:
 *                   type: string
 *                   example: "John"
 *                 user_last_name:
 *                   type: string
 *                   example: "Doe"
 *                 product_name:
 *                   type: string
 *                   example: "Product A"
 *                 operator_unical_id:
 *                   type: string
 *                   example: "OP-123456"
 *                 payment_method:
 *                   type: string
 *                   example: "PAYME"
 *                 state:
 *                   type: integer
 *                   example: 1
 *                 amount:
 *                   type: number
 *                   example: 1000
 *       400:
 *         description: Неверные параметры запроса
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /transactions/{id}:
 *   patch:
 *     summary: Редактировать транзакцию
 *     description: Редактирует существующую транзакцию по ее идентификатору.
 *     tags:
 *       - Transactions
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Идентификатор транзакции
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_first_name:
 *                 type: string
 *                 example: "John"
 *               user_last_name:
 *                 type: string
 *                 example: "Doe"
 *               product_name:
 *                 type: string
 *                 example: "Product A"
 *               operator_unical_id:
 *                 type: string
 *                 example: "OP-123456"
 *               payment_method:
 *                 type: string
 *                 example: "PAYME"
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-09-23T15:00:00Z"
 *               state:
 *                 type: integer
 *                 example: 1
 *               amount:
 *                 type: number
 *                 example: 1000
 *     responses:
 *       200:
 *         description: Транзакция успешно отредактирована
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123456"
 *                 user_first_name:
 *                   type: string
 *                   example: "John"
 *                 user_last_name:
 *                   type: string
 *                   example: "Doe"
 *                 product_name:
 *                   type: string
 *                   example: "Product A"
 *                 operator_unical_id:
 *                   type: string
 *                   example: "OP-123456"
 *                 payment_method:
 *                   type: string
 *                   example: "PAYME"
 *                 state:
 *                   type: integer
 *                   example: 1
 *                 amount:
 *                   type: number
 *                   example: 1000
 *       400:
 *         description: Неверные параметры запроса
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /transactions/{id}:
 *   delete:
 *     summary: Удалить транзакцию
 *     description: Удаляет транзакцию по ее идентификатору.
 *     tags:
 *       - Transactions
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Идентификатор транзакции для удаления
 *     responses:
 *       200:
 *         description: Транзакция успешно удалена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Transaction successfully deleted"
 *       400:
 *         description: Неверные параметры запроса
 *       404:
 *         description: Транзакция не найдена
 *       500:
 *         description: Внутренняя ошибка сервера
 */

































































/**
 * @swagger
 * /zoom-sessions:
 *   post:
 *     summary: Создать новую Zoom сессию
 *     description: Создает новую Zoom сессию для пользователя.
 *     tags:
 *       - Zoom Sessions
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               start_time:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-09-30T14:30:00Z"
 *                 description: Время начала сессии
 *               duration:
 *                 type: number
 *                 example: 60
 *                 description: Продолжительность сессии в минутах
 *               mentor:
 *                 type: string
 *                 example: "John Doe"
 *                 description: Имя ментора, проводящего сессию
 *     responses:
 *       200:
 *         description: Сессия успешно создана
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "abcd1234"
 *                   description: Идентификатор сессии
 *                 start_time:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-09-30T14:30:00Z"
 *                 duration:
 *                   type: number
 *                   example: 60
 *                 mentor:
 *                   type: string
 *                   example: "John Doe"
 *       400:
 *         description: Неверные параметры запроса
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /zoom-sessions/auth:
 *   get:
 *     summary: Аутентификация в Zoom API
 *     description: Аутентифицирует пользователя через Zoom и получает токен доступа.
 *     tags:
 *       - Zoom Sessions
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: query
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *           example: "abcd1234"
 *         description: Код авторизации, возвращаемый после авторизации Zoom
 *     responses:
 *       200:
 *         description: Токен доступа успешно получен
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                   description: Токен доступа к Zoom API
 *       400:
 *         description: Неверный или отсутствующий код авторизации
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /zoom-sdk/signature:
 *   get:
 *     summary: Генерация подписи для Zoom SDK
 *     description: Генерирует подпись, необходимую для аутентификации в Zoom SDK, используя номер встречи.
 *     tags:
 *       - Zoom SDK
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: query
 *         name: meeting_number
 *         required: true
 *         schema:
 *           type: string
 *           example: "123456789"
 *         description: Номер встречи Zoom, для которой требуется сгенерировать подпись
 *     responses:
 *       200:
 *         description: Успешно сгенерированная подпись
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 signature:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                   description: Подпись для Zoom SDK
 *       400:
 *         description: Неверные параметры запроса (например, отсутствующий номер встречи)
 *       500:
 *         description: Внутренняя ошибка сервера
 */



/**
 * @swagger
 * /zoom-sdk/zak-token:
 *   get:
 *     summary: Получение токена ZAK для Zoom SDK
 *     description: Генерирует токен ZAK, необходимый для аутентификации в Zoom SDK, используя номер встречи.
 *     tags:
 *       - Zoom SDK
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     responses:
 *       200:
 *         description: Успешно полученный токен ZAK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ZAKToken:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                   description: Токен ZAK для Zoom SDK
 *       400:
 *         description: Неверные параметры запроса (например, отсутствующий номер встречи)
 *       500:
 *         description: Внутренняя ошибка сервера
 */




































































/**
 * @swagger
 * /trasactions/payment/payme:
 *   post:
 *     summary: Обработка платежей через Payme API
 *     description: Обрабатывает различные запросы, такие как создание, выполнение, отмена транзакций, и получение выписки через Payme API.
 *     tags:
 *       - Payment
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

