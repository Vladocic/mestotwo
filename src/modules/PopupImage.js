// поап всплывающей картинки
export default class PopupImage {
    constructor(container) {
        this.container = container;
    }
    open(e) {
            if (e.target.classList.contains('place-card__image')) {
                // получаем атрибус (ссылка кратинки)

                let imgUrl = e.target.closest('.place-card__image').getAttribute('style');
                // убираем лишний текст
                let differentPic = imgUrl.slice(22, -2);
                console.log(differentPic);
                // если наводим на карточку с картинкой, то добавляем поп ап окно со стилем блок с картинкой
                document.querySelector('.popup_big-img').setAttribute('src', differentPic);
                document.querySelector('.popup__image').classList.add('popup_is-opened');
            }
        }
        // закрытие на крест
    close(e) {
        if (e.target.closest('.popup__close')) {
            this.container.classList.remove('popup_is-opened');
        }
    }
}