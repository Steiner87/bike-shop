var validateBtn = document.getElementById('validateBtn');
// var fields = document.querySelectorAll('.field');
var delivery = document.querySelectorAll('.delivery');
// var year = document.getElementById("yeardropdown");
// var month = document.getElementById("monthdropdown");
// var day = document.getElementById("daydropdown");
// var firstName = document.getElementById("firstName");
// var lastName = document.getElementById("lastName");
// var message = document.getElementById("message");
// var streetAddress = document.getElementById("streetAddress");
// var region = document.getElementById("region");
// var bike = document.getElementById("bike");
// var zip = document.getElementById("zip");
// var phone = document.getElementById("phone");
var cardNum = document.getElementById("cardNum");
var cvv = document.getElementById("cvv");
var firstName2 = document.getElementById("firstName2");
var lastName2 = document.getElementById("lastName2");
var streetAddress2 = document.getElementById("streetAddress2");
var region2 = document.getElementById("region2");
var zip2 = document.getElementById("zip2");
var phone2 = document.getElementById("phone2");
var sameAddress = document.getElementById("sameAddress");
var cardtype = document.getElementsByClassName("cardtype");
var cards = document.querySelector('.cards');
var reg = document.querySelectorAll('.registration');
var form = document.getElementById('formWithValidation');


function formValid() {
    var error = document.querySelectorAll(".err");
    for (let i = 0; i < error.length; i++) {
        return false;
    }

    var user = {
        'firstName': firstName.value,
        'lastName': lastName.value,
        'streetAddress': streetAddress.value,
        'region': region.value,
        'message': message.value,
        'streetAddress': streetAddress.value,
        'bike': bike.value,
        'zip': zip.value,
        'phone': phone.value,
        'cardNum': cardNum.value,
        'expiration': expiration.value,
        'cvv': cvv.value,
        'firstName2': firstName2.value,
        'lastName2': lastName2.value,
        'streetAddress2': streetAddress2.value,
        'region2': region2.value,
        'zip2': zip2.value,
        'phone2': phone2.value,
        'cardtype': cardtype.value,
        'userName': userName.value,
        'pswd': pswd.value,
        'year': year.value,
        'month': month.value,
        'day': day.value,
    };

    localStorage.setItem('user', JSON.stringify(user));
    form.submit();

}


form.addEventListener('submit', function(event) {
    event.preventDefault();
    removeValidation();
    checkFieldsPressent();
    checkCardTypePressent();
    regValid();
    formValid();
});