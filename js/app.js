// Enemies our player must avoid
class Enemy {
    constructor(x, y, speed = 1000){
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        // The x and y for position 
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.x += dt * this.speed;

        //redistribute enemy position if it out of canvas
        if(this.x > 600){
            this.distributeEnemy();
        }
        //find distance between enemy and player to handle Collision
        if(Math.sqrt(Math.pow(player.x - this.x,2) + Math.pow(player.y - this.y,2)) < 50)
            this.collision();
    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    collision() {
        counter.textContent = '0';
        flag = true;
        player.reset();
    }

    // Distribute randomly for enemy with its speed
    distributeEnemy(){
        this.x = -200; 
        this.y = y_axis[Math.floor(Math.random() * y_axis.length)];
        this.speed = speedEnemy[Math.floor(Math.random() * y_axis.length)];
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor(x = 0, y = 400){
        this.sprite = 'images/char-boy.png';
        this.x = x;
        this.y = y;
        this.speed;
    }

    update() {
        
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(direction) {
        switch (direction) {
          case 'left':
            if(this.x > 0){
              if(!this.isColloision(PosistionsX[PosistionsX.indexOf(this.x)-1], this.y))
                this.x -= 100;
            }
            break;
          case 'right':
            if(this.x + 100 < 500){
              if(!this.isColloision(PosistionsX[PosistionsX.indexOf(this.x)+1], this.y))
                this.x += 100;
            }
            break;
          case 'up':
            if(this.y > 0){
              if(!this.isColloision(this.x, PosistionsY[PosistionsY.indexOf(this.y)-1])){
                if(this.y === 60){
                  inceramentScore();
                  this.reset();
                }else{
                    this.y -= 85; 
                }
              }
            }
            break;
          case 'down':
            if(this.y + 85 < 465)
              if(!this.isColloision(this.x, PosistionsY[PosistionsY.indexOf(this.y)+1]))
                this.y  += 85; 
            break;
        }
    }
    
    isColloision(x, y) {
        return Math.sqrt(Math.pow(x - rock.x,2) + Math.pow(y - rock.y,2)) < 50;
    }

    // reset inital player's posistion
    reset() {
        this.x = 200;
        this.y = 400;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let allEnemies = [];
let x_axis = [-100,-200,-300,-400,-500];
let y_axis = [60,140,220];
let speedEnemy = [200,300,400,500,600];
let createEnemies = (function() {
    let randomX = Math.floor(Math.random() * x_axis.length);
    let randomY = Math.floor(Math.random() * y_axis.length);
    let randomSpeed = Math.floor(Math.random() * speedEnemy.length);

    for (let i = 0; i < 5; i++) {
        allEnemies[i] = new Enemy(x_axis[randomX], y_axis[randomY], speedEnemy[randomSpeed]);
    }
})();

let PosistionsX = [0,100,200,300,400];
let PosistionsY = [60,145,230,315,400];
let player = new Player();

let topScore = 1;
// add score to the DOM
(function createScore() {
    let score = document.createElement('div');
    score.className = 'score';
    score.textContent = 'Score';
    let counter = document.createElement('div');
      counter.className = 'counter';
      counter.textContent = '0';
    score.appendChild(counter);
    document.body.insertAdjacentElement('afterbegin',score);
  })();
  //set as global to prevent iterate code
  let counter = document.querySelector('.counter');
  let flag = false;
  //increment Score on the DOM
  function inceramentScore() {
    counter.textContent = Number(counter.textContent) + 1;
    if(Number(counter.textContent) > topScore){
        topScore = Number(counter.textContent);
        if(flag){
            flag = false;
            win();
        }
    }
  }

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// addtional functionality

//load all resources
Resources.load([
    'images/Selector.png',
    'images/Gem Blue.png',
    'images/Gem Green.png',
    'images/Gem Orange.png',
    'images/Rock.png',
    'images/char-cat-girl.png',
    'images/char-horn-girl.png',
    'images/char-pink-girl.png',
    'images/char-princess-girl.png'
]);

class Resource {
    constructor(sprite, x, y){
        this.sprite = sprite;
        this.x = x;
        this.y = y;
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    update() {
        this.sprite = '';
    }
}
// create resources
let rock = new Resource('images/Rock.png', PosistionsX[Math.floor(Math.random()* PosistionsX.length)], PosistionsY[Math.floor(Math.random()*PosistionsY.length)]);

function win() {
    ctx.drawImage(Resources.get('images/Selector.png'), player.x, player.y);
    setTimeout(function(){

     }, 3000);
}

// Select the image for player character
document.addEventListener('keypress', function(e) {

    if(e.keyCode >= 49 && e.keyCode <= 53){// to prevent other unicode number
      let charIMG = {
          49: 'images/char-boy.png',
          50: 'images/char-cat-girl.png',
          51: 'images/char-horn-girl.png',
          52: 'images/char-pink-girl.png',
          53: 'images/char-princess-girl.png'
        };
      player.sprite = charIMG[e.keyCode];
    }
  });

//add popup when player is win
function win() {
    swal({
            title: "You Are The Top 🌟",
            text: "With: " + topScore +" score",
            icon: "success",
      });
  }