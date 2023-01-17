const args = process.argv.slice(2);

if (args.length < 1) process.exit(0);

for (let time of args) {
  if (!isNaN(time) && Number(time) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(time) * 1000);
  }

}