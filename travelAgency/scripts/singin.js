const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomString(length){
    let str = "";
    const length = characters.length;

    for(let i = 0; i < length; i++){
        str += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return str;
}


function signinHandler(){
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;
    let rememberChecked = document.getElementById("rememberMe").checked;
    

    let dataFromDatabase = localStorage.getItem("usersData");
    dataFromDatabase = JSON.parse(dataFromDatabase);

    for(let userData of dataFromDatabase){
        if(userData.email === userEmail && userData.password === userPassword){
            if(rememberChecked){
                let timeNow = new Date();
                timeNow.setTime(timeNow.getTime() + 7 * 24 * 60 * 60 * 1000);
                let time = timeNow.toUTCString();
                let value = generateRandomString(36);
                document.cookie =  `sessionToken=${value};expires=${time};path=/`;
                userData.sessionToken = value;
            }
            else{
                let value = generateRandomString(36);
                userData.sessionToken = value;
                sessionStorage.setItem("sessionToken",value);
                        
            }
        }
    }
    localStorage.setItem("usersData",JSON.stringify(dataFromDatabase));

}


