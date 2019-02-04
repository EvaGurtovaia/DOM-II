// Your code goes here
// Using your index.js file, create 10 unique event listeners. using your creativity to 
//make the Fun Bus site more interactive. Here are some unique events you could try to use:
// mouseover
 //keydown
 //wheel
 //drag / drop
 //load
 //focus
 //resize
 //scroll
 //select
 //dblclick

 //By pressing  a keydown the header will disappear 
const body = document.querySelector('body');
const header = document.querySelector('header');
body.addEventListener("keydown", () => header.style.opacity = "0");

// Add a background color and increase size of nav links if they are clicked 
 let navLinks = document.querySelectorAll(".nav-link");

 navLinks.forEach((link, i) => {
     link.addEventListener("click", (e) => {
        e.target.style.backgroundColor = 'pink';
        e.target.style.transform = "scale(1.5)";
      })
 })

// Stoping the navigation from items from refreshing the page by using 
const nav = document.querySelector(".nav");
nav.addEventListener('click', (e) => {e.preventDefault();
console.log("No-no-no");}
);

//Add a background color and increase of logo
let logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("dblclick", (e) => {
    e.target.style.backgroundColor = 'aquamarine';
    e.target.style.transform = "scale(2.5)";
  });

  //Changing the image
  let img = document.querySelector("img");
  img.addEventListener("mouseover", (e) => {
      e.target.setAttribute('src', 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/ocean.jpg');
  })

  //Adding a boder 
 let button = document.querySelectorAll(".btn");
  button.forEach((element, i) => {
      element.addEventListener("focus",(e) => {
e.target.style.border = '2px solid pink';
      })
  })

  window.addEventListener("load", (e) => {
    console.log("Happy to see you! ");
  })




