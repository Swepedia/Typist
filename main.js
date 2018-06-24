var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;
    textboxHeight = document.getElementById("textbox").offsetHeight;

canvas.height -= textboxHeight;
