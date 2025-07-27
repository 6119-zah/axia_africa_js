const lists = ` 
     <li>Our Challenge Done</li>
     <li>Our Challenge is ongoing</li>
     <li>Our Challenge is Coming</li>
     <li>our Challenge has Ended</li>
     <li> A new challenge will begin soon
`

const ulEl = document.querySelector("ul");
console.log(ulEl);

ulEl.innerHTML = lists;
console.log(ulEl)
ulEl.classList.add = "listItems";

const listItems = document.querySelector("li");
listItems[0].style.backgroundColor = "red";

// queryselector
//querySelectorAll
//get element
const h1 = document.querySelector("h1");
console.log(h1);