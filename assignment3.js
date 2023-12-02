const employee1 = {
    Name: "John",
    LastName: "Smith",
    Age: 26,
    list_of_companies_the_person_worked:["Pepsi","Apple","Motorola","Sharp","Hydro"]
}

const employee2 = {
    Name: "Piter",
    LastName: "Makarty",
    Age: 56,
    list_of_companies_the_person_worked:["Energy","Hydro","Lego","Subary","Tayota","Sony"]
}
function print_companies_name(name){
    for (let index = 0; index < name.list_of_companies_the_person_worked.length; index++) {
        console.log(name.list_of_companies_the_person_worked[index]);        
    }
}

function compareEmployees(employee1, employee2) {
    if (employee1.list_of_companies_the_person_worked.length > employee2.list_of_companies_the_person_worked.length) {
        console.log("Employee 1 ",employee1.Name," has worked at more companies");
        print_companies_name(employee1);
    } if 
    (employee1.list_of_companies_the_person_worked.length == employee2.list_of_companies_the_person_worked.length) {
        console.log("Employee 1 ",employee1.Name, "has same number of companies as emploee 2 ",employee2.Name);
    }
    else {
        console.log("Employee 2 ",employee1.Name," has worked at more companies");
        print_companies_name(employee1);
    }

    }
    compareEmployees(employee1, employee2);
