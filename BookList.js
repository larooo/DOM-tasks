const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRE9Gs-AE6tlklMobhVHdrcETgUc2Yj7rBugZaUhH18MQoLGhaEKd0aic9XWU-qdnv70bZQr42vT5RdRMMZ2yhV_YfoINtQqmtDVnMywTvP&usqp=CAc",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51aKPFuUy1L._SX324_BO1,204,203,200_.jpg",
    alreadyRead: true
  }
];
document.body.style.background = "#ECECEF";
let h1Text = document.getElementsByTagName("h1");
// h1Text.setAttribute("align", "center);

let ul = document.createElement("ul");
for (let i = 0; i < books.length; i++) {
  let li = document.createElement("li");
  let bookImg = document.createElement("img");
  //   let bookI = document.createElement("p");
  let bookInfos = document.createTextNode(
    books[i].title + " by " + books[i].author
  );
  bookImg.src = books[i].image;
  bookImg.width = "150";
  bookImg.height = "150";
  li.appendChild(bookImg);
  li.appendChild(bookInfos);
  //   bookI.appendChild(bookInfos);
  ul.appendChild(li);
  if (books[i].alreadyRead) {
    li.style.color = "red";
  } else {
    li.style.color = "black";
  }

  document.body.appendChild(ul);
}
