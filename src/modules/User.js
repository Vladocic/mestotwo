 export default class User {
     constructor(container, api) {
         this.name = container.querySelector(".user-info__name");
         this.about = container.querySelector(".user-info__job");
         this.avatar = container.querySelector(".user-info__photo");
         this.api = api;
     }

     getUserInfo(path) {
         this.api
             .getInfo(path)
             .then(this.api.status)
             .then(user => {
                 this.name.textContent = user.name;
                 this.about.textContent = user.about;
                 this.avatar.style.backgroundImage = `url(${user.avatar})`;
             })
             .catch(this.api.error);
     }
 }