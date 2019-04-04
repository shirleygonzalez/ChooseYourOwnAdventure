/* global $ */


$(document).ready(function() {
    var firstLevel = game.levels.start;
    renderLevel(firstLevel);

    // When user clicks a choice, go to the next level
    $("body").on("click", "#choices button", function() {
        var nextLevel = $(this).attr("data-next-level");
        $(".intro").animateCss("fadeOut", function() {
            renderLevel(game.levels[nextLevel]);
            $(".intro").removeClass("fadeOut");
            $(".intro").addClass("fadeIn");
        });
    });
});

function renderLevel(level) {
    $("#prompt").text(level.message);
    $("#choices").empty();

    var choices = level.choices;
    if (choices) {
        for (var i = 0; i < choices.length; i++) {
            var choice = choices[i];
            $("#choices").append("<button class='btn btn-outline-secondary' data-next-level='" + choice.nextLevel + "'>" + choice.text + "</button>");
        }
    }

    setMusic(level);
    setImage(level);
    setColor(level);
}

var currentMusic = "";


//what makes the music play
function setMusic(level) {
    var music = level.music || game.music || "";

    if (currentMusic !== music) {
        currentMusic = music;
        $("#music").attr("src", "./music/" + currentMusic);
    }
}

//if an image was chosen for the background, this is what would make it be displayed
function setImage(level) {
    var responseImage = level.responseImage;
    var image = level.background_image || game.background_image || "";
    $("#background-image").css("background-image", "url(./img/" + image + ")");
    if(responseImage){
    $("#responseImage").css("background-image", "url(" + responseImage + ")");
}else{
    $("#responseImage").css("background-image","");
}
    

}

var currentColor = "";
function setColor(level) {
    var color = level.color;
    $(".intro").css("background", "linear-gradient(to bottom," + " " + color +  " " + "0%, #ffffff 100%");

}

$.fn.extend({
    animateCss: function(animationName, callback) {
        var animationEnd = (function(el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function() {
            if (typeof callback === 'function') callback();
        });

        return this;
    },
});