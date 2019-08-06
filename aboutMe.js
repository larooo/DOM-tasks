document.body.style.fontFamily = "Arial, sans-serif";

let Nickname = document.getElementById("nickname");
Nickname.textContent = "Larooo";

let Favorites = document.getElementById("favorites");
Favorites.textContent = " Sleeping, Reading ";

let Hometown = document.getElementById("hometown");
Hometown.textContent = "Homs, Syria";

let list = document.querySelectorAll("li");

for (let i = 0; i < list.length; i++) {
  list[i].className = "list-item";
}

let myPicture = document.createElement("img");
myPicture.src =
  "https://www.karstadt.de/dw/image/v2/karstadt/derivates/1/001/208/588/SProdukt_SLE20797_1_a.jpg?sw=1200&sh=1200&sm=fit";
myPicture.width = "500";
myPicture.height = "500";

document.body.appendChild(myPicture);
