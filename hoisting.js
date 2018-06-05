
function callMe() {
var lyric = "maybe";
return lyric
}
callMe();

function crazy() {
var thisIsCrazy = function crazy(){
    console.log("hey!!!")
    thisIsCrazy();
  }
}

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  sayMy();

  function sayMy() {
    console.log(name);
    var name = "Kristin";
  }
}
