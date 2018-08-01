var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var errrors = 0;
errrors++;

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function populateDates() {
    var today = new Date(),
        day = today.getUTCDate(),
        month = today.getUTCMonth(),
        year = today.getUTCFullYear(),
        daysInCurrMonth = daysInMonth(month, year);

    // Year
    for (var i = 0; i < 21; i++) {
        var opt = document.createElement('option');
        opt.value = i + year;
        opt.text = i + year;
        yeardropdown.appendChild(opt);
    }

    // Month
    for (var i = 0; i < 12; i++) {
        var opt = document.createElement('option');
        opt.value = months[i];
        opt.text = months[i];
        monthdropdown.appendChild(opt);
    }

    // Day
    for (var i = 0; i < daysInCurrMonth; i++) {
        var opt = document.createElement('option');
        opt.value = i + 1;
        opt.text = i + 1;
        daydropdown.appendChild(opt);
    }
}

var daydropdown = document.getElementById("daydropdown"),
    monthdropdown = document.getElementById("monthdropdown"),
    yeardropdown = document.getElementById("yeardropdown");

// Change handler for months
monthdropdown.onchange = function() {
    var newMonth = months.indexOf(monthdropdown.value) + 1,
        newYear = yeardropdown.value;

    daysInCurrMonth = daysInMonth(newMonth, newYear);

    daydropdown.innerHTML = "";
    for (var i = 0; i < daysInCurrMonth; i++) {
        var opt = document.createElement('option');
        opt.value = i + 1;
        opt.text = i + 1;
        daydropdown.appendChild(opt);
    }
}


populateDates();
// expDate();


var bike = document.getElementById("bike");
bike.onchange = function() {
    if (bike.value) {
        removeValidation2(bike);
        bike.classList.add("success");
        return false;
    } else {
        return true;
    }
}
var region2 = document.getElementById("region2");
var region = document.getElementById("region");
var year = document.getElementById("yeardropdown");
var month = document.getElementById("monthdropdown");
var day = document.getElementById("daydropdown");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var streetAddress = document.getElementById("streetAddress");

//dropdowl list caheck

region.onchange = function() {
    if (region.value) {
        removeValidation2(region);
        region.classList.add("success");
        return false;
    }
}
region2.onchange = function() {
    if (region2.value) {
        removeValidation2(region2);
        region2.classList.add("success");
        return false;
    }
}
year.onchange = function() {
    if (year.value) {
        removeValidation2(year);
        year.classList.add("success");
        return false;
    }
}
month.onchange = function() {
    if (month.value) {
        removeValidation2(month);
        month.classList.add("success");
        return false;
    }
}
day.onchange = function() {
    if (day.value) {
        removeValidation2(day);
        day.classList.add("success");
        return false;
    }
}


firstName.onblur = function() {
    if (firstName.value.length == 0) {
        removeValidation2(firstName);
        generateError2('Required', firstName);
        return true;
    } else {
        if (firstName.value.length > 1) {
            removeValidation2(firstName);
            firstName.classList.add("success");
            return false;
        } else {
            removeValidation2(firstName);
            generateError2('Name is to short!', firstName);
            return true;
        }
    }
}
firstName2.onblur = function() {
    if (firstName2.value.length == 0) {
        removeValidation2(firstName2);
        generateError2('Required', firstName2);
        return true;
    } else {
        if (firstName2.value.length > 1) {
            removeValidation2(firstName2);
            firstName2.classList.add("success");
            return false;
        } else {
            removeValidation2(firstName2);
            generateError2('Name is to short!', firstName2);
            return true;
        }
    }
}

