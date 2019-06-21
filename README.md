<h1 align="center">Welcome to Classic Arcade Game 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> Udacity Front-end project 

## to run a game

download/clone project then open the file [index.html](index.html) in your browser.


## Play
open site [Classic Arcade Game](https://donatluffy.github.io/ClassicArcadeGame/) and have fun !

👤 **Mesh3ludacity**

## functionalities

- _load character images to Resources._
- _You have option to change character of Player by press numbers the following:_
- [1] to select `char-boy.png` character.
- [2] to select `char-cat-girl.png` character.
- [3] to select `char-horn-girl.png` character.
- [4] to select `char-pink-girl.png` character.
- [5] to select `char-princess-girl.png` character.

- _add element for set Games's Score._
- _increment Game's Score after reach at the water._
- _handle Collision of Player with Enemies and Rock by using Euclidean distance._
- _add popup when player reach the top score_


## Class Enemy

* we have four properties of Enemy:
-  *sprite* : image of Enemy,
-  *x* : position X of Enemy,
-  *y* : position Y of Enemy,
-  *speed* : speed of Enemy,

* Methods:-

- **_update()_**: update position of x by multiply dt with speed and adding to x, check if enemy encroach canvas
then call **_randomDistribution()_**, and find _Euclidean distance_ between Enemy and Player < 50 then call
**_handleCollision()_** to reset Player and Score.

- **_render()_**: render the Enemies on canvas as given.

- **_collision()_**: reset the counter on the DOM and Player's position.

- **distributeEnemy()_**: Distribute randomly for Enemy with its speed.


## Class Player

* we have three properties of Player:
-  *sprite* : image of Player,
-  *x* : position X of Player,
-  *y* : position Y of Player,

* Methods:-
- **_update()_**: Nothing to do.

- **_render()_**: render the Player on canvas as given.

- **_handleInput()_**: receive user's input and change position of player with prevent move off screen
and or prevent cross through rock, if player reach at the water, increment counter by one with reset the player.

- **_reset()_**: reset initial player's position.
## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
