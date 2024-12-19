const shellName = "shellby";
const homeDir = '/Users/random';
// const homeDir = '~';
const currDir = ['Users', 'random'];

const getPrompt = function () {
  const lastTwoDirectories = '/' + currDir.at(-2) + '/' + currDir.at(-1);

  if (lastTwoDirectories === homeDir) {
    return shellName + ' ~ %';
  }

  return shellName + ' ' + currDir.at(-1) + ' %';
}

const getNextCommand = function () {
  const command = prompt(getPrompt());

  return command.trim().split(' ');
}

const echo = function (args) {
  console.log(args.join(' '));
}

const cd = function (args) {
  const path = args.join(' ').trim().split(' ');

  for (const dir of path) {
    if (dir === '..') {
      if (currDir.length !== 1) {
        currDir.pop();
      }
      continue;
    }

    currDir.push(dir);
  }
}

const externCommands = function (command, args) {
  console.log(command + ': command does not exist');
}

const pwd = function () {
  console.log(currDir.join('/'));
}

const runCommand = function(currentCommand, args) {
  switch (currentCommand) {
    case '':
      return;
    case 'echo' : 
      return echo(args);
    case 'cd' : 
      return cd(args.join('').split('/'));
    case 'pwd':
      return pwd();
    default:
      return externCommands(currentCommand, args);
  }
}

function startShell() {
  // console.clear();

  while (true) {
    const [currentCommand, ...args] = getNextCommand();

    runCommand(currentCommand, args);
  
    // console.log('Command entered', currentCommand, '| arguments', args);
  }
}

startShell();
