var confusedimg = ["https://media.boingboing.net/wp-content/uploads/2016/11/bcf.png"];

var depressedimg = ["https://i.kym-cdn.com/photos/images/original/001/388/462/3b4.jpg"];
var anxiousimg = ["https://media0ch-a.akamaihd.net/72/49/a9ccd84185fb9bb946ededbc79a35e6b.jpg"];
var exhaustedimg = ["https://www.lovequotesmessages.com/wp-content/uploads/2018/04/sleeping_monkey_exhausted_meme1.jpg"];


function bkgcolor(bkg) {
    $("body").css("background-color", bkg);
}

function textcolor(color) {
    $("body").css("color", color);
}

function showImg(image) {
    $(".pictures").append("<img src=" + image + ">");
}

function confusedmood() {
    bkgcolor("#A5797A");
    textcolor("#D69DF8");
    // showImg(images[0]);
    // showImg(images[1]);
    // showImg(images[2]);

    confusedimg.forEach(function(image) {
        showImg(image);
    });

}

function depressedmood() {
    bkgcolor("#555555");
    textcolor("black");
    
    depressedimg.forEach(function(image) {
        showImg(image);
    });
}

function anxiousmood() {
    bkgcolor("#E6C74D");
    textcolor("#E7A954");
    anxiousimg.forEach(function(image) {
        showImg(image);
    });
}

function exhaustedmood() {
    bkgcolor("#A5A5FF");
    textcolor("#468499");
    exhaustedimg.forEach(function(image) {
        showImg(image);
    });
}

$("button").click(function() {
    var mood = $(".moods").val();

    if (mood === "Confused") {
        confusedmood();
    } else if (mood === "Depressed") {
        depressedmood();
    } else if (mood === "Anxious") {
        anxiousmood();
    } else if (mood === "Exhausted") {
        exhaustedmood();
    } else {
        $(".else").text("PLEASE ENTER ONE OF THE FOUR MOODS");
    }
});