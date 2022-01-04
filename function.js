function ageCal(name, year) {
    let date = new Date();
    let age = date.getFullYear() - year;

    let statusCheck = ageCalStatus(age)
    return ` <p class = "alert-${statusCheck.status} p-4"> Hi ${name} you are ${age} years Old & You are ${statusCheck.name} </p>`;


}

function ageCalStatus(age) {

    if (age > 0 && age <= 10) {
        return {
            name: "Baby",
            status: "primary"
        }

    } else if (age > 10 && age <= 22) {
        return {
            name: "Jobok",
            status: "success"
        }
    } else if (age > 22 & age <= 35) {
        return {
            name: "Young",
            status: "info"
        }
    } else if (age > 35 && age <= 60) {
        return {
            name: "Old",
            status: "warning"
        }
    } else if (age > 60 && age <= 100) {
        return {
            name: "Very-Old",
            status: "danger"
        }
    } else {
        return {
            name: "Bhoot / Jin",
            status: "dark"
        }
    }

}





// Marage  method


function marageCal(name, year) {
    let date = new Date();
    let age = date.getFullYear() - year;
    let marageAge = marageGgeCalStatus(age)
    let marage = marageStatus();
    return `  <p class = "alert-${marageAge.status} p-4"> Hi ${name} Your Gender ${maragender.value} you are ${age} years Old Apnar  ${marageAge.name} </p>`


}


function marageGgeCalStatus(age) {

    
    if (age > 0 && age <= 18) {
        return {
            name: "Ary Apni Tho Basca",
            status: "primary"
        }

    } else if (age > 18 && age <= 30) {
        return {
            name: "Biyar Boyos Hoicay Biya koran",
            status: "success"
        }
    } else if (age > 30 & age <= 40) {
        return {
            name: "Kovy R biya korban Boyos Ses Holy Naki",
            status: "info"
        }
    } else if (age > 40 && age <= 60) {
        return {
            name: "Ai boyos a Biya koira Ki korban ",
            status: "warning"
        }
    } else {
        return {
            name: "apni R biya kora lagbo nah ",
            status: "dark"
        }
    }

}

function marageStatus() {

 maragender.value === maragender.children[1]== "Male"
    
maragender.value == maragender.children[1]=== "Female"
        
    
}

