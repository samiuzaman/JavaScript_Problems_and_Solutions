/*
Problem : If a given string has either x, replace x by y. if the given string has X, replace it by Y.

Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

*/

// Solution :
let text = "You should be able to check whether x or X exists";
let replaceSmallx = text.replace("x", "y");
console.log(replaceSmallx);
let replaceUppderX = text.replace("X", "Y");
console.log(replaceUppderX);
