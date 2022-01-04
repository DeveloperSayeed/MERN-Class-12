// Age Calculator Method

const button = document.querySelector("#button")
const ageName = document.querySelector("#agename");
const ageYear = document.querySelector("#ageyear");
const result = document.querySelector("#result");



ageName.addEventListener("blur", () => {
    if (ageName.value == "") {
        ageName.style.border = "1px solid red";

    }
})
ageYear.addEventListener("blur", () => {
    if (ageYear.value == "") {
        ageYear.style.border = "1px solid red";

    }
})


ageName.addEventListener("keyup", () => {
    result.innerHTML = "";
    button.innerHTML = "Check Your Result"
    button.removeAttribute("style")

    let ageNameREXP = /^[A-Za-z ]*$/;
    if (ageNameREXP.test(ageName.value) == false) {
        ageName.style.border = "1px solid red";
    } else {
        ageName.style.border = "1px solid green";
    }

})
ageYear.addEventListener("keyup", () => {
    result.innerHTML = "";
    button.innerHTML = "Check Your Result"
    button.removeAttribute("style")


    let ageYearREXP = /^[0-9]{4}$/;
    if (ageYearREXP.test(ageYear.value) == "") {
        ageYear.style.border = "1px solid red";

    } else {
        ageYear.style.border = "1px solid green";
    }

})



button.addEventListener("click", () => {

    var ageName = document.getElementById('agename').value;
    var nameRGEX = /^[A-Za-z ]{2,}$/
    var nameResult = nameRGEX.test(ageName);

    var ageYear = document.getElementById('ageyear').value;
    var yearRGEX = /^[0-9]{4}$/;
    var ageResult = yearRGEX.test(ageYear);



    if (nameResult && ageResult) {

        result.innerHTML = ageCal(ageName, ageYear);

        document.getElementById('agename').value = "";
        document.getElementById('ageyear').value = "";
        button.innerHTML = "You Find Your Result";
        button.setAttribute("style", "background-color:red; box-shadow: none;  border: none;")



    } else if (!nameResult && ageResult) {
        result.innerHTML = `<p class="alert-danger p-4">Plase Write Your Valid  Name</p>`;


    } else if (nameResult && !ageResult) {
        result.innerHTML = `<p class="alert-danger p-4">Plase Write Your Valid Date Of Birth</p>`;

    } else {
        result.innerHTML = `<p class="alert-danger p-4">Plase Write Your Valid Right Information</p>`;
    }

});










// Currency Conveter Method

const curAmount = document.getElementById("curamount")
const curSelect = document.getElementById("curselect")
const formsubmit = document.getElementById("formsubmit")
const currencyresult = document.getElementById("currencyresult")




curAmount.addEventListener("blur", () => {

    
    if (curAmount.value == "") {
        curAmount.style.border = "1px solid red";
    } else {
        curAmount.style.border = "1px solid green";
    }
});

curAmount.addEventListener("keyup", () => {
    curAmount.style.border = "";
})



