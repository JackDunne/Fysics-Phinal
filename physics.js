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
      terminal.question("What variables do you know?", function(str2){
        if(str2[2] == "null"){
          motion.distance(str2[1],str2[3])
        }
        else{
          motion.distance2(str2[2],str2[3],str2[1])
        }
      })
    }
    else if(str1 == "v"){
      printOptions();
      terminal.question("What variables do you know?", function(str2){
        if(str2[2] == "null"){
          motion.velocity(str2[0],str2[3])
        }
        else{
          motion.velocity2(str2[0],str2[3],str2[2])
        }
      })
    }
    else if(str1 == "a"){
      printOptions();
      terminal.question("What variables do you know?", function(str2){
        motion.acceleration(str2[0],str2[3],str2[1])
      })
    }
    else if(str1 == "t"){
      printOptions();
      terminal.question("What variables do you know?", function(str2){
        motion.time(str2[0],str2[1])
      })
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
        terminal.question("What variables do you know?", function(str2){
          motion.kineticEnergy(str2[4],str2[1])
        })
      }
      else if(str1 == "m"){
        printOptions();
        terminal.question("What variables do you know?", function(str2){
          motion.mass(str2[5],str2[1])
        })
      }
      else if(str1 == "v"){
        printOptions();
        terminal.question("What variables do you know?", function(str2){
          motion.velocity(str2[5],str2[4])
        })
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
});
