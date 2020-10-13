$(".saveBtn").on("click", function () {

    setDataInLocalStorage();


    /*The siblings() method returns all sibling elements of the selected element.
Sibling elements are elements that share the same parent.
The DOM tree: This method traverse forward and backwards along siblings of DOM elements. */

    /* Syntax = $(selector).siblings(filter) */
    /*filter	Optional. Specifies a selector expression to narrow down the search for sibling elements */


    var text = $(this).siblings(".info").val();


    /* The .parents() and .parent() methods are similar, except that the latter only travels a single level up the DOM tree.
    Also, $( "html" ).parent() method returns a set containing document whereas $( "html" ).parents() returns an empty set. */

    /* The DOM tree: This method only traverse a single level up the DOM tree. 
    To traverse all the way up to the document's root element (to return grandparents or other ancestors), use the parents() or the parentsUntil() method.  */

    /*parents() Begins with the parent element
    Travels up the DOM tree and returns all ancestors that matches the passed expression
    The returned jQuery object contains zero or more than one element */

    /*parent().parent() is definitely faster than parents('ul') as the latter will search all the way up to the <html> tag looking for <ul> tags and return all of them. 
    closest('ul') is a good choice because it stops searching after the first occurrence, but closest also includes the element it is being called on. 
    Perhaps $(this).parent().closest('ul') is the best choice, unless the $(this) will never be a <ul> */



    /* $(selector).parent(filter)  */
    /* filter Optional. Specifies a selector expression to narrow down the parent search */



    // $(this).parent().find('input:first').val(selectedOptionValue); //
    // $(this).closest('ul').attr('id');


    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

recordData();


/* You can see what I'm talking about to a greater depth by using a javascript debugging console (chrome has one by default, and you can use Firebug on Firefox). 
Try your original function based approach again and add a console.log($(this)); statement. You should see it printing out a DOMWindow object. 
Now put the same log statement in the click function and you'll see that jQuery has given you a $(this) representing what you expected it to be. */

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
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this */
/* https://www.w3schools.com/jquery/traversing_parent.asp */

/* https://stackoverflow.com/questions/10260667/jquery-get-parent-parent-id */

/* https://www.codota.com/code/javascript/functions/jquery/JQuery/siblings */

// EXAMPLE //

/* function appendField(){

    var selValue =  $(".ms-formbody select").val();
    $(".ms-formbody select").parents().children().find("input:text").val(selValue);
    $(".ms-formbody a").prev().prev().val(selValue);


    return false;
}

*/