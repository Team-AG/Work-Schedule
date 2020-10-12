$(".saveBtn").on("click", function () {

    setDataInLocalStorage();
    var text = $(this).siblings(".info").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

recordData();


function setDataInLocalStorage() {
    console.log(this);
}

function recordData() {
    $("#9 .info").val(localStorage.getItem("9"));
    $("#10 .info").val(localStorage.getItem("10"));
    $("#11 .info").val(localStorage.getItem("11"));
    $("#12 .info").val(localStorage.getItem("12"));
    $("#13 .info").val(localStorage.getItem("13"));
    $("#14 .info").val(localStorage.getItem("14"));
    $("#15 .info").val(localStorage.getItem("15"));
    $("#16 .info").val(localStorage.getItem("16"));
    $("#17 .info").val(localStorage.getItem("17"));
}

/* this allows to recorddata within local storage and reloads opoun refreshing page */