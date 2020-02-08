// попап для доабвления новой карточки
export default class PopupPlace {
    constructor(container, cardList) {
            this.container = container;
            this.cardList = cardList;
            this.form = this.container.querySelector("form");
            this.button = this.container.querySelector("button");
            this.name = this.form.elements.name;
            this.link = this.form.elements.link;
        }
        //откртыие попапа
    open(e) {
            if (e.target.closest('.user-info__button')) {
                this.container.classList.add('popup_is-opened');
                this.form.reset();
                this.button.classList.remove("popup__button_active");
            }
        }
        //закрытие на крест
    close(e) {
            if (e.target.closest('.popup__close')) {
                this.container.classList.remove('popup_is-opened');
            }
        }
        // новая карточка добавляется в конец кардлиста
    newcard(e) {
            e.preventDefault();
            this.cardList.addCard(this.name.value, this.link.value);
            this.container.classList.remove("popup_is-opened");
        }
        // активная/неактивная кнопка
    blacButton(e) {
        if (this.name.value.length === 0 || this.link.value.length === 0) {
            this.button.setAttribute("disabled", true);
            this.button.classList.remove("popup__button_active");
        } else {
            this.button.removeAttribute("disabled");
            this.button.classList.add("popup__button_active");
        }
    }
}