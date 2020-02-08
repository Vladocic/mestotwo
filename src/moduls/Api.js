class Api {
    constructor(options) {
        /** REVIEW: Хорошо:
         *   Переиспользуются базовый url и токен
         **/
        this.url = options.url;
        this.headers = options.headers;
    }

    //Получаем информацию с сервера
    getInfo(path) {
        return fetch(`${this.url}${path}`, {
            headers: this.headers
        });
    }

    //Обновляем информацию о пользователе
    updateInfo(path, fields) {
        const [input1, input2] = fields;
        /** REVIEW: Можно лучше:
         *   Лишний аргумент e
         **/
        return fetch(`${this.url}${path}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                /** REVIEW: Надо исправить:
                 *   Данные для запроса метод должен получать не из DOM.
                 *  Ответсвенность класса должна распространяться только на запросы к серверу.
                 *  Он скрывает только эту логику в себе, а все данные и работа с дом происходит в других классах.
                 **/
                name: input1.value,
                about: input2.value
            })
        });
    }

    /** REVIEW: Можно лучше:
     *   Логичнее назвать метод getResponseData или getJSON к примеру
     *  Чтобы был глагол в названии, тогда понятно, что это метод(функция), а не свойство класса
     **/
    status(res) {
        /** REVIEW: Можно лучше:
        *   Этот метод можно сразу использовать в getInfo и updateInfo, чтобы не передавать его при вызове из других классов
         *   Например:
         *       //Получаем информацию с сервера
                getInfo(path) {
                    return fetch(`${this.url}${path}`, {
                        headers: this.headers
                    })
                    .then(this.status)
                }
         Использование: api.getInfo(`somepath`).then(data => {//работа с DOM}).catch(err => {//показать ошибку пользователю})
         В таком случае он сразу вернет нам промис с данными или ошибку.
         *
        **/
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);

    }

    /** REVIEW: Можно лучше:
     *   Этот метод лучше назвать handleError
     **/
    error(err) {
        console.log(err);
    }
}