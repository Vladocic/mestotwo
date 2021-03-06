 export default class Card {
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


     create(name, link) {

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