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





































































/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Получить информацию о пользователе
 *     description: Возвращает информацию о пользователе по идентификатору.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID пользователя
 *     responses:
 *       200:
 *         description: Успешное получение информации о пользователе
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
 *                   example: "user@example.com"
 *                 role:
 *                   type: string
 *                   example: "USER"
 *                 is_active:
 *                   type: boolean
 *                   example: true
 *                 profiles:
 *                   type: object
 *                   properties:
 *                     first_name:
 *                       type: string
 *                       example: "John"
 *                     last_name:
 *                       type: string
 *                       example: "Doe"
 *                     country:
 *                       type: string
 *                       example: "USA"
 *                     city:
 *                       type: string
 *                       example: "New York"
 *                 avatars:
 *                   type: object
 *                   properties:
 *                     path:
 *                       type: string
 *                       example: "/uploads/avatar.jpg"
 *       404:
 *         description: Пользователь не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */






/**
 * @swagger
 * /users:
 *   get:
 *     summary: Получить список пользователей
 *     description: Возвращает список пользователей с возможностью пагинации и поиска.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Номер страницы для пагинации
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Количество записей на странице
 *       - in: query
 *         name: searchField
 *         schema:
 *           type: string
 *           example: "email"
 *         description: Поле для поиска
 *       - in: query
 *         name: searchValue
 *         schema:
 *           type: string
 *           example: "example@gmail.com"
 *         description: Значение для поиска
 *     responses:
 *       200:
 *         description: Успешное получение списка пользователей
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       email:
 *                         type: string
 *                         example: "user@example.com"
 *                       role:
 *                         type: string
 *                         example: "USER"
 *                       is_active:
 *                         type: boolean
 *                         example: true
 *                       profiles:
 *                         type: object
 *                         properties:
 *                           first_name:
 *                             type: string
 *                             example: "John"
 *                           last_name:
 *                             type: string
 *                             example: "Doe"
 *                           country:
 *                             type: string
 *                             example: "USA"
 *                           city:
 *                             type: string
 *                             example: "New York"
 *                       avatars:
 *                         type: object
 *                         properties:
 *                           path:
 *                             type: string
 *                             example: "/uploads/avatar.jpg"
 *       500:
 *         description: Внутренняя ошибка сервера
 */





/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Редактирование данных пользователя
 *     description: Обновляет данные пользователя, включая профиль и аватар, на основе переданного ID.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор пользователя
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               role:
 *                 type: string
 *                 example: "USER"
 *               is_active:
 *                 type: boolean
 *                 example: true
 *               profile:
 *                 type: object
 *                 properties:
 *                   first_name:
 *                     type: string
 *                     example: "John"
 *                   last_name:
 *                     type: string
 *                     example: "Doe"
 *                   country:
 *                     type: string
 *                     example: "USA"
 *                   city:
 *                     type: string
 *                     example: "New York"
 *               avatar:
 *                 type: object
 *                 properties:
 *                   path:
 *                     type: string
 *                     description: Путь к файлу аватара
 *                     example: "/uploads/avatars/avatar.jpg"
 *     responses:
 *       200:
 *         description: Успешное редактирование пользователя
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
 *                   example: "user@example.com"
 *                 role:
 *                   type: string
 *                   example: "USER"
 *                 is_active:
 *                   type: boolean
 *                   example: true
 *                 profile:
 *                   type: object
 *                   properties:
 *                     first_name:
 *                       type: string
 *                       example: "John"
 *                     last_name:
 *                       type: string
 *                       example: "Doe"
 *                     country:
 *                       type: string
 *                       example: "USA"
 *                     city:
 *                       type: string
 *                       example: "New York"
 *                 avatar:
 *                   type: object
 *                   properties:
 *                     path:
 *                       type: string
 *                       example: "/uploads/avatars/avatar.jpg"
 *       400:
 *         description: Ошибка валидации данных
 *       404:
 *         description: Пользователь не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */





