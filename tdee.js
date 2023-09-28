
var result;
var MaintenanceCalories;
function Calculate() {

    var gender = document.querySelector('input[name="gender"]:checked').value
        ;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var age = parseFloat(document.getElementById("age").value);
    var activitylevel = document.getElementById("activitylevel").value;
    //var MaintenanceCalories = 0;

    console.log(gender)
    if (gender == 1)
    //English-BMR = 66 + ( 6.23 x weight in pounds ) + ( 12.7 x height in inches ) - ( 6.8 x age in year )
    //Metric-BMR = 66 + ( 13.7 x weight in kilos ) + ( 5 x height in cm ) - ( 6.8 x age in years )
    {
        var val1 = 13.7 * weight;
        var val2 = 5 * height;
        var val3 = 6.8 * age;
        result = (66 + val1 + val2 - val3) * 0.85;
        var val4 = activitylevel;
    }

    else if (gender == 2)
    //English-Women: BMR = 655 + ( 4.35 x weight in pounds ) + ( 4.7 x height in inches ) - ( 4.7 x age in years)
    //Women: BMR = 655 + ( 9.6 x weight in kilos ) + ( 1.8 x height in cm ) - ( 4.7 x age in years )
    {
        var val1 = 9.6 * weight;
        var val2 = 1.8 * height;
        var val3 = 4.7 * age;
        result = (655 + val1 + val2 - val3) * 0.85;
        var val4 = activitylevel;
    }
        

    switch (val4) {
        case "l":
            MaintenanceCalories = result * 1.2;
            break;

        case "lm":
            MaintenanceCalories = result * 1.375;
            break;

        case "m":
            MaintenanceCalories = result * 1.55;
            break;

        case "mh":
            MaintenanceCalories = result * 1.725;
            break;

        case "h":
            MaintenanceCalories = result * 1.9;
            break;

        default: "m";
    }
    if (isNaN(result)) {
        document.getElementById('lblResult11').innerText = "請輸入完整資訊";
        document.getElementById('lblResult12').innerText = "請輸入完整資訊";
    } else {
        document.getElementById('lblResult11').innerText = result.toFixed(2);
        document.getElementById('lblResult12').innerText = MaintenanceCalories.toFixed(2);

    }
}
