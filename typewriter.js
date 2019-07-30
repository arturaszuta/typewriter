const sentence = "hello lighthouse";
let speed = 100;
let startingSpeed = 50;

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      console.log('\n');
    }
  }, startingSpeed);
  startingSpeed += speed;
}

