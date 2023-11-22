function countDown(number) {
    if (number <= 0) {
      console.log("Done!");
    } else {
      console.log(number);
      countDown(number - 1);
    }
  }
  
  countDown(5);