/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Обновление данных пользователя
 *     description: Обновляет полные данные пользователя, включая профиль и аватар, на основе переданного ID.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор пользователя
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               role:
 *                 type: string
 *                 example: "USER"
 *               is_active:
 *                 type: boolean
 *                 example: true
 *               profile:
 *                 type: object
 *                 properties:
 *                   first_name:
 *                     type: string
 *                     example: "John"
 *                   last_name:
 *                     type: string
 *                     example: "Doe"
 *                   country:
 *                     type: string
 *                     example: "USA"
 *                   city:
 *                     type: string
 *                     example: "New York"
 *               avatar:
 *                 type: object
 *                 properties:
 *                   path:
 *                     type: string
 *                     description: Путь к файлу аватара
 *                     example: "/uploads/avatars/avatar.jpg"
 *     responses:
 *       200:
 *         description: Успешное обновление пользователя
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
 *                   example: "user@example.com"
 *                 role:
 *                   type: string
 *                   example: "USER"
 *                 is_active:
 *                   type: boolean
 *                   example: true
 *                 profile:
 *                   type: object
 *                   properties:
 *                     first_name:
 *                       type: string
 *                       example: "John"
 *                     last_name:
 *                       type: string
 *                       example: "Doe"
 *                     country:
 *                       type: string
 *                       example: "USA"
 *                     city:
 *                       type: string
 *                       example: "New York"
 *                 avatar:
 *                   type: object
 *                   properties:
 *                     path:
 *                       type: string
 *                       example: "/uploads/avatars/avatar.jpg"
 *       400:
 *         description: Ошибка валидации данных
 *       404:
 *         description: Пользователь не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */






/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Удаление пользователя
 *     description: Удаляет пользователя по указанному ID.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор пользователя
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Успешное удаление пользователя
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Пользователь успешно удален"
 *       400:
 *         description: Неверный запрос или пользователь не найден
 *       404:
 *         description: Пользователь не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */





/**
 * @swagger
 * /user-edited-avatar/{id}:
 *   patch:
 *     summary: Редактировать аватар пользователя
 *     description: Загружает новый аватар пользователя.
 *     tags:
 *       - Profile-manipulation
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор пользователя
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Аватар успешно отредактирован
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 path:
 *                   type: string
 *                   example: "/uploads/avatars/avatar.jpg"
 *       400:
 *         description: Неверные данные запроса
 *       404:
 *         description: Пользователь не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */





/**
 * @swagger
 * /user-edit-profile/{id}:
 *   patch:
 *     summary: Редактировать профиль пользователя
 *     description: Изменяет информацию профиля пользователя.
 *     tags:
 *       - Profile-manipulation
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор пользователя
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 example: "John"
 *               last_name:
 *                 type: string
 *                 example: "Doe"
 *               country:
 *                 type: string
 *                 example: "USA"
 *               city:
 *                 type: string
 *                 example: "New York"
 *     responses:
 *       200:
 *         description: Профиль успешно отредактирован
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
 *       400:
 *         description: Неверные данные запроса
 *       404:
 *         description: Пользователь не найден
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
 *               biography:
 *                 type: string
 *                 description: Краткая биография ментора
 *                 example: "Опытный разработчик с более чем 5-летним стажем в разработке программного обеспечения."
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
 *                 biography:
 *                   type: string
 *                   example: "Опытный разработчик с более чем 5-летним стажем в разработке программного обеспечения."
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
 * /requests:
 *   get:
 *     summary: Получить все запросы
 *     description: Возвращает список запросов с возможностью пагинации.
 *     tags:
 *       - Request
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: query
 *         name: page
 *         required: false
 *         description: Номер страницы
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         required: false
 *         description: Количество элементов на странице
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Успешное получение списка запросов
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 requests:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       number:
 *                         type: string
 *                         example: "12345"
 *                       name:
 *                         type: string
 *                         example: "Иван Иванов"
 *                       message:
 *                         type: string
 *                         example: "Это сообщение от клиента."
 *                 total:
 *                   type: integer
 *                   description: Общее количество запросов
 *                   example: 100
 *                 page:
 *                   type: integer
 *                   description: Текущая страница
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   description: Количество запросов на странице
 *                   example: 10
 *       400:
 *         description: Ошибка валидации параметров запроса
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
 *     description: Создаёт новую сессию Zoom на основе указанных данных, включая время начала, длительность и ID ментора.
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
 *                 example: "2024-10-15T14:30:00Z"
 *                 description: Время начала сессии Zoom
 *               duration:
 *                 type: integer
 *                 example: 60
 *                 description: Длительность сессии в минутах
 *               mentor_id:
 *                 type: integer
 *                 example: 2
 *                 description: Уникальный идентификатор ментора, проводящего сессию
 *     responses:
 *       200:
 *         description: Сессия Zoom успешно создана
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 start_time:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-15T14:30:00Z"
 *                 duration:
 *                   type: integer
 *                   example: 60
 *                 mentor_id:
 *                   type: integer
 *                   example: 2
 *       400:
 *         description: Неверные данные запроса
 *       500:
 *         description: Внутренняя ошибка сервера
 */



