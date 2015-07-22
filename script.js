/**
 * Created by lukedowell on 7/22/15.
 */
$(document).ready(function() {

    //Init button clicked
    $("#init-button").on('click', function(event) {
        //Increment our clicks
        numClicks++;

        //Create another info div
        $(this).parent().append(buildChildDiv());

        //Update our child divs' information
        updateDOM();
    });

    //A change color button is clicked
    $(".content").on('click', '.color-button', function() {
        var $parent = $(this).parent();
        var val = $parent.data("button-toggle");
        if(val == 1) {
            $parent.data("button-toggle", 2);
            $parent.css("background", "red");
        } else {
            $parent.data("button-toggle", 1);
            $parent.css("background", "green");
        }
    });

    //Why are duplicate jquery selectors bad?
    //A remove button is clicked
    $(".content").on('click', '.remove-button', function() {
        $(this).parent().remove();
    });
});

var numClicks = 0; //The number of times our button has been clicked

/**
 * Updates our DOM
 */
function updateDOM() {
    //Update our num clicks on our children
    $(".click-counter").text(numClicks);
}

/**
 * Builds our child div and places a p tag and two buttons inside
 * of it
 */
function buildChildDiv() {

    //Build our div
    var $div = $("<div/>", {
        class: "info-container",
        'data-button-toggle': "1"
    });
    var $clickCounter = $("<span/>", {
        class: "click-counter",
        text: "0"
    });
    var $pEl = $("<p/>", {
       text: "Here are the number of clicks: "
    });
    var $changeColorButton = $("<button/>", {
        class: "color-button",
        text: "Change color"
    });
    var $removeButton = $("<button/>", {
        class: "remove-button",
        text: "Remove"
    });

    //Stick em together
    $pEl.append($clickCounter);
    $div.append($pEl);
    $div.append($changeColorButton);
    $div.append($removeButton);

    return $div;
}