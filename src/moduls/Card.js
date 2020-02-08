class Card {
    constructor() {};
    //поставить лайк карточке
    like(e) {
        if (e.target.classList.contains("place-card__like-icon")) {
            e.target.classList.toggle('place-card__like-icon_liked');
        }
    };
    // удалить карточку
    remove(e) {
        if (e.target.closest('.place-card__delete-icon')) {
            document.querySelector('.places-list').removeChild(e.target.closest('.place-card'));
        }
    };
    // создание блока

    /* Можно лучше: данные карточки в конструктор лучше передавать объектом:
        create(cardData) {
            .............
            cardData.link;
            ..............
            cardData.name;
            .......
        }
        иначе, представьте, что у карточки появятся ещё дополнительные параметры, 
        во всей программе придется менять вызов. Если же передается
        объект - ничего не изменится в вызове create - так и будет передаваться объект,
        внутри него просто добавиться поле
    */
    create(name, link) {
      /* Можно лучше: вставка данных напрямую через интерполяцию строки приводит в уязвимости XSS
        Попробуйте вставить в название добавляемой карточки код <b style="color: red">Red</b>
        Он карточки вставится как обычный html http://prntscr.com/q358gq
        А если данные придут с сервера в них может быть код злоумышленника. Если в этих
        данных будут скрипты, они выполнятся на вашей странице.

        Поэтому нужно вставлять данные через textContent и style.backgroundImage
        */
        return `
		<div class="place-card">
			<div class="place-card__image" style="background-image: url(${link});">
				<button class="place-card__delete-icon"></button>
			</div>
			<div class="place-card__description">
				<h3 class="place-card__name">${name}</h3>
				<button class="place-card__like-icon"></button>
			</div>
		</div>
        `;
    };
}