/**
 * @swagger
 * /zoom-sessions/{id}:
 *   delete:
 *     summary: Удалить Zoom сессию
 *     description: Удаляет существующую сессию Zoom по её ID.
 *     tags:
 *       - Zoom Sessions
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Уникальный идентификатор сессии Zoom
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Сессия Zoom успешно удалена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Zoom session has been deleted"
 *       404:
 *         description: Сессия не найдена
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /zoom-sessions:
 *   get:
 *     summary: Получить все Zoom сессии
 *     description: Возвращает список всех Zoom сессий с возможностью пагинации.
 *     tags:
 *       - Zoom Sessions
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - name: page
 *         in: query
 *         required: false
 *         description: Номер страницы для пагинации
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: limit
 *         in: query
 *         required: false
 *         description: Количество сессий на странице
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Успешное получение списка Zoom сессий
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
 *                   start_time:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-03T10:00:00Z"
 *                   duration:
 *                     type: integer
 *                     example: 60
 *                   mentor_id:
 *                     type: integer
 *                     example: 3
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-01T10:00:00Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-01T10:30:00Z"
 *       500:
 *         description: Внутренняя ошибка сервера
 */



/**
 * @swagger
 * /zoom-sessions/{id}:
 *   get:
 *     summary: Получить одну Zoom сессию
 *     description: Возвращает информацию о конкретной Zoom сессии по её ID.
 *     tags:
 *       - Zoom Sessions
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID Zoom сессии
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Успешное получение информации о Zoom сессии
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 start_time:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-03T10:00:00Z"
 *                 duration:
 *                   type: integer
 *                   example: 60
 *                 mentor_id:
 *                   type: integer
 *                   example: 3
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-01T10:00:00Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-01T10:30:00Z"
 *       404:
 *         description: Zoom сессия не найдена
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
 * /events:
 *   post:
 *     summary: Создать новое событие
 *     description: Создает новое событие с заголовком, контентом и изображениями.
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Технологическое событие"
 *               content:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                     example: "Заголовок контента"
 *                   preview:
 *                     type: string
 *                     example: "/image/path"
 *                   views:
 *                     type: integer
 *                     example: 0
 *                   content:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         subtitle:
 *                           type: string
 *                           example: "Раздел 1"
 *                         description:
 *                           type: string
 *                           example: "Описание первого раздела."
 *                         list:
 *                           type: string
 *                           example: "Элемент 1, Элемент 2"
 *                         image:
 *                           type: string
 *                           example: "/image/path"
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Успешное создание события
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: "Технологическое событие"
 *                 content:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: "Заголовок контента"
 *                     preview:
 *                       type: string
 *                       example: "/image/path"
 *                     views:
 *                       type: integer
 *                       example: 0
 *                     content:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           subtitle:
 *                             type: string
 *                             example: "Раздел 1"
 *                           description:
 *                             type: string
 *                             example: "Описание первого раздела."
 *                           list:
 *                             type: string
 *                             example: "Элемент 1, Элемент 2"
 *                           image:
 *                             type: string
 *                             example: "/image/path"
 *       400:
 *         description: Ошибка валидации данных
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /events/{id}:
 *   delete:
 *     summary: Удалить событие
 *     description: Удаляет событие по его идентификатору.
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор события для удаления
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Успешное удаление события
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Событие успешно удалено"
 *       404:
 *         description: Событие не найдено
 *       500:
 *         description: Внутренняя ошибка сервера
 */



