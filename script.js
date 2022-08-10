var currentDate = moment();
$('#currentDay').text(currentDate.format("MMM DD YYYY"))


for (var i = 9; i < 18; i++) {
    var hourDisplay = ''
    if (i < 12) {
        hourDisplay = i + "am"
    } else if (i === 12) {
        hourDisplay = i + "pm"
    } else {
        hourDisplay = i - 12 + "pm"
    }
    var color = ''
    var momentTime = moment().hours();
    if (i < momentTime) {
        color = "past"
    } else if (i === momentTime) {
        color = "present"
    } else {
        color = 'future'
    }
    console.log(momentTime);
    var rowDiv = $("<div>").addClass("row time-block").attr("id", i)
    var hourDiv = $("<div>").addClass("col-2 hour").text(hourDisplay)
    var textDiv = $("<textarea>").addClass("col-8 description " + color).val(localStorage.getItem(i))
    var icon = $('<i>').addClass("fas fa-share-square")
    var button = $("<button>").addClass("col-2 saveBtn").append(icon).attr("id", i).on("click", function(){
    var hourKey = $(this).attr("id");
    var activity = $(this).siblings(".description").val().trim()
    localStorage.setItem(hourKey, activity);
    console.log(this)
    })


    $(".container").append(rowDiv.append(hourDiv, textDiv, button));
}





// moment($("#date_val").val()).format('dd-mm-yyyy')