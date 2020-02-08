// поап редактирование профиля (имя/работа)
class PopupEdit {
    constructor(container, api) {
            this.container = container;
            this.form = this.container.querySelector("form");
            this.button = this.container.querySelector('.popup__button_edit');
            this.name = this.form.elements.youname;
            this.job = this.form.elements.job;
            this.api = api;

        }
        //откртыие попапа
    open(e) {
            if (e.target.closest('.button_edit')) {
                this.container.classList.add('popup_is-opened');
                this.name.value = document.querySelector(".user-info__name").textContent;
                this.job.value = document.querySelector(".user-info__job").textContent;
                this.button.removeAttribute("disabled");
                this.button.classList.add("popup__button_active");
            }
        }
        //закрытие на крест
    close(e) {
            if (e.target.closest('.popup__close')) {
                this.container.classList.remove('popup_is-opened');
            }
        }
        // вводим новые данные и сохраняем их на странице
    changeName(path, e) {
            e.preventDefault();
            /** REVIEW: Надо исправить:
             *   Изменения в DOM и закрытие попапа должны происходить после успешного выполнения запроса
             **/
            const fields = this.form.elements;


            this.api
                .updateInfo(path, fields)
                .then(this.api.status)
                .then((data) => {
                    document.querySelector('.user-info__name').textContent = data.name;
                    document.querySelector('.user-info__job').textContent = data.about;
                    this.container.classList.remove('popup_is-opened');
                    /** REVIEW: Надо исправить:
                     *   Здесь нужно обновить данные в DOM и закрыть попап
                     **/
                })
                /** REVIEW: Можно лучше:
                 *   Далее 2 then в цепочке лишние, не понятно их предназначение
                 **/
                /** REVIEW: Можно лучше:
                 *   Хорошо, что обработана ошибка
                 *  Но можно так же показать её пользователю - простой способ без  лишней верстки window.alert(`текст ошибки`)
                 **/
                .catch(this.api.error);



        }
        // активна/неактивна кнопка
    blacButton(e) {
            if (this.name.value.length === 0 || this.job.value.length === 0) {
                this.button.setAttribute("disabled", true);
                this.button.classList.remove("popup__button_active");
            }
            if (this.name.value.length === 1 || this.job.value.length === 1) {
                this.button.setAttribute("disabled", true);
                this.button.classList.remove("popup__button_active");
            }
        }
        // валидация формы + текст ошибок
    validation(e) {
        if (this.name.validity.valid) {
            this.button.setAttribute('disabled', true);
            this.button.classList.remove('popup__button_active');
        } else {
            this.button.removeAttribute('disabled');
            this.button.classList.add('popup__button_active');
        }
        if (!this.job.validity.valid) {
            this.button.setAttribute('disabled', true);
            this.button.classList.remove('popup__button_active');
        } else {
            this.button.removeAttribute('disabled');
            this.button.classList.add('popup__button_active');
        }

        if (this.name.value.length === 0) {
            document.getElementById('error').classList.remove('visually-hidden');
        } else {
            document.getElementById('error').classList.add('visually-hidden');
        }
        if (this.job.value.length === 0) {
            document.getElementById('errorSecond').classList.remove('visually-hidden');
        } else {
            document.getElementById('errorSecond').classList.add('visually-hidden');
        }

        if (this.name.value.length > 0 && this.name.value.length < 2) {
            document.getElementById('errorTwo').classList.remove('visually-hidden');
        } else {
            document.getElementById('errorTwo').classList.add('visually-hidden')
        }
        if (this.job.value.length > 0 && this.job.value.length < 2) {
            document.getElementById('errorSecondTwo').classList.remove('visually-hidden');
        } else {
            document.getElementById('errorSecondTwo').classList.add('visually-hidden');
        }
    }
}