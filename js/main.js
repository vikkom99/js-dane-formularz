let imie = document.getElementById("fname");
let nazwisko = document.getElementById("lname");
let numer = document.getElementById("phoneNumb");
function download() {
    let name = document.getElementById("fname").value;
    document.getElementById("name").innerHTML = name;

    let surname = document.getElementById("lname").value;
    document.getElementById("surname").innerHTML = surname;

    let phone = document.getElementById("phoneNumb").value;
    document.getElementById("phone").innerHTML = phone;
}
