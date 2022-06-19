const sentence = "Lighthouse Labs!\n";

let t = 1000;
for (const letter of sentence) {
  setTimeout(() => process.stdout.write(letter), t);
  //each time a letter gets printed, the time will increment by 100ms
  t += 200;
}