lastName.onblur = function() {
    if (lastName.value.length == 0) {
        removeValidation2(lastName);
        generateError2('Required', lastName);
        return true;
    } else {
        if (lastName.value.length > 1) {
            removeValidation2(lastName);
            lastName.classList.add("success");
            return false;
        } else {
            removeValidation2(lastName);
            generateError2('Lastname is to short!', lastName);
            return true;
        }
    }
}
lastName2.onblur = function() {
    if (lastName2.value.length == 0) {
        removeValidation2(lastName2);
        generateError2('Required', lastName2);
        return true;
    } else {
        if (lastName2.value.length > 1) {
            removeValidation2(lastName2);
            lastName2.classList.add("success");
            return false;
        } else {
            removeValidation2(lastName2);
            generateError2('Lastname is to short!', lastName2);
            return true;
        }
    }
}
streetAddress.onblur = function() {
    if (streetAddress.value.length == 0) {
        removeValidation2(streetAddress);
        generateError2('Required', streetAddress);
        return true;
    } else {
        if (streetAddress.value.length > 5) {
            removeValidation2(streetAddress);
            streetAddress.classList.add("success");
            return false;
        } else {
            removeValidation2(streetAddress);
            generateError2('Strit address is to short!', streetAddress);
            return true;
        }
    }
}
streetAddress2.onblur = function() {
    if (streetAddress2.value.length == 0) {
        removeValidation2(streetAddress2);
        generateError2('Required', streetAddress2);
        return true;
    } else {
        if (streetAddress2.value.length > 5) {
            removeValidation2(streetAddress2);
            streetAddress2.classList.add("success");
            return false;
        } else {
            removeValidation2(streetAddress2);
            generateError2('Strit address is to short!', streetAddress2);
            return true;
        }
    }
}
zip.onblur = function() {
    if (zip.value.length == 0) {
        removeValidation2(zip);
        generateError2('Required', zip);
        return true;
    } else {
        removeValidation2(zip);
        zip.classList.add("success");
        return false;
    }
}
zip2.onblur = function() {
    if (zip2.value.length == 0) {
        removeValidation2(zip2);
        generateError2('Required', zip2);
        return true;
    } else {
        removeValidation2(zip2);
        zip2.classList.add("success");
        return false;
    }
}
phone.onblur = function() {
    if (phone.value.length == 0) {
        removeValidation2(phone);
        generateError2('Required', phone);
        return true;
    } else {
        removeValidation2(phone);
        phone.classList.add("success");
        return false;
    }
}
phone2.onblur = function() {
    if (phone2.value.length == 0) {
        removeValidation2(phone2);
        generateError2('Required', phone2);
        return true;
    } else {
        removeValidation2(phone2);
        phone2.classList.add("success");
        return false;
    }
}
var cardtype = document.getElementsByClassName("cardtype");
var cards = document.querySelector('.cards');

cardtype[0].onblur = function() {
    if (cardtype[0].value) {
        cards.classList.add("success");
        return false;
    }
}
cardtype[1].onblur = function() {
    if (cardtype[0].value) {
        cards.classList.add("success");
        return false;
    }
}
cardNum.onblur = function() {
    if (cardNum.value) {
        removeValidation2(cardNum);
        cardNum.classList.add("success");
        return false;
    } else {
        removeValidation2(cardNum);
        generateError2("Required!", cardNum);
        return true;
    }
}
var exp = document.getElementById("expiration");
exp.onblur = function() {
    if (exp.value) {
        removeValidation2(exp);
        exp.classList.add("success");
        return false;
    } else {
        removeValidation2(exp);
        generateError2("Required!", exp);
        return true;
    }
}
var cvv = document.getElementById("cvv");
cvv.onblur = function() {
    if (cvv.value) {
        removeValidation2(cvv);
        cvv.classList.add("success");
        return false;
    } else {
        removeValidation2(cvv);
        generateError2("Required!", cvv);
        return true;
    }
}

var checkCardTypePressent = function() {

    if (!cardtype[0].checked == true && !cardtype[1].checked == true) {
        generateError2("Required!", cards);
        return true;
    }
    return false;
}





























var generateError2 = function(text, element) {
    var error = document.createElement('div');
    error.classList.add("err");
    error.style.color = 'red';
    error.innerHTML = text;
    element.classList.add("error");
    element.parentElement.insertBefore(error, element.nextSibling);
}
var generateError = function(text, i, arr) {
    var error = document.createElement('div');
    error.className = 'err';
    error.style.color = 'red';
    error.innerHTML = text;
    arr[i].classList.add("error");
    return error;
}

var removeValidation = function() {
    var err = form.querySelectorAll(".err");
    var error = form.querySelectorAll(".error");

    for (var i = 0; i < err.length; i++) {
        err[i].remove();
    }
    for (var i = 0; i < error.length; i++) {
        error[i].classList.remove("error");
    }
}

var removeValidation2 = function(element) {
    if (element.nextSibling) {
        if (element.nextSibling.classList) {
            if (element.nextSibling.classList.contains("err")) {
                element.nextSibling.remove();
            }
        }
    }

    if (element.classList.contains("error")) {
        element.classList.remove("error");
    }


}


var userName = document.getElementById("userName");
let pswd = document.getElementById("pswd");
let pswdConfirm = document.getElementById("pswdConfirm");
var fields = document.querySelectorAll('.field');
var checkFieldsPressent = function() {
    var errrors = false;
    for (var i = 0; i < fields.length; i++) {
        if (sameAddress.checked == false) {
            if (!fields[i].value) {
                if (!userName.value && !pswd.value && !pswdConfirm.value) {
                    if (fields[i].classList.contains('registration')) {
                        continue;
                    }
                }

                var error = generateError('Required', i, fields);
                fields[i].parentElement.insertBefore(error, fields[i].nextSibling);
                errrors = true;
            }
        } else {
            if (!fields[i].value) {
                if (fields[i].classList.contains("delivery")) {
                    continue;
                }

                var error = generateError('Required', i, fields);
                fields[i].parentElement.insertBefore(error, fields[i].nextSibling);
                errrors = true;
            }
        }

    }
    return errrors;

}




