const clearConsole = require('./clear')

function title() {
    clearConsole();
    console.log("  _              _     _   _ _       _     _   ");
    console.log(" | |    ___  ___| |_  | \\ | (_) __ _| |__ | |_ ");
    console.log(" | |   / _ \\/ __| __| |  \\| | |/ _` | '_ \\| __|");
    console.log(" | |__| (_) \\__ \\ |_  | |\\  | | (_| | | | | |_ ");
    console.log(" |_____\\___/|___/\\__| |_| \\_|_|\\__, |_| |_|\\__|");
    console.log("                               |___/           ");
}

module.exports = title;