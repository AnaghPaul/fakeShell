const shellName = "shellby";
let currDir = "~";

const getPrompt = function () {
  return shellName + ' ' + currDir + ' % ';
}

const getNextCommand = function () {
  const command = prompt(getPrompt());

  return [...command.split(' ')];
}

const echo = function (args) {
  console.log(args.join(' '));
}

function startShell() {
  console.clear();

  while (true) {
    const [currentCommand, ...args] = getNextCommand();
  
    switch (currentCommand) {
      case 'echo' : echo(args);
    }
  
    // console.log('Command entered', currentCommand, '| arguments', args);
  }
}

startShell();