var checkDeliveryAddress = function() {
    if (sameAddress.checked == true) {
        firstName2.value = firstName.value;
        lastName2.value = lastName.value;
        streetAddress2.value = streetAddress.value;
        region2.value = region.value;
        zip2.value = zip.value;
        phone2.value = phone.value;

        firstName2.disabled = true;
        lastName2.disabled = true;
        streetAddress2.disabled = true;
        region2.disabled = true;
        zip2.disabled = true;
        phone2.disabled = true;

        // if (region2.classList) {
        //     removeValidation2(region2);
        //     region2.classList.remove('success');
        // }

        for (let i = 0; i < delivery.length; i++) {
            if (delivery[i].classList.contains("error")) {
                delivery[i].classList.remove("error");
            }
            if (delivery[i].nextSibling) {
                delivery[i].nextSibling.remove();
            }
        }
        for (let i = 0; i < delivery.length; i++) {
            if (delivery[i].classList.contains("success")) {
                delivery[i].classList.remove("success");
            }
        }
        return true;
    } else {
        firstName2.disabled = false;
        lastName2.disabled = false;
        streetAddress2.disabled = false;
        region2.disabled = false;
        zip2.disabled = false;
        phone2.disabled = false;

        firstName2.value = "";
        lastName2.value = "";
        streetAddress2.value = "";
        region2.value = "";
        zip2.value = "";
        phone2.value = "";

    }
};



var regValid = function() {

    if (userName.value || pswd.value || pswdConfirm.value) {
        userNameValid();
        pswdValid();
        return pswdConfirmValid();
    } else {
        return false;
    }
};

userName.onblur = function() {
    userNameValid();
}
pswd.onblur = function() {
    pswdValid();
}
pswdConfirm.onblur = function() {
    pswdConfirmValid();
}

function userNameValid() {
    if (userName.value) {
        if (userName.value.length < 4) {
            removeValidation2(userName);
            generateError2("Login is to short!", userName);
            return true;
        } else {
            removeValidation2(userName);
            userName.classList.add("success");
            return false;
        }
    } else {
        removeValidation2(userName);
        if (userName.value || pswd.value || pswdConfirm.value) {
            generateError2("Required!", userName);
            return true;
        } else {
            removeValidation2(userName);
            if (userName.classList) {
                userName.classList.remove("success");
            }
            return true;
        }

    }
}

function pswdValid() {
    if (pswd.value) {
        if ((pswd.value.length < 6)) {
            removeValidation2(pswd);
            generateError2("Password is to short!", pswd);
        } else {
            removeValidation2(pswd);
            pswd.className = "success";
            return true;
        }
    } else {
        removeValidation2(pswd);
        if (pswd.value || pswd.value || pswdConfirm.value) {
            generateError2("Required!", pswd);
            return true;
        } else {
            removeValidation2(pswd);
            if (pswd.classList) {
                pswd.classList.remove("success");
            }
            return true;
        }
    }
}

function pswdConfirmValid() {
    if (!pswdConfirm.value) {
        removeValidation2(pswdConfirm);
        if (userName.value || pswd.value || pswdConfirm.value) {
            generateError2("Required!", pswdConfirm);
        }
        return true;
    }
    if (pswd.value) {
        if (pswdConfirm.value != pswd.value) {
            removeValidation2(pswdConfirm);
            generateError2("Passwords dont match!", pswdConfirm);
            return false;
        } else {
            removeValidation2(pswdConfirm);
            pswdConfirm.className = "success";
            return true;
        }
    } else {
        removeValidation2(pswdConfirm);
        if (pswdConfirm.value || pswdConfirm.value || pswdConfirmConfirm.value) {
            generateError2("Required!", pswdConfirm);
            return true;
        } else {
            removeValidation2(pswdConfirm);
            if (pswdConfirm.classList) {
                pswdConfirm.classList.remove("success");
            }
            return true;
        }
    }
}

function lettersOnly() {
    var inputValue = event.which;
    // allow letters and whitespaces only.
    if (!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) {
        event.preventDefault();
    }
}

function numOnly() {
    var inputValue = event.which;
    // allow letters and whitespaces only.
    if (!(inputValue >= 48 && inputValue <= 57)) {
        event.preventDefault();
    }
}
$(document).ready(function() {
    $("#firstName").keypress(function(event) {
        lettersOnly();
    });
    $("#lastName").keypress(function(event) {
        lettersOnly();
    });
    $("#firstName2").keypress(function(event) {
        lettersOnly();
    });
    $("#lastName2").keypress(function(event) {
        lettersOnly();
    });
    $("#zip").keypress(function(event) {
        numOnly();
    });
    $("#zip2").keypress(function(event) {
        numOnly();
    });
    $("#phone").keypress(function(event) {
        numOnly();
    });
    $("#phone2").keypress(function(event) {
        numOnly();
    });
    $("#cvv").keypress(function(event) {
        numOnly();
    });
});