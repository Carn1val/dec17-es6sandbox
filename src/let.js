// var
function  testVar() {
  var a = 30;
  if(true) {
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

testVar();

// let
function  testLet() {
  let b = 30;
  if(true) {
    let b = 50;
    console.log(b);
  }
  console.log(b);
}

testLet();