formsubmit.addEventListener("submit", (e) => {
    e.preventDefault();



    let REXP = /^[0-9.]*$/;


    if (REXP.test(curAmount.value) == false) {
        currencyresult.innerHTML = `<p class="alert alert-danger"> Plz Input Right Data </p>  `


    } else if (curAmount.value == "") {
        currencyresult.innerHTML = `<p class="alert alert-danger"> BDT Amount Must Be Requird </p>  `



    } else if (
        curSelect.value === curSelect.children[0].value
    ) {
        currencyresult.innerHTML = `<p class="alert alert-danger"> Please Select Your Cuurency  </p> `


    } 
    
    else if (
        curSelect.value === curSelect.children[1].value
    ) {
        currencyresult.innerHTML = `<p class="alert alert-success"> ${curAmount.value} USD = ${ curAmount.value * curSelect.children[1].value}Taka   </p> `
        curAmount.value = "";
        curSelect.value = curSelect.children[0].value;
    } 
    
    
    else if (
        curSelect.value === curSelect.children[2].value
    ) {
        currencyresult.innerHTML = `<p class="alert alert-success"> ${curAmount.value} ERO = ${ curAmount.value * curSelect.children[2].value} Taka </p> `
        curAmount.value = "";
        curSelect.value = curSelect.children[0].value;
    } else if (
        curSelect.value === curSelect.children[3].value
    ) {
        currencyresult.innerHTML = `<p class="alert alert-success"> ${curAmount.value} CAD = ${ curAmount.value * curSelect.children[3].value} Taka </p> `
        curAmount.value = "";
        curSelect.value = curSelect.children[0].value;
    } else if (
        curSelect.value === curSelect.children[4].value
    ) {
        currencyresult.innerHTML = `<p class="alert alert-success"> ${curAmount.value} SAR = ${ curAmount.value * curSelect.children[4].value} Taka </p> `
        curAmount.value = "";
        curSelect.value = curSelect.children[0].value;
    } else if (
        curSelect.value === curSelect.children[5].value
    ) {
        currencyresult.innerHTML = `<p class="alert alert-success"> ${curAmount.value} GBP = ${ curAmount.value * curSelect.children[5].value} Taka </p> `
        curAmount.value = "";
        curSelect.value = curSelect.children[0].value;
    } else if (
        curSelect.value === curSelect.children[6].value
    ) {
        currencyresult.innerHTML = `<p class="alert alert-success"> ${curAmount.value} MYR = ${ curAmount.value * curSelect.children[6].value} Taka </p> `
        curAmount.value = "";
        curSelect.value = curSelect.children[0].value;
    } else if (
        curSelect.value === curSelect.children[7].value
    ) {
        currencyresult.innerHTML = `<p class="alert alert-success"> ${curAmount.value} AED = ${ curAmount.value * curSelect.children[7].value} Taka </p> `
        curAmount.value = "";
        curSelect.value = curSelect.children[0].value;
    } else if (
        curSelect.value === curSelect.children[8].value
    ) {
        currencyresult.innerHTML = `<p class="alert alert-success"> ${curAmount.value} Taka = ${ curAmount.value * curSelect.children[8].value}  </p> `
        curAmount.value = "";
        curSelect.value = curSelect.children[0].value;
    }

})







// Marage Calculation 


const marageinput = document.querySelector("#marageinput")
const marageyear = document.querySelector("#marageyear")
const maragender = document.querySelector("#maragender")
const maragebutton = document.querySelector("#maragebutton")
const marrageresult = document.querySelector("#marrageresult")



let marageinputREXP = /^[a-zA-Z ]*$/;
let marageyearREXP = /^[0-9]{4}$/;

marageinput.addEventListener("blur", () => {
    if (marageinput.value == "") {
        marageinput.style.border = "1px solid red";
    } 
});

marageinput.addEventListener("keyup", () => {

    if (marageinputREXP.test(marageinput.value) == "") {
        marageinput.style.border = "1px solid red";
    } else {
        marageinput.style.border = "1px solid green";
    }
});

marageyear.addEventListener("blur", ()=> {
    if (marageyear.value == "") {
        marageyear.style.border = "1px solid red";
    } 
});

marageyear.addEventListener("keyup", () => {

    if (marageyearREXP.test(marageyear.value) == "") {
        marageyear.style.border = "1px solid red";
    } else {
        marageyear.style.border = "1px solid green";
    }
});

maragebutton.addEventListener("submit", (e) => {

    e.preventDefault();


    if (marageinputREXP.test(marageinput.value) == "") 
    {
        marageinput.style.border = "1px solid red";
    } else{
        marageinput.style.border = "1px solid green";
    }

    if (marageyearREXP.test(marageyear.value) == "") 
    {
        marageyear.style.border = "1px solid red";
    } else{
        marageyear.style.border = "1px solid green";
    }

    if (maragender.value == maragender.children[0].value) 
    {
        maragender.style.border = "1px solid red";
    } else{
        maragender.style.border = "1px solid green";
        marrageresult.innerHTML = marageCal(marageinput.value,marageyear.value)
    }

})

maragebutton.addEventListener("click", () =>{

    if (marageinputREXP.test(marageinput.value) === false || marageyearREXP.test(marageyear.value) == false || maragender.value == maragender.children[0].value ) {
        marrageresult.innerHTML = `<p class="alert alert-danger"> plz right Data</p> `

    } else {
        marrageresult.innerHTML = `<p class="alert alert-success"> Data Stable</p> `
    }
})


