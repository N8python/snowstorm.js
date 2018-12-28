$(init)
function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min))
}
var frame = 0;
class Snowflake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    $("body").append(`<svg style="position: absolute; top: ${this.y}px; left: ${this.x}px;" >
      <circle cx="5" cy="5" r="5" fill="white"/>
      </svg>`)
    this.y += 3;
  }
}
snowflakes = []

function spawnSnowflakes(){
  if (frame % 25 === 0){
    snowflakes.push(new Snowflake(randInt(0, window.innerWidth-50), 0))
  }
}
function init() {
  var snowstorm = setInterval(() => {
    spawnSnowflakes();
    $('svg').remove();
    snowflakes.forEach(snowflake => {
      snowflake.draw();
    })
    for(var i = 0; i < snowflakes.length; i++){
      if(snowflakes[i].y>$("body").height()-10){
        snowflakes.splice(i, 1)
      }
    }
    frame+=1;
    console.log(frame);
  }, 5)
}
