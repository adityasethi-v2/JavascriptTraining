// function submitForm() {
//     var fName = document.getElementById("firstName").value;
//     var sName = document.getElementById("secondName").value;
//     var email = document.getElementById("emailId").value;
//     console.log(`First Name : ${fName} \n Second Name : ${sName} \n Email : ${email}`);
// }

const displayNumber = document.getElementById('numberBox');

var dataContent = {
    number: 0,
    set setNumber(a) {
        this.number = a;
    },
    get getNumber() {
        return this.number;
    }
}

display();

function increment () {
    dataContent.setNumber = ++dataContent.number;
    display();
}

function decrement () {
    dataContent.setNumber = --dataContent.number;
    display();
}

function addition () {
    dataContent.setNumber = dataContent.number + dataContent.number;;
    display();
}

function multiplication () {
    dataContent.setNumber = dataContent.number * dataContent.number;;
    display();
}

function reset() {
    dataContent.setNumber = 0;
    display();
}

function display () {
    displayNumber.innerHTML = dataContent.getNumber;
}

