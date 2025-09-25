# React + Vite

Create blog

1. области хранения данных
 - база данных на json-server
 - BFF
 - redux-store

2. Сущьности приложения
 - пользователь БД (список аользователей) BFF (сессия текущего) redux-store (отображение в браузере)
 - роль пользователя БД (спимок ролей) BFF (сессия пользователя с ролдью) redux-store (использование на клиенте)
 - статья БД (список статей) rerdux-store (отображение в браузере)
 - комментрарии БД (список км) redux-store (отображение в браузере)

3. Таблицы БД 
 - пользователи - users: id / login / pssword / registred_at / role_id
 - роли - roles: id / name
 - статьи - posts: id / title / image_url / content / published_at
 - комментарии - comments: id / author_id / post_id / content

4. схема состояния на BFF
 - сессия текущего пользователя login / password / role

5. схекма для redux-store (на клиенте)
 - user id / login / roleId
 - posts массив posts id / title / imageUrl / publishedAt / commentsCount
 - post id / title / imageUrl / content / publishedAt / comments массив comment id / authr / content / publishetAt
 - users массив user id / login / registredAt / role

 
