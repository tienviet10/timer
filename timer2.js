const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const setTimer = (time) => {
  console.log(`Set timer for ${time}`);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
};

process.stdout.write('Type here: ');
// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  process.stdout.write(key + "\n");

  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  if (key === "b") process.stdout.write('\x07');

  if (!isNaN(key)) setTimer(Number(key));

});
