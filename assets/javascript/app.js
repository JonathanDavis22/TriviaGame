$(document).ready(function(){

    $("#submitButton").hide();
    $("#Time").hide();

var questions = [
    {
        question: "What year was the state of Washington founded?",
        answers: ["1891", "1863", "1882", "1889"],
        correctAnswer: "1889",
    },
    {
        question: "What is the state endemic mammal of Washington?",
        answers: ["Olympic squirrel", "Olympic rabbit", "Olympic marmot", "Olympic chipmunk"],
        correctAnswer: "Olympic marmot",
    },
    {
        question: "What is the state gemstone of Washington?",
        answers: ["Amber", "Petrified wood", "Agate", "Opal"],
        correctAnswer: "Petrified wood",
    },
    {
        question: "The largest building by volume in the world is located in Washington State; what is it?",
        answers: ["Microsoft HQ", "Amazon HQ", "Boeing Everett Factory", "Jeff's 'Balls'"],
        correctAnswer: "Boeing Everett Factory",
    },
    {
        question: "What two fruits does Washington State produce more of than any other state in the union?",
        answers: ["Apples and cherries", "Melons and oranges", "Pears and plums", "Blueberries and strawberries"],
        correctAnswer: "Apples and cherries",
    },
    {
        question: "The most rain one place in Washington State ever received was 14.26 inches in 1986: where was it?",
        answers: ["Mt. Baker", "Mt. Rainier", "Mt. Mitchell", "Mt. Si"],
        correctAnswer: "Mt. Si",
    },
    {
        question: "What did Native Americans originally call Olympia?",
        answers: ["The Black Bear Place", "Cougar Country", "Lake of Many Salmon", "Harbor of Hope"],
        correctAnswer: "The Black Bear Place",
    },
    {
        question: "What is the state marine mammal?",
        answers: ["Orca", "Salmonbear", "Narwhal", "Beluga whale"],
        correctAnswer: "Orca",
    },
    {
        question: "How tall is the Space Needle?",
        answers: ["700ft", "450ft", "525ft", "605ft"],
        correctAnswer: "605ft",
    },
    {
        question: "What is the state tree?",
        answers: ["Douglas fir", "Western hemlock", "Sitka spruce", "Pacific Silver fir"],
        correctAnswer: "Western hemlock",
    },
    {
        question: "Mount St. Helen's lost 1,131 feet of elevation, spewed a cubic mile of dust, ash, and debris, and leveled over four billion feet of usable timber in what year?",
        answers: ["1991", "1976", "1983", "1980"],
        correctAnswer: "1980",
    },
    {
        question: "How many National Parks is Washington State home to?",
        answers: ["Three", "Two", "Four", "One"],
        correctAnswer: "Three",
    },
    {
        question: "It is illegal to display a hypnotized person in a store window in which city:",
        answers: ["Seattle", "Tacoma", "Everett", "Tukwila"],
        correctAnswer: "Everett",
    },
    {
        question: "Who was not born in Washington State?",
        answers: ["Jimi Hendrix", "Eddie Vedder", "Bing Crosby", "Kurt Cobain"],
        correctAnswer: "Eddie Vedder",
    },
    {
        question: "The longest floating bridge in the world is:",
        answers: ["Evergreen Point Floating Bridge", "Homer M. Hadley Memorial Bridge", "Lacey V. Murrow Bridge", "The Rainbow Bridge"],
        correctAnswer: "Evergreen Point Floating Bridge",
    },
    {
        question: "Seattle was the first American city to put police on:",
        answers: ["Horses", "Motorcycles", "Bicycles", "Boats"],
        correctAnswer: "Bicycles",
    },
    {
        question: "The world's first ______ opened in Seattle in 1907.",
        answers: ["Airport", "Logging factory", "Gas station", "Rotating restaurant"],
        correctAnswer: "Gas station",
    },
    {
        question: "Operating since 1907, which market is the oldest Farmer's Market in the nation?",
        answers: ["Ballard Farmer's Market", "Pike Place Market", "Queen Anne Farmer's Market", "Seattle Farmer's Market"],
        correctAnswer: "Pike Place Market",
    },
    {
        question: "The nation's first general strike occured in Seattle in the year:",
        answers: ["1919", "1904", "1911", "1899"],
        correctAnswer: "1919",
    },
    {
        question: "Which is the largest man-made island in the nation?",
        answers: ["Blake Island", "Maury Island", "Jetty Island", "Harbor Island"],
        correctAnswer: "Harbor Island",
    },
    {
        question: "Which waterfall plunges the furthest in Washington?",
        answers: ["Comet Falls", "Bridal Veil Falls", "Mazama Falls", "Wallace Falls"],
        correctAnswer: "Bridal Veil Falls",
    },
    {
        question: "Seattle was home to the world's first _____ cart in 1980.",
        answers: ["Pastry", "Wine", "Espresso", "Beer"],
        correctAnswer: "Espresso",
    },
    {
        question: "Seattle has the country's highest percentage of _____",
        answers: ["College grads", "Assassins", "Cat owners", "Breweries"],
        correctAnswer: "College grads",
    },
    {
        question: "Washington has the world's largest ____.",
        answers: ["Light rail line", "Ferry system", "Bicycle lane", "Revolving restaurant"],
        correctAnswer: "Ferry system",
    },
    {
        question: "At low tide there are as many as ____ islands in the Puget Sound",
        answers: ["643", "234", "425", "786"],
        correctAnswer: "786",
    },
]

var correct = 0;
var incorrect = 0;
var count = 180;

var counter;

$("#start").on('click', function() {
    displayQuestions();
    $("#start").remove();
    $("#submitButton").show();
    $("#Time").show();
    timer();
    counter = setInterval(timer,1000);
});

function timer() {
    count = count-1;
    $("#Time").html("Time remaining: " + count);
    if (count <= 0) {
        clearInterval(counter);
        console.log("Time is up!");
        answerChecker();
        displayResults();
    }
}

function displayQuestions() {
    for (i = 0; i < questions.length; i++) {
        $("#playArea").append("<h3>" + questions[i].question + "</h3>");
        for (j = 0; j < questions[i].answers.length; j++) {
        $("#playArea").append(`<input type="radio" name="question-${i}" value="${questions[i].answers[j]}"> ${questions[i].answers[j]} <br></br>`)
        }
    }
}

function answerChecker() {
    for (i = 0; i < questions.length; i++) {
    $.each($(`input[name='question-${i}']:checked`), function(){
        if ($(this).val() === questions[i].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        };
    });
};
};

function displayResults() {
    if (zap = true) {
    clearInterval(counter);
    $("#Time").remove();
    $("#playArea" && "#Time").empty();
    $("#submitButton").empty();
    $("#playArea").html("<p>" + "You got " + correct + " correct!" + "</p>" + "<p>" 
    + "You got " + incorrect + " incorrect." + "</p>");
    }
};

$(".btn").click(function(zap) {
    answerChecker();
    displayResults();
});

answerChecker();

});