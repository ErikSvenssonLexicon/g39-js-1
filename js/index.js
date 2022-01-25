
/*
var fullName = "Erik Svensson";
var age = 45;
var isNice = true;

console.log('name:',fullName);
console.log('age:', age)
console.log(isNice)
*/

//Hardcoded object assignment to var
var erik = {
    firstName: "Erik",
    lastName: "Svensson",
    age: 22,
    location: "Växjö, Sweden"
}

//Event listener(s)
document.getElementById("clickMe").addEventListener('click', handleClickMeButton);
document.getElementById("myForm").addEventListener('submit', handleFormSubmit);

//Event handler function when form is submitted
function handleFormSubmit(event){
    event.preventDefault();
    document.getElementById("content")
    .innerHTML = convertToHtml(
        {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            age: document.getElementById("age").value,
            location: document.getElementById("location").value
        }    
    )
}

//Event handler function when click me button is clicked
function handleClickMeButton(event){
    var elem = document.getElementById("content");
    elem.innerHTML = convertToHtml(erik);    
}

//Converting object to html to be rendered in content
function convertToHtml(person){
    return `
    <div>
        <p>${person.firstName}</p>
        <p>${person.lastName}</p>
        <p>${person.age}</p>
        <p>${person.location}</p>        
    </div>
    `
}

//Converting and desctructured object to html to be rendered in content
function convertToHtml2({firstName, lastName, age, location}){
    return `
    <div>
        <p>${firstName}</p>
        <p>${lastName}</p>
        <p>${age}</p>
        <p>${location}</p>        
    </div>
    `
}

/*
function Person(firstName, lastName, age, location){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
}

var someone = new Person("Karmand", "Aziz", "27", "In class");
console.log(someone);
*/


function personFactory(firstName, lastName, age, location){
    return {
        firstName,
        lastName,
        age,
        location    
    }
}

/*
var karmand = personFactory("Karmand", "Aziz", "27", "In class");
console.log(karmand)
console.log(karmand.getFullName())
karmand.firstName = "Foobar"
console.log(karmand.getFullName())
*/

