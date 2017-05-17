const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?",function(str){
if(str == "motion"){
  terminal.question("What variable are you looking for?", function(str1){
    if(str1 == "d"){
      printOptions();
    }
    else if(str1 == "v"){
      printOptions();
    }
    else if(str1 == "a"){
      printOptions();
    }
    else if(str1 == "t"){
      printOptions();
    }
    else{
      console.log("Not a variable");
    }
  })

  }
  else if(str == "energy"){
    terminal.question("What variable are you looking for?", function(str1){
      if(str1 == "Ke"){
        printOptions();
      }
      else if(str1 == "m"){
        printOptions();
      }
      else if(str1 == "v"){
        printOptions();
      }
      else{
        console.log("Not a variable");
      }
    })
  }
  else{
      console.log("That is not an option");
    }
}
    //you will configure your series of questions inside here.


});