/**
 * @swagger
 * /events/{id}:
 *   put:
 *     summary: Обновить событие
 *     description: Обновляет информацию о событии, включая изображения и содержимое.
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор события для обновления
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: changePreview
 *         required: false
 *         description: Флаг для изменения превью изображения
 *         schema:
 *           type: boolean
 *           example: true
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Название события
 *                 example: "Новая конференция"
 *               content:
 *                 type: object
 *                 description: Содержимое события в формате JSON
 *                 example:
 *                   title: "Название"
 *                   preview: "/image/path"
 *                   views: 0
 *                   content:
 *                     - subtitle: "Подзаголовок 1"
 *                       description: "Описание 1"
 *                       list: "Список пунктов 1"
 *                       image: "/images/1.jpg"
 *                     - subtitle: "Подзаголовок 2"
 *                       description: "Описание 2"
 *                       list: "Список пунктов 2"
 *                       image: "/images/2.jpg"
 *               views:
 *                 type: integer
 *                 description: Количество просмотров
 *                 example: 100
 *               images:
 *                 type: array
 *                 description: Массив изображений
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Успешное обновление события
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Событие успешно обновлено"
 *       404:
 *         description: Событие не найдено
 *       500:
 *         description: Внутренняя ошибка сервера
 */



/**
 * @swagger
 * /events/{id}:
 *   patch:
 *     summary: Редактировать событие
 *     description: Изменение данных события, включая изображения, контент и количество просмотров.
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []  # Защита JWT для этого эндпоинта
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор события для редактирования
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: changePreview
 *         required: false
 *         description: Флаг для изменения превью изображения
 *         schema:
 *           type: boolean
 *           example: true
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Название события
 *                 example: "Конференция 2024"
 *               content:
 *                 type: object
 *                 description: Содержимое события в формате JSON
 *                 example:
 *                   title: "Конференция"
 *                   preview: "/image/path"
 *                   views: 0
 *                   content:
 *                     - subtitle: "Секция 1"
 *                       description: "Описание секции 1"
 *                       list: "Список задач 1"
 *                       image: "/images/section1.jpg"
 *                     - subtitle: "Секция 2"
 *                       description: "Описание секции 2"
 *                       list: "Список задач 2"
 *                       image: "/images/section2.jpg"
 *               views:
 *                 type: integer
 *                 description: Количество просмотров
 *                 example: 500
 *               images:
 *                 type: array
 *                 description: Массив изображений
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Успешное редактирование события
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Событие успешно отредактировано"
 *       404:
 *         description: Событие не найдено
 *       500:
 *         description: Внутренняя ошибка сервера
 */




/**
 * @swagger
 * /event:
 *   get:
 *     summary: Получить одно событие
 *     description: Получить информацию о событии по идентификатору или имени. Если указаны оба параметра, поиск будет выполнен по идентификатору.
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: false
 *         description: Идентификатор события
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: name
 *         required: false
 *         description: Название события
 *         schema:
 *           type: string
 *           example: "Конференция 2024"
 *     responses:
 *       200:
 *         description: Успешное получение события
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
 *                   example: "Конференция 2024"
 *                 content:
 *                   type: object
 *                   description: Содержимое события в формате JSON
 *                   example:
 *                     title: "Конференция"
 *                     preview: "/image/path"
 *                     views: 500
 *                     content:
 *                       - subtitle: "Секция 1"
 *                         description: "Описание секции 1"
 *                         list: "Список задач 1"
 *                         image: "/images/section1.jpg"
 *                       - subtitle: "Секция 2"
 *                         description: "Описание секции 2"
 *                         list: "Список задач 2"
 *                         image: "/images/section2.jpg"
 *       404:
 *         description: Событие не найдено
 *       500:
 *         description: Внутренняя ошибка сервера
 */




