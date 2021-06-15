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
    console.log('increment');
    dataContent.number++;
    display();
}

function decrement () {
    dataContent.number--;
    display();
}

function addition () {
    dataContent.number = dataContent.number + dataContent.number;
    display();
}

function multiplication () {
    dataContent.number = dataContent.number * dataContent.number;
    display();
}

function reset() {
    dataContent.setNumber = 0;
    display();
}

function display () {
    displayNumber.innerHTML = dataContent.getNumber;
}

