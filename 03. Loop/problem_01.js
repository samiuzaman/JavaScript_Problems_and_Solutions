/*
Problem : "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

Example :
*/

// Solution :
// For Loop
for (let message = 1; message <= 60; message++) {
  console.log(
    message,
    "I will invest at least 6 hrs every single day for next 60 days!"
  );
}

// While Loop
let message = 1;
while (message <= 60) {
  console.log(
    message,
    "I will invest at least 6 hrs every single day for next 60 days!"
  );
  message++;
}
