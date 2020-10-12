// set hour from moment
function timeUpdate() {
    const momentTime = setTime();
    const dateFormat = "dddd, MMMM, DD";

    $(momentTime).html(`${moment().format(dateFormat)}
    ${moment().format("LTS")}`);

    function setTime() {
        const momentTime = "#presentTime";
        return momentTime;
    }
}

function timeFunction() {
    timeUpdate();
    setInterval(timeUpdate, 1000);
}
timeFunction()
