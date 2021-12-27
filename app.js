const button = document.querySelector("#button")
const ageName = document.querySelector("#agename");
const ageYear = document.querySelector("#ageyear");
const result = document.querySelector("#result");


ageName.addEventListener("click", () => {
    result.innerHTML = "";
    button.innerHTML = "Check Your Result"
})
ageYear.addEventListener("click", () => {
    result.innerHTML = "";
    button.innerHTML = "Check Your Result"
})

button.addEventListener("click", () => {

    var ageName = document.getElementById('agename').value;
    var nameRGEX = /^[A-Za-z ]{2,}$/
    var nameResult = nameRGEX.test(ageName);

    var ageYear = document.getElementById('ageyear').value;
    var yearRGEX = /^[0-9]{4}$/;
    var ageResult = yearRGEX.test(ageYear);



    if (nameResult && ageResult ) {
        result.innerHTML = ageCal(ageName, ageYear);
        document.getElementById('agename').value = "";
        document.getElementById('ageyear').value = "";
        button.innerHTML="Done";
    } else if (!nameResult && ageResult) {
        result.innerHTML = `<p class="alert-danger p-4">Plase Write Your Valid  Name</p>`;


    } else if (nameResult && !ageResult) {
        result.innerHTML = `<p class="alert-danger p-4">Plase Write Your Valid Date Of Birth</p>`;

    } else {
        result.innerHTML = `<p class="alert-danger p-4">Plase Write Your Valid Right Information</p>`;
    }

    // document.getElementById('agename').value = "";
    // document.getElementById('ageyear').value = "";
});