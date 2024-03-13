let canvas;
let world;
let keyboard = new Keyboard();
let intervallIds = [];
let i = 1;
mute = false;

/**
 * Initializes the game by showing the start screen.
 */
function init() {
  startEventListener();
  showStartScreen();
  checkOrientation();
}

function startEventListener() {
  window.addEventListener("load", checkOrientation);
  window.addEventListener("resize", checkOrientation);
  window.addEventListener("orientationchange", checkOrientation);
}

/**
 * Starts the game by initializing the level, creating the world, drawing the initial state, and setting up touch events.
 */
function startGame() {
  initLevel();
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  world.draw();
  touchEvent();
}

/**
 * Makes normal intervalls stoppable.
 */
function setStopableInterval(fn, time) {
  let id = setInterval(fn, time);
  intervallIds.push(id);
}

/**
 * Stops the game by clearing all intervals.
 */
function stopGame() {
  setTimeout(() => {
    intervallIds.forEach(clearInterval);
  }, 2000);
}
/**
 * Implement touchcontroll for mobile devices.
 */
function touchEvent() {
  document.getElementById("button_up").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.UP = true;
  });
  document.getElementById("button_up").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.UP = false;
  });
  document.getElementById("button_down").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.DOWN = true;
  });
  document.getElementById("button_down").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.DOWN = false;
  });
  document.getElementById("button_left").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });
  document.getElementById("button_left").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });
  document
    .getElementById("button_right")
    .addEventListener("touchstart", (e) => {
      e.preventDefault();
      keyboard.RIGHT = true;
    });
  document.getElementById("button_right").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });
  document.getElementById("slap").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });
  document.getElementById("slap").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });
  document.getElementById("bubble").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.MOUSE_LEFT_CLICK = true;
  });
  document.getElementById("bubble").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.MOUSE_LEFT_CLICK = false;
  });
}
/**
 * Opens the endscreen (win and lose).
 * @param {string} imgPath -img for background
 * @param {string} text -text of the Buttons
 */
function showEndScreen(imgPath, text) {
  let overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.zIndex = "9999";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";

  let image = document.createElement("img");
  image.src = imgPath;
  image.style.maxWidth = "80%";
  image.style.maxHeight = "80%";
  overlay.appendChild(image);

  let playAgainButton = document.createElement("button");
  playAgainButton.textContent = text;
  playAgainButton.style.padding = "10px 20px";
  playAgainButton.style.fontSize = "18px";
  playAgainButton.style.cursor = "pointer";
  playAgainButton.addEventListener("click", function () {
    location.reload();
  });

  let buttonContainer = document.createElement("div");
  buttonContainer.style.position = "absolute";
  buttonContainer.style.bottom = "25%";
  buttonContainer.style.width = "100%";
  buttonContainer.style.textAlign = "center";
  buttonContainer.appendChild(playAgainButton);

  overlay.appendChild(buttonContainer);

  document.body.appendChild(overlay);
}

/**
 * Opens the startscreen.
 */
function showStartScreen() {
  let overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.zIndex = "9999";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";

  overlay.style.backgroundImage =
    'url("./img/Alternative Grafiken - Sharkie/3. Background/Dark/1.png")';
  overlay.style.backgroundSize = "cover";
  overlay.style.backgroundPosition = "center";

  let buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.flexDirection = "column";
  buttonContainer.style.alignItems = "center";

  let startGameButton = document.createElement("button");
  startGameButton.textContent = "Start Game";
  startGameButton.style.padding = "10px 20px";
  startGameButton.style.fontSize = "18px";
  startGameButton.style.margin = "10px";
  startGameButton.style.cursor = "pointer";
  startGameButton.addEventListener("click", function () {
    startGame();
    overlay.style.display = "none";
  });
  buttonContainer.appendChild(startGameButton);

  let descriptionButton = document.createElement("button");
  descriptionButton.textContent = "Description";
  descriptionButton.style.padding = "10px 20px";
  descriptionButton.style.fontSize = "18px";
  descriptionButton.style.margin = "10px";
  descriptionButton.style.cursor = "pointer";
  descriptionButton.addEventListener("click", function () {
    openInfoWindow();
  });
  buttonContainer.appendChild(descriptionButton);

  overlay.appendChild(buttonContainer);
  document.body.appendChild(overlay);
}

/**
 * Opens cotroll info
 */
function openInfoWindow() {
  let overlay = document.createElement("div");
  overlay.id = "infoWindowOverlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.zIndex = "9999";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";

  let infoWindow = document.createElement("div");
  infoWindow.style.width = "60%";
  infoWindow.style.height = "80%";
  infoWindow.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  infoWindow.style.padding = "20px";
  infoWindow.style.borderRadius = "10px";
  infoWindow.style.position = "relative";
  infoWindow.style.backgroundImage =
    'url("./img/Alternative Grafiken - Sharkie/3. Background/Mesa de trabajo 1.png")';
  infoWindow.style.backgroundSize = "cover";
  infoWindow.style.backgroundPosition = "center";

  let infoText = document.createElement("p");
  infoText.innerHTML =
    "How to move: W/A/S/D & Arrow Keys<br>Shot / Hit: Space & Left Mouse Click<br><br>To defeat the boss, you have to collect all poison bottles.<br>Good luck and have fun!";

  infoWindow.appendChild(infoText);

  let closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.padding = "5px 10px";
  closeButton.style.cursor = "pointer";
  closeButton.addEventListener("click", function () {
    document.body.removeChild(overlay);
  });
  infoWindow.appendChild(closeButton);

  overlay.appendChild(infoWindow);
  document.body.appendChild(overlay);
}

/**
 * Set sound to mute / unmute
 */
function muteSound() {
  if (mute == false) {
    mute = true;
  } else {
    mute = false;
  }
}

/**
 * checks the orientation of the device
 */
function checkOrientation() {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  if (windowHeight > windowWidth) {
    showOrientationAlert();
  } else {
    hideOrientationAlert();
  }
}

/**
 * Shows an alert if the device is not vertical
 */
function showOrientationAlert() {
  if (!document.querySelector(".orientation-alert")) {
    let alert = document.createElement("div");
    alert.className = "orientation-alert";
    alert.textContent = "Please rotate your device.";
    alert.style.position = "fixed";
    alert.style.top = "50%";
    alert.style.left = "50%";
    alert.style.transform = "translate(-50%, -50%)";
    alert.style.background = "#fff";
    alert.style.color = "#000";
    alert.style.padding = "10px";
    alert.style.borderRadius = "5px";
    alert.style.zIndex = "9999";
    document.body.appendChild(alert);
  }
}

/**
 * Hide the orientation alert
 */
function hideOrientationAlert() {
  let alert = document.querySelector(".orientation-alert");
  if (alert) {
    alert.parentNode.removeChild(alert);
  }
}
