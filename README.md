# Simon Says Game

This project is a simple implementation of the classic "Simon Says" game using HTML, CSS, and JavaScript. The game generates a sequence of button flashes that the user must replicate. Each correct replication increases the level and the sequence length. If the user makes a mistake, the game resets and displays the user's score.

## `index.html`

This file contains the HTML structure of the game, including the game buttons, start button, level display, and score display.

### Key Elements:
- **Container:** A `div` element that wraps the entire game.
- **Heading:** An `h1` element that displays the game title.
- **Level Display:** A `p` element with `id="levelPara"` that shows the current level.
- **Game Buttons:** Four `div` elements with class `color` representing the game buttons (red, green, blue, yellow).
- **Start Button:** A `button` element with `id="start"` to start the game.
- **Score Box:** A `div` element with class `score-box` to display the user's score.

## `style.css`

This file contains the styles for the game elements, including the layout, colors, and animations.

### Styles:
- **Global Styles:**  
  `*` - Resets margin, padding, and sets `box-sizing: border-box` for all elements.

- **Body:**  
  Sets the height to 100vh and applies a linear gradient background.

- **Container (`.container`):**  
  Centers the content, sets dimensions, applies background color, shadow, and border-radius.

- **Game Buttons (`.color`):**  
  Styled with border, border-radius, pointer cursor, opacity, and transition effects.  
  `.green`, `.red`, `.yellow`, `.blue`: Assigns background colors.

- **Grid Layout (`#game`):**  
  Uses CSS Grid to arrange buttons in a 2x2 layout with spacing.

- **Start Button (`#start`):**  
  Styled with margin, size, font, borders, background color, and hover effect.

- **Flash Effect (`.flash`):**  
  Reduces opacity briefly to simulate a flash.

- **Disabled Buttons (`.dis-game-btn`, `.dis-start-btn`):**  
  Disables pointer events and reduces opacity.

- **Score Box (`.score-box`):**  
  Centers text, sets dimensions, margin, padding, background color, shadow, border-radius, and font size.

- **Hide Class (`.hide`):**  
  Hides elements by setting `display: none`.

## `script.js`

This file contains the JavaScript logic for the game, including event listeners, game sequence generation, user input handling, and game state management.

### Key Variables:
- `gameSeq`: Array to store the game sequence.
- `userSeq`: Array to store the user's input sequence.
- `startBtn`: Reference to the start button element.
- `gameBtns`: NodeList of game button elements.
- `levelPara`: Reference to the level display element.
- `scoreBox`: Reference to the score box element.
- `level`: Variable to track the current level.

### Key Functions:

#### `startGame()`
- **Use:** Initializes the game when the start button is clicked.
- **Working:**
  - Hides the score box.
  - Disables the start button.
  - Enables the game buttons.
  - Calls `levelUp()` after a short delay.

#### `levelUp()`
- **Use:** Advances the game to the next level.
- **Working:**
  - Resets the user sequence.
  - Increments the level and updates the level display.
  - Generates a random number to select a game button.
  - Adds the selected button to the game sequence.
  - Flashes the selected button.
  - Logs the current game sequence.

#### `flashBtn(btn)`
- **Use:** Flashes a game button.
- **Working:**
  - Adds a flash effect to the button.
  - Removes the flash effect after a short delay.

#### `btnPress()`
- **Use:** Handles the user's button press.
- **Working:**
  - Flashes the pressed button.
  - Adds the pressed button to the user sequence.
  - Calls `checkSeq()` to verify the user's input.

#### `checkSeq()`
- **Use:** Checks if the user's sequence matches the game sequence.
- **Working:**
  - Compares the last input in the user sequence with the game sequence.
  - If sequences match and are complete, advances to the next level.
  - If not, displays the score and resets the game.

#### `reset()`
- **Use:** Resets the game to its initial state.
- **Working:**
  - Enables the start button.
  - Disables the game buttons.
  - Resets the level and level display.
  - Clears game and user sequences.
