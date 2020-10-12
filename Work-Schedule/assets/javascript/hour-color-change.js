// color change based on hours of the day
var dayTimeHours = new Date();
var hours = dayTimeHours.getHours();

function colorChange() {

    for (hour = 9; hour < 23; hour++) {
        var timeOfDay = $("#" + hour);
        console.log($(`#${hour}`))

        colorChangeBaseOnHours();
        $(`#${hour}`).val(localStorage.getItem("" + hour));
    }

    function colorChangeBaseOnHours() {
        if (hour == hours) {
            timeOfDay.addClass("present");
        } else if (hour < hours) {
            timeOfDay.addClass("past");
        } else {
            timeOfDay.addClass("future");
        }
    }
}
colorChange();