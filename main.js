var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;
    textboxHeight = document.getElementById("textbox").offsetHeight;

canvas.height -= textboxHeight;

var targetList = {};

function target(word, xPos, yPos) {
    this.word = word;
    this.xPos = xPos;
    this.yPos = yPos;
}
var temp target("test", 5, 5);
targetList["test"] = temp;
alert(targetList["test"]);

delete targetList.test;
alert(targetList["test"]);
