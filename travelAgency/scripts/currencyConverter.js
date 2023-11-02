async function convert(){
    let inputNum = document.getElementsByClassName("inputCurrency")[0].value;
    let resultNum = document.getElementsByClassName("inputCurrency")[1];

    let fromCurrency = document.getElementsByClassName("currencyTypes")[0].value;
    let toCurrency = document.getElementsByClassName("currencyTypes")[1].value;

    let currencyData = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json");
    currencyData = await currencyData.json();

    let gel = currencyData.eur.gel;
    let usd = currencyData.eur.usd;
    let gbp = currencyData.eur.gbp;
    let eur = currencyData.eur.eur;

    if(fromCurrency === "euro" && toCurrency === "euro"){
        resultNum.value  = inputNum;
    }
    if(fromCurrency === "euro" && toCurrency === "dollar"){
        resultNum.value  = inputNum * usd;
    }
    if(fromCurrency === "euro" && toCurrency === "lari"){
        resultNum.value  = inputNum * gel;
    }
    if(fromCurrency === "euro" && toCurrency === "pound"){
        resultNum.value  = inputNum * gbp;
    }






    if(fromCurrency === "dollar" && toCurrency === "dollar"){
        resultNum.value  = inputNum;
    }
    if(fromCurrency === "dollar" && toCurrency === "euro"){
        resultNum.value  = inputNum / usd;
    }
    if(fromCurrency === "dollar" && toCurrency === "lari"){
        resultNum.value  = (inputNum * gel)/usd;
    }
    if(fromCurrency === "dollar" && toCurrency === "pound"){
        resultNum.value  = (inputNum * gbp)/usd;
    }





    if(fromCurrency === "lari" && toCurrency === "dollar"){
        resultNum.value  = (inputNum * usd) / gel;
    }
    if(fromCurrency === "lari" && toCurrency === "euro"){
        resultNum.value  = (inputNum * eur) / gel;
    }
    if(fromCurrency === "lari" && toCurrency === "lari"){
        resultNum.value  = inputNum;
    }
    if(fromCurrency === "lari" && toCurrency === "pound"){
        resultNum.value  = (inputNum * gbp)/ gel;
    }




    if(fromCurrency === "pound" && toCurrency === "dollar"){
        resultNum.value  = (inputNum * usd) / gbp;
    }
    if(fromCurrency === "pound" && toCurrency === "euro"){
        resultNum.value  = (inputNum * eur) / gbp;
    }
    if(fromCurrency === "pound" && toCurrency === "lari"){
        resultNum.value  = (inputNum * gel) / gbp;
    }
    if(fromCurrency === "pound" && toCurrency === "pound"){
        resultNum.value  = inputNum;
    }
}