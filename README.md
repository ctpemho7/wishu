# wishu
Командный проект Wishu для обмена списками подарков


1. Скопировать `.env.sample` и переименовать в `.env`:
    ```shell
    cp .env.sample .env
    ```

2. Собрать контейнер:
    ```shell
    docker compose build
    ```
   
3. Поднять контейнер:
    ```shell
    docker compose up
    ```
   
4. Для того чтобы провести миграции БД, нужно выполнить две команды. Подключиться к контейнеру:
    ```shell
    docker compose exec server bash
    ```
   Применить миграции для создания таблиц в БД:
    ```shell
    ./manage.py migrate
    ```

5. Создать суперпользователя:
    ```shell
    ./manage.py createsuperuser
    ```

Сервис доступен по адресу [http://0.0.0.0:8000](http://0.0.0.0:8000).