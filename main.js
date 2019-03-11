function main() {
    gameArea.start();
}

function updateGame() {
    gameArea.clear();
    wordTargetList.moveList();
    wordTargetList.check();
    wordTargetList.draw();
}

var gameArea = {
    canvas: document.getElementById("canvas"),
    textbox: document.getElementById("textbox"),
    start: function() {
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGame(), 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
    }
}

function wordTarget(word, x, y, width, height, color) {
    this.word = word,
    this.x = x,
    this.y = y,
    this.width = width,
    this.height = height,
    this.color = color,
    this.update = function() {
        context = gameArea.context;
        context.fillStyle = color
    }
}

var wordTargetList = {
    components: [],
    moveList: function() {
        for(i = 0; i < components.length; i++) {
            components[i].x -= 1;
        }
    },
    check: function() {
        for(i = 0; i < components.length; i++) {
            if(components[i].x < 0) {
                gameArea.stop();
                break;
            }
        }
    },
    draw: function() {
        for(i = 0; i < components.length; i++){
        }
    }
}
