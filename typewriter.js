const sentence = "hello there from lighthouse labs";
let arr = sentence.split("");

let t = 1000;
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => process.stdout.write(arr[i]), t);
  //each time a letter gets printed, the time will increment by 100ms
  t += 100;
}

setTimeout(() => process.stdout.write("\n"), t);

