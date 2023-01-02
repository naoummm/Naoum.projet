var courses = [{
    image: './images/javascriptDef.png',
    title: 'what is javascript?',
    category: 'JS',
    price: 9.9
},
{
    image: './images/htmlBasics.PNG',
    title: 'basics of HTML',
    category: 'HTML',
    price: 5.9
},
{
    image: './images/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 9.9
},
{
    image: './images/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: 69.9
},
{
    image: './images/javascriptVariables.png',
    title: 'variables and data type of javascript',
    category: 'JS',
    price: 19.9
},
{
    image: './images/javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 29.9
},
{
    image: './images/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 19.9
},
{
    image: './images/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: 29.9
},
{
    image: './images/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 39.9
},
{
    image: './images/cssMesures.png',
    title: 'mesures and unites of CSS',
    category: 'CSS',
    price: 19.9
},
{
    image: './images/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price: 19.9
},
{
    image: './images/javascriptFunctions.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: 29.9
},
{
    image: './images/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: 59.9
},
{
    image: './images/cssColors.png',
    title: 'css colors',
    category: 'css',
    price: 29.9
},
{
    image: './images/phpBasics.png',
    title: 'getting started with php',
    category: 'php',
    price: 15.9
},
{
    image: './images/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: 19.9
},
{
    image: './images/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: 29.9
},
{
    image: './images/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'php',
    price: 45.9
},
{
    image: './images/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 23.9
}
];


var random = Math.floor(Math.random() * courses.length);
var random2 = Math.floor(Math.random() * courses.length);
if (random == random2){ random2 = Math.floor(Math.random() * courses.length);}
var random1 = Math.floor(Math.random() * courses.length);
if (random1 == random2 || random == random1){ random1 = Math.floor(Math.random() * courses.length);}
var image1 = document.getElementById("leftit");
var image2 = document.getElementById("rightit");
var image3 = document.getElementById("centerit")
document.getElementById("leftH2").innerHTML =
courses[random1].title;
document.getElementById("centerH2").innerHTML =
courses[random2].title;
document.getElementById("rightH2").innerHTML =
courses[random].title;
image1.src = courses[random1].image;
image2.src = courses[random].image;
image3.src = courses[random2].image; 
  function delayedFunction() {
 var random = Math.floor(Math.random() * courses.length);
 var random2 = Math.floor(Math.random() * courses.length);
 if (random == random2){ random2 = Math.floor(Math.random() * courses.length);}
 var random1 = Math.floor(Math.random() * courses.length);
 if (random1 == random2 || random == random1){ random1 = Math.floor(Math.random() * courses.length);}
 var image1 = document.getElementById("leftit");
 var image2 = document.getElementById("rightit");
 var image3 = document.getElementById("centerit")
 document.getElementById("leftH2").innerHTML =
 courses[random1].title;
 document.getElementById("centerH2").innerHTML =
 courses[random2].title;
 document.getElementById("rightH2").innerHTML =
 courses[random].title;
 image1.src = courses[random1].image;
 image2.src = courses[random].image;
 image3.src = courses[random2].image;
}
setInterval(delayedFunction, 3000);