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

    } else if ( age > 10 && age <=22) {
        return{
            name: "Jobok",
            status : "success" 
        }
    } else if ( age > 22 & age <= 35) {
        return{
            name: "Young",
            status : "info" 
        }
    } else if (age >35 && age <= 60 ) {
        return{
            name: "Old" ,
            status : "warning" 
        }
    } else if ( age > 60 && age <= 100) {
        return{
            name: "Very-Old",
            status : "danger"  
        }
    } else{
        return{
            name: "Bhoot / Jin",
            status : "dark"  
        }
    }

}