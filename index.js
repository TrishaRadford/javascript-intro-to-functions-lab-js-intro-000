function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
  if (string.toLowerCase) {
    return "I can't hear you!";
  } else if (string.toUpperCase) {
    console.log(string.toLowerCase("Yes indeed!"));
  } if (string == "I love you, Grandma."){
    return "I love you, too.";
  }
}
