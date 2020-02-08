import "./pages/style.css";



import Api from "./modules/Api";
import Card from "./modules/Card";
import CardList from "./modules/Cardlist";
import PopupEdit from "./modules/PopupEdit";
import PopupImage from "./modules/PopupImage";
import PopupPlace from "./modules/PopupPlace";
import User from "./modules/User";


const serverUrl =
    NODE_ENV === "development" ?
    "http://praktikum.tk/cohort6" :
    "https://praktikum.tk/cohort6";


const api = new Api({
    url: serverUrl,
    headers: {
        authorization: "2d20a873-4671-48d5-9c2e-062202b34b7f",
        "Content-Type": "application/json"
    }
});


const card = new Card();
const cardList = new CardList(document.querySelector('.places-list'), card, api);
const popupEdit = new PopupEdit(document.querySelector('.popup__edit'), api);
const popupPlace = new PopupPlace(document.querySelector('.popup'), cardList);
const popupImage = new PopupImage(document.querySelector('.popup__image'));
const userBlock = document.querySelector(".user-info");
const user = new User(userBlock, api);



//создаем 10 карточек
cardList.render("/cards");
// лайк и удаление
document.querySelector('.places-list').addEventListener('click', e => {
    card.remove(e);
    card.like(e);
});
// открытие и закрытие попапа
document.querySelector('body').addEventListener("click", e => {
    popupEdit.open(e);
    popupEdit.close(e);
    popupPlace.open(e);
    popupPlace.close(e);
    popupImage.open(e);
    popupImage.close(e);
});


//активная или неаткиваня кнопка
document.querySelector('body').addEventListener('input', e => {
    popupEdit.blacButton(e);
    popupPlace.blacButton(e);
});


// меняем данные на странице имя и работа
document.querySelector('.popup__button_edit').addEventListener('click', e => {
    popupEdit.changeName("/users/me", e);
});



// добавляем новую карточку в кардлиста
document.querySelector('.popup__button_plus').addEventListener('click', e => {
    popupPlace.newcard(e);
});
// валидация форм
document.forms.newtwo.addEventListener('input', e => {
    popupEdit.validation(e);
});

//Загрузка информации о пользователе с сервера
user.getUserInfo("/users/me");



//в предыдущем файле не сохранился код