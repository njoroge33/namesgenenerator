function getDay(){
    var name =  document.getElementById("name").value;
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    var year = document.getElementById("year").value;
    var century = year.slice(0, 2);
    var years = year.slice(2, 4);

    if (month === "" || date === "" || year === "" || name === ""){
        alert("Cofirm that you have entered the correct information!")
    }else{
        var day = Math.floor((((century/4)-2*century-1)+((5*years/4))+((26*(month+1)/10)) + date) % 7);
        return day
    }
}