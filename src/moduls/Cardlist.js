// листа с карточками
class CardList {
    constructor(container, exampleCard, api) {
            this.container = container;
            this.exampleCard = exampleCard;
            this.api = api;

        }
        // добавляет карточку в цонец листа
    addCard(name, link) {
            const pic = this.exampleCard.create(name, link);
            this.container.insertAdjacentHTML("beforeend", pic);
        }
        // Загрузка первоначальных карточек с сервера
    render(path) {
        this.api
            .getInfo(path)
            .then(this.api.status)
            .then(cards => {
                cards.forEach(card => {
                    this.addCard(card.name, card.link);
                });
            })
            .catch(this.api.error);

    }
}