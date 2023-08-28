// query selection here 
const library=document.querySelector(".Library");
const addBookButton = document.querySelector(".addBook")
const form=document.querySelector("form");
const dialog=document.querySelector("dialog");
const confirming =document.querySelector("#confirm");
const title=document.querySelector("#tit")
const author=document.querySelector("#auth");
const pages=document.querySelector("#pag")
const read=document.querySelector("#read");
const bookShelf = document.querySelector(".books");
//global variables
const myLibrary = [];
let deleteBook=[];
let bookBox=[];
//add Event Listener
addBookButton.addEventListener("click",()=>dialog.showModal())
confirming.addEventListener("click",(e)=>{
  e.preventDefault();
  let readOrNot=(read.checked)?"read":"Not read";
  addBookToLibrary(title.value,author.value,Number(pages.value),readOrNot);
  dialog.close();
})
document.addEventListener("click",(e)=>{
  if (e.target.classList.contains("deletionButton"))
    e.target.parentNode.remove();
  else if (e.target.classList.contains("readButton")){
    if (e.target.textContent =="read"){
      e.target.textContent="Not read";
    }else{
      e.target.textContent = "read";
    }
  }
})

//function definitions 
function Book(title,author,pages,read) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
  this.info=()=>{
    return (`${title} was written by "${author}" , ${pages} pages`)
  }
}

function addBookToLibrary(title,author,pages,read) {
  if(title&&author&&pages&&read)
  {const book=new Book(title,author,pages,read);
  addToShelf(book);
  myLibrary.push(book);
 }
}
function addToShelf(book){
   bookBox[bookBox.length]=document.createElement("div");
  const h2=document.createElement("h2");
  const p=document.createElement("p");
  const readButton =document.createElement("button");
  readButton.classList.add("readButton");
  if(book.read=="read"){
    readButton.textContent="read";
  }else{
    readButton.textContent = "Not read";
  }

  deleteBook[deleteBook.length]=document.createElement("button");
  deleteBook[deleteBook.length-1].textContent="X";
  deleteBook[deleteBook.length-1].classList.add("deletionButton")
  h2.textContent=book.title;
  p.textContent=book.info();
  bookBox[bookBox.length - 1].appendChild(h2);
  bookBox[bookBox.length - 1].appendChild(p);
  bookBox[bookBox.length - 1].appendChild(deleteBook[deleteBook.length - 1]);
  bookBox[bookBox.length - 1].appendChild(readButton);
  bookBox[bookBox.length - 1].classList.add("bookBox");
  bookShelf.appendChild(bookBox[bookBox.length - 1]);


}

// test and calling objects 



// 1- each input can be acessd element.value
//