var course = document.querySelector('.course');
function creationCours2(path, titre, prix) {
    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');

    div.setAttribute('class', ' col-3 card me-2 mb-2');
    div.setAttribute('id',titre)
    img.src = path;
    img.setAttribute('class', 'LIVE card-img');
    p.setAttribute('class', 'LIVE card-title');
    span.setAttribute('class', 'card-text');
    img.setAttribute('style', "  width: auto; height: 150px; aspect-ratio: 3/2;");
    p.setAttribute('style', " font-family: sans serif; align-items: center; text-align: center;justify-content: center");
    span.setAttribute('style', " font-family: sans serif; align-items: center; text-align: center;justify-content: center");

    p.appendChild(document.createTextNode(titre));
    span.appendChild(document.createTextNode(prix));
    span.innerHTML += "$"
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    
    course.append(div)
    

}
courses.forEach((element) => {
    creationCours2(element.image, element.title, element.price)});

function filterALL(){
    course.replaceChildren();
courses.forEach((element) => {
    creationCours2(element.image, element.title, element.price)
})}
document.getElementById("PV1").oninput = function(){
    var PV = document.getElementById("PV1").value;
    document.getElementById("PV").innerHTML = "Value :" + PV + "$";
}
function filterCSS(){
    course.replaceChildren();

     courses.forEach((element) => {
    
        if(element.category.toUpperCase() === 'CSS'){

  creationCours2(element.image, element.title, element.price)

 }})
}


function search_Course() {
    let inputs = document.getElementById('Search').value;
    
     var filter = inputs.toUpperCase();
      
    courses.forEach((e)=>{
        var hi = document.getElementById(e.title);
       
        if(!(hi == null)){
        if (e.title.toUpperCase().indexOf(filter) > -1) {
            hi.style.display="";
        }
        else {
            hi.style.display="none";                 
        }
    }
    })}
    function filterHTML(){
        course.replaceChildren();
    
         courses.forEach((element) => {
        
            if(element.category.toUpperCase() === 'HTML'){
    
      creationCours2(element.image, element.title, element.price)
    
     }})
    }
    function filterJS(){
        course.replaceChildren();
    
         courses.forEach((element) => {
        
            if(element.category.toUpperCase() === 'JS'){
    
      creationCours2(element.image, element.title, element.price)
    
     }})
    }
    function filterPHP(){
        course.replaceChildren();
    
         courses.forEach((element) => {
        
            if(element.category.toUpperCase() === 'PHP'){
    
      creationCours2(element.image, element.title, element.price)
    
     }})
    }
    function filterPrice() {
        let inputss = document.getElementById('PV1').value;
        
         
      
        courses.forEach((e)=>{
            var hi = document.getElementById(e.title);
           
            if(!(hi == null) &&  (hi.style.display="none")){
              
           
            if(e.price > inputss ) {
                hi.style.display="none";                 
            }
            else if ((e.price <= inputss )){
                hi.style.display="";
            }
        }
        })}


// function CreationCatg(){
// var categoriesALL = courses.map((v)=> {return v.category.toUpperCase()});
// var categories = [...new Set(categoriesALL)]
//  categories.foreach(element => {
//     ul.innerHTML += '<li>'+element+'<li>';})}
    
//  CreationCatg();