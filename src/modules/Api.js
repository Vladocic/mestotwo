 export default class Api {
     constructor(options) {

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

                 name: input1.value,
                 about: input2.value
             })
         });
     }


     status(res) {

         if (res.ok) {
             return res.json();
         }
         return Promise.reject(`Ошибка: ${res.status}`);

     }


     error(err) {
         console.log(err);
     }
 }