/**
 * @swagger
 * /events:
 *   get:
 *     summary: Получить список событий
 *     description: Получить все события с фильтрацией, пагинацией, сортировкой и поиском.
 *     tags:
 *       - Events
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: query
 *         name: limit
 *         required: false
 *         description: Количество событий на странице (пагинация)
 *         schema:
 *           type: integer
 *           example: 10
 *       - in: query
 *         name: page
 *         required: false
 *         description: Номер страницы для пагинации
 *         schema:
 *           type: integer
 *           example: 0
 *       - in: query
 *         name: where
 *         required: false
 *         description: Условие фильтрации
 *         schema:
 *           type: string
 *           example: "active"
 *       - in: query
 *         name: whereField
 *         required: false
 *         description: Поле для применения фильтра
 *         schema:
 *           type: string
 *           example: "status"
 *       - in: query
 *         name: ordering
 *         required: false
 *         description: Поле для сортировки
 *         schema:
 *           type: string
 *           example: "createdAt"
 *       - in: query
 *         name: orderingType
 *         required: false
 *         description: Тип сортировки (asc/desc)
 *         schema:
 *           type: string
 *           example: "asc"
 *       - in: query
 *         name: search
 *         required: false
 *         description: Поисковый запрос
 *         schema:
 *           type: string
 *           example: "Конференция"
 *       - in: query
 *         name: execlude
 *         required: false
 *         description: Исключить определенные события (например, черновики)
 *         schema:
 *           type: boolean
 *           example: true
 *     responses:
 *       200:
 *         description: Успешное получение списка событий
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
 *                   title:
 *                     type: string
 *                     example: "Конференция 2024"
 *                   content:
 *                     type: object
 *                     description: Контент события в формате JSON
 *                     example:
 *                       title: "Конференция"
 *                       preview: "/image/path"
 *                       views: 500
 *                       content:
 *                         - subtitle: "Секция 1"
 *                           description: "Описание секции 1"
 *                           list: "Список задач 1"
 *                           image: "/images/section1.jpg"
 *                         - subtitle: "Секция 2"
 *                           description: "Описание секции 2"
 *                           list: "Список задач 2"
 *                           image: "/images/section2.jpg"
 *       404:
 *         description: События не найдены
 *       500:
 *         description: Внутренняя ошибка сервера
 */























































/**
 * @swagger
 * /videos/{course_id}:
 *   post:
 *     summary: Создать видео для курса
 *     description: Создает новое видео, связанное с указанным курсом, и загружает видеофайл.
 *     tags:
 *       - Videos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: course_id
 *         required: true
 *         description: Идентификатор курса, к которому будет добавлено видео
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Название видео
 *                 example: "Введение в программирование"
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Видео файл для загрузки (должен быть в формате mp4 или другом поддерживаемом формате)
 *     responses:
 *       201:
 *         description: Видео успешно создано
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
 *                   example: "Введение в программирование"
 *                 path:
 *                   type: string
 *                   example: "/videos/video1.mp4"
 *                 time:
 *                   type: string
 *                   example: "10:00"
 *                 course_id:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Неверные данные запроса
 *       404:
 *         description: Курс не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */




/**
 * @swagger
 * /videos/{id}:
 *   get:
 *     summary: Получить видео по идентификатору
 *     description: Получает видеофайл по указанному идентификатору.
 *     tags:
 *       - Videos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор видео
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Успешное получение видео
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Видео не найдено
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
 *       - bearerAuth: []  
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

