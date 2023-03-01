import "../css/styles.css";
import userTemplate from "../hbs/user.hbs";
import userNavTemplate from "../hbs/userNav.hbs";
import pageTemplate from "../hbs/structure.hbs";

import getUsers from "./usersfetch";

let users;
let appEl = document.getElementById("app");
appEl.innerHTML = pageTemplate();

let navEl = document.querySelector("nav");

getUsers(50, data => {
  users = data;
  navEl.innerHTML = userNavTemplate(data);
  let navButtons = document.querySelectorAll("nav>*");
  console.log(navButtons);

  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("click", ev => {
      renderUser(ev.srcElement.dataset.index);
    });
  }
});

let renderUser = uid => {
  let userEl = document.getElementById("user");
  userEl.innerHTML = userTemplate(users.results[uid]);
};
