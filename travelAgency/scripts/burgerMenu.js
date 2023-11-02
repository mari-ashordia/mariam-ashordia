function showNav(){
    const navLinks = document.getElementsByClassName("navLinks")[0];
    if(navLinks.style.display === "block"){
        navLinks.style.display = "none";
    }
    else{
        navLinks.style.display = "block";
    }
}