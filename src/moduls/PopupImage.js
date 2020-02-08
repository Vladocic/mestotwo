// поап всплывающей картинки
class PopupImage {
    constructor(container) {
        this.container = container;
    }
    open(e) {
            if (e.target.classList.contains('place-card__image')) {
                // получаем атрибус (ссылка кратинки)

                /*
                    Можно лучше: размещая здесь код  e.target.closest('.place-card__image').getAttribute('style');
                    мы выносим часть знаний, об устройстве карточки за её пределы.
                    Из за этого классы получаются сильно связаны.
                    Класс попапа изображения не должен знать откуда брать изображение, ссылка на него
                    должна передаваться как параметр метод.

                    Решить это можно сделав метод в классе Card для открытия попапа, в конструктор карточки
                    будет передаваться колбэк на открытие изображения и при клике по каринке будет вызываться 
                    колбэк с передачей туда ссылки на изображение
                */
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