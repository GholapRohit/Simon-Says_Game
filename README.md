# Simon_Says Game
This project is a simple implementation of the classic "Simon Says" game using HTML, CSS, and JavaScript. The game generates a sequence of button flashes that the user must replicate. Each correct replication increases the level and the sequence length. If the user makes a mistake, the game resets and displays the user's score.<br>

index.html:-<br>
This file contains the HTML structure of the game, including the game buttons, start button, level display, and score display.<br>
Key Elements:<br>
<ul>
<li>Container: A div element that wraps the entire game.</li>
<li>Heading: An h1 element that displays the game title.</li>
<li>Level Display: A paragraph element with id levelPara that shows the current level.</li>
<li>Game Buttons: Four div elements with class color representing the game buttons (red, green, blue, yellow).</li>
<li>Start Button: A button element with id start to start the game.</li>
<li>Score Box: A div element with class score-box to display the user's score.</li>
</ul>
style.css:-<br>
This file contains the styles for the game elements, including the layout, colors, and animations.<br>
<ul>
<li>Global Styles:</li>
*: Resets margin, padding, and sets box-sizing to border-box for all elements.
<li>Body:</li>
Sets the height to 100vh and applies a linear gradient background.
<li>Container:</li>
.container: Centers the content, sets dimensions, applies background color, shadow, and border-radius.
<li>Game Buttons:</li>
.color: Styles the game buttons with border, border-radius, cursor pointer, opacity, and transition effect.<br>
.green, .red, .yellow, .blue: Sets the background color for each button.
<li>Grid Layout:</li>
#game: Uses CSS Grid to layout the game buttons in a 2x2 grid with gaps.<br>
<li>Start Button:</li>
#start: Styles the start button with margin, dimensions, font size, border, color, background color, and hover effect.<br>
<li>Flash Effect:</li>
.flash: Reduces the opacity of the button to create a flash effect.<br>
<li>Disabled Buttons:</li>
.dis-game-btn, .dis-start-btn: Disables pointer events and reduces opacity for disabled buttons.<br>
<li>Score Box:</li>
.score-box: Centers the text, sets dimensions, margin, padding, background color, shadow, border-radius, and font size.<br>
<li>Hide Class:</li>
.hide: Hides elements by setting display: none.<br>
</ul>
script.js:-<br>
This file contains the JavaScript logic for the game, including event listeners, game sequence generation, user input handling, and game state management.<br>
Key Variables:<br>
<ul>
<li>gameSeq: Array to store the game sequence.</li>
<li>userSeq: Array to store the user's input sequence.</li>
<li>startBtn: Reference to the start button element.</li>
<li>gameBtns: NodeList of game button elements.</li>
<li>levelPara: Reference to the level display element.</li>
<li>scoreBox: Reference to the score box element.</li>
<li>level: Variable to track the current level.</li>
  </ul>
Key Functions:<br>
<ul>
<li>startGame():-</li>
Use: Initializes the game when the start button is clicked.<br>
Working:<br>
Hides the score box.<br>
Disables the start button.<br>
Enables the game buttons.<br>
Calls levelUp() after a short delay.<br>
<li>levelUp():-</li>
Use: Advances the game to the next level.<br>
Working:<br>
Resets the user sequence.<br>
Increments the level and updates the level display.<br>
Generates a random number to select a game button.v
Adds the selected button to the game sequence.<br>
Flashes the selected button.<br>
Logs the current game sequence.<br>
<li>flashBtn(btn):-</li>
Use: Flashes a game button.<br>
Working:<br>
Adds a flash effect to the button.<br>
Removes the flash effect after a short delay.<br>
<li>btnPress():-</li>
Use: Handles the user's button press.<br>
Working:<br>
Flashes the pressed button.<br>
Adds the pressed button to the user sequence.<br>
Calls checkSeq() to verify the user's input.<br>
<li>checkSeq():-</li>
Use: Checks if the user's sequence matches the game sequence.<br>
Working:<br>
Compares the last button in the user sequence with the corresponding button in the game sequence.<br>
If the sequences match and the user sequence is complete, advances to the next level.<br>
If the sequences do not match, displays the score and resets the game.<br>
<li>reset():-</li>
Use: Resets the game to its initial state.<br>
Working:<br>
Enables the start button.<br>
Disables the game buttons.<br>
Resets the level and updates the level display.<br>
Clears the game and user sequences.<br>
</ul>
