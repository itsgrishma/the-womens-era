
var n = 10;
console.log(n);
var n2 = 5;
console.log(n + n2);

let form = document.contact_form;
let fullname = document.contact_form.fname;
let email = document.contact_form.email;
console.log(fullname, email);



form.addEventListener("submit", function(event) {
    if(fullname.value.length == 0) {
        fullname.nextElementSibling.innerText = "Fullname is empty!";
        event.preventDefault();
    } else {
        fullname.nextElementSibling.innerText = "";
    }

    if(email.value.length == 0) {
        email.nextElementSibling.innerText = "Email is empty!";
        event.preventDefault();
    } else {
        email.nextElementSibling.innerText = "";
    }
});

email.addEventListener("keyup", function() {
    if(this.value.indexOf("@") == -1) {
        email.nextElementSibling.innerText = "'@' symbol is required!";
    } else if(this.value.indexOf(".") == -1) {
        email.nextElementSibling.innerText = "'.' symbol is required!";
    } else if(this.value.indexOf("@") != this.value.lastIndexOf("@")) {
        email.nextElementSibling.innerText = "'@' symbol must be one!";
    } else {
        email.nextElementSibling.innerText = "";
    }
});

