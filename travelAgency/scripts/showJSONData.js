async function showData(){
    const data = await fetch("./dataAboutGeorgia.json");
    const modifiedData = await data.json();

    let info = document.getElementsByClassName("infoAboutGeorgia")[0];
    info.style.backgroundColor = "#D1CDD7";
    const ethnicGroups = Object.entries(modifiedData.ethnicGroups);
    if ( info.innerHTML === "" || info.style.display === "none")
    {
        if(info.innerHTML === ""){
            info.innerHTML += `
                <h1 style = "margin-bottom:30px;">${modifiedData.country}</h1> 
                <p>The capital of ${modifiedData.country} is ${modifiedData.capital}.</p>
                <p>The population of ${modifiedData.country} is ${modifiedData.population}.</p>
                <p>The area of ${modifiedData.country} is ${modifiedData.area}.</p>
                <p>Officail language of ${modifiedData.country} is ${modifiedData.officialLanguage}.</p>
                <p>Ethnic groups of ${modifiedData.country} include ${ethnicGroups[0][0]} making ${ethnicGroups[0][1]} of the population, ${ethnicGroups[1][0]} making ${ethnicGroups[1][1]} of population, 
                ${ethnicGroups[2][0]} making ${ethnicGroups[2][1]} of the population, ${ethnicGroups[3][0]} making ${ethnicGroups[3][1]} of the population and ${ethnicGroups[4][0]}
                nationalitities making ${ethnicGroups[4][1]} of the population.</p>
                <p>List of the presients of ${modifiedData.country} :</p>
                <ul>
                    <li>${modifiedData.presidents[0].First[0]} managed the country during ${modifiedData.presidents[0].First[1]}</li>
                    <li>${modifiedData.presidents[1].Second[0]} managed the country during ${modifiedData.presidents[1].Second[1]}</li>
                    <li>${modifiedData.presidents[2].Third[0]} managed the country during ${modifiedData.presidents[2].Third[1]}</li>
                    <li>${modifiedData.presidents[3].Fourth[0]} managed the country during ${modifiedData.presidents[3].Fourth[1]}</li>
                    <li>${modifiedData.presidents[4].Fifth[0]} managed the country during ${modifiedData.presidents[4].Fifth[1]}</li>
                </ul>
            `
            
            }
        else {
            info.style.display = "block";
        }
        
    }
    else{
        info.style.display = "none";
    }
    


}
