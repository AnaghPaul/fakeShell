const shellName = "shellby";
let currDir = "~";

const getPrompt = function () {
  return shellName + ' ' + currDir + ' %';
}

const getNextCommand = function () {
  const command = prompt(getPrompt());

  return command.split(' ');
}

const echo = function (args) {
  console.log(args.join(' '));
}

const cd = function (path) {
  currDir = path;
}

const externCommands = function (command, args) {
  console.log(command, ':command does not exist');
}

function startShell() {
  console.clear();

  while (true) {
    const [currentCommand, ...args] = getNextCommand();
  
    switch (currentCommand) {
      case 'echo' : 
        echo(args);
        break;
      case 'cd' : 
        cd(args);
        break;
      default:
        externCommands(currentCommand, args);
    }
  
    // console.log('Command entered', currentCommand, '| arguments', args);
  }
}

startShell();
