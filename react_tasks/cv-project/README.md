Structure plan for memory game:

App.js
Title, Description

    return:
    -Game cards in a div container that pull card props from Card.js
    -Score card that pulls from Score.js and updates based on changed state of Score

Header.js
Displays score and highscore with props

Game.js
Renders CardContainer and Header and handles the game functionality (scorekeeping and resetting)

CardContainer.js
To render Card.js and hold info of the card characters (images, title, bg color and border etc)

Card.js
Function to display cards in a random order every time user clicks one. Invoke function when component mounts. Map over cards and shuffle the order based on ID.

Score
updates based on changed state of Score. Player score of the current round, and best score of the session displayed. Score +1 if selection does not equal an ID that already was clicked in this round. If user clicks the same ID twice, reset score.

const resetGame = () => {
setClickedChars([])
setCurrentScore(0)
}
