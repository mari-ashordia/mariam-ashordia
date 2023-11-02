// function registrationHandler(){
//     let firstname = document.getElementById("firstname").value;
//     let surname = document.getElementById("surname").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let date = document.getElementById("date").value;
//     let month = document.getElementById("month").value;
//     let year = document.getElementById("year").value;
//     let gender = document.getElementById("gender").checked;

//     let user = {
//         firstname,
//         surname,
//         email,
//         password,
//         date,
//         month,
//         year,
//         gender
//     };

//     let userArr = [];

//     let dataFromDatabase = localStorage.getItem("usersData");
//     dataFromDatabase = JSON.parse(dataFromDatabase);

//     if(dataFromDatabase === null || dataFromDatabase.length === 0){
//         localStorage.setItem("usersData",JSON.stringify(userArr.push(user)));
//     }
//     else{
//         localStorage.setItem("usersData",JSON.stringify(dataFromDatabase.push(user)));
//     }

// }


function registrationHandler(){
    let firstname = document.getElementById("firstname").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let date = document.getElementById("date").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    // let gender = document.getElementByName("gender").value;


    let userDatabase = localStorage.getItem('users');

    if( userDatabase === null || userDatabase.length === 0){
        let usersArray = [];
        usersArray.push(
            {
                firstname,
                surname,
                email,
                password,
                date,
                month,
                year
                
            }
        );
        localStorage.setItem('users',JSON.stringify(usersArray));
    }
    if(userDatabase.length > 0) {
        userDatabase = JSON.parse(userDatabase);
        userDatabase.push(
            {
                firstname,
                surname,
                email,
                password,
                date,
                month,
                year
            
            }
        );
        
        localStorage.setItem('users',JSON.stringify(userDatabase));
    }

    
 }

// function registrationHandler(){
//         console.log("hello");
//         let firstname = document.getElementById("firstname").value;
//         let surname = document.getElementById("surname").value;
//         let email = document.getElementById("email").value;
//         let password = document.getElementById("password").value;
//         let date = document.getElementById("date").value;
//         let month = document.getElementById("month").value;
//         let year = document.getElementById("year").value;
//         let gender = document.getElementByName("gender").checked;
        
    
//         let userDatabase = localStorage.getItem('users');
//         userDatabase = JSON.parse(userDatabase);

//         let user = {
//             firstname,
//             surname,
//             email,
//             password,
//             date,
//             month,
//             year,
//             gender
//         };

//         if(userDatabase === null || userDatabase.length === 0){
//             localStorage.setItem('users', JSON.stringify([user]));
//         }
//         else {
//             userDatabase.push(user);
//             localStorage.setItem('users', JSON.stringify(userDatabase));
//         }
        
// }    

// function registrationHandler() {
//     let firstname = document.getElementById("firstname").value;
//     let surname = document.getElementById("surname").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let date = document.getElementById("date").value;
//     let month = document.getElementById("month").value;
//     let year = document.getElementById("year").value;
//     let gender = document.getElementByName("gender").checked;

//     let oldUsersData = localStorage.getItem('usersData');
//     oldUsersData = JSON.parse(oldUsersData);

//     let user = {
//         firstname: firstname,
//         surname: surname,
//         email: email,
//         password: password,
//         date:date,
//         month:month,
//         year:year,
//         gender:gender
//     };

//     // აქ დავამატოთ ლოგიკა რომელიც შეამოწმებს არის თუ არა მომხმარებელი უკვე რეგისტრირებული
//     // შეყვანილი ემაილითა თუ პაროლით მინიშნება: გამოიყენეთ ციკლური ოპერაციები. მაგ. for ციკლი.

//     if (oldUsersData === null) {
//         localStorage.setItem('usersData', JSON.stringify([user]));
//     } else {
//         oldUsersData.push(user);
//         localStorage.setItem('usersData', JSON.stringify(oldUsersData));
//     }

    

// }