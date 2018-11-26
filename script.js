const electron = require("electron");

const {app, BrowserWindow} = require("electron");

let win;

/**
 * @function
 */

function createWindow () {
    // create window
    win = new BrowserWindow({height : 200, width: 400});
    // load .html 
    win.loadFile("index.html");

    app.on("closed", () => win = null);
}

app.on("ready", createWindow);

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});



