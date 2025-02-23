function compute() {
    //Parse principal amount...this can be float
    var principal = parseFloat(document.getElementById("principal").value);
    //Parse rate of interest...this can be float
    var rate = parseFloat(document.getElementById("rate").value);
    //Parse number of years
    var years = document.getElementById("years").value;

    //Alert if principal is less than zero or if principal is not a number
    if (Number.isNaN(principal) || (principal <= 0)) {
        alert("Enter a positive number in principal input and retry.");
        //put the focus back on principal input
        setTimeout(function(){
                document.getElementById("principal").focus();
            }, 1);
        return false;
    }

    //Calculate the interest at the end of the term based on interest rate and number of years.
    var interest = principal * years * rate / 100;
    //Calcualate maturity year for display.
    var year = new Date().getFullYear() + parseInt(years);

    //Display the result
    document.getElementById("result").innerHTML = "If you deposit <span class = 'highlight' >"  +
        principal + "</span>,\<br\> at an interest rate of" + 
        "<span class = 'highlight' > " + rate + "%</span>.\<br\>You will receive an amount of " +  
        "<span class = 'highlight' > " + interest + "</span>,\<br\>in the year <span class='highlight'>" +year + "</span>" ;

}

// function updateYears() {
//     var years = document.getElementById("years").value;
//     var year = new Date().getFullYear() + parseInt(years);
//     return year;
// }

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval + "%";
}