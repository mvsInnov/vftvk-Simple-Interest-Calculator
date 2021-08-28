function compute() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = document.getElementById("years").value;

    var amount = principal + (principal * years * rate / 100);
    var year = new Date().getFullYear() + parseInt(years);
    // interest += principal;

    document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML = "If you deposit " + principal + ",\<br\> at an interest rate of " +
        rate + "%.\<br\>You will receive an amount of " + amount + ",\<br\>in the year " + year;

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