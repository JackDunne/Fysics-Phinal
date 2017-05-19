const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');

function end(){
    terminal.close();
}

function printOptions(){
    console.log("\nEnter the variables you know in a comma list.");
    console.log("If you do not know a variable, then type n");
    console.log("distance,velocity,acceleration,time,mass,energy");

}

function convertToArray(strcma){
    strcma = strcma.split(',');
    for(let i=0;i<strcma.length;i++){
        strcma[i] = Number(strcma[i]);
    }
    return strcma;
}

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
          str2 = convertToArray(str2);
          console.log(motion.distance(str2[1],str2[3]));
          end();
        }
        else{
          str2 = convertToArray(str2);
          console.log(motion.distance2(str2[2],str2[3],str2[1]));
          end();
        }
      })
    }
    else if(str1 == "v"){
      printOptions();
      terminal.question("What variables do you know?", function(str2){
        if(str2[2] == "null"){
          str2 = convertToArray(str2);
          console.log(motion.velocity(str2[0],str2[3]));
          end();
        }
        else{
          str2 = convertToArray(str2);
          console.log(motion.velocity2(str2[0],str2[3],str2[2]));
          end();
        }
      })
    }
    else if(str1 == "a"){
      printOptions();
      terminal.question("What variables do you know?", function(str2){
        str2 = convertToArray(str2);
        console.log(motion.acceleration(str2[0],str2[3],str2[1]));
        end();
      })
    }
    else if(str1 == "t"){
      printOptions();
      terminal.question("What variables do you know?", function(str2){
        str2 = convertToArray(str2);
        console.log(motion.time(str2[0],str2[1]));
        end();
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
          str2 = convertToArray(str2);
          console.log(motion.kineticEnergy(str2[4],str2[1]));
          end();
        })
      }
      else if(str1 == "m"){
        printOptions();
        terminal.question("What variables do you know?", function(str2){
          str2 = convertToArray(str2);
          console.log(motion.mass(str2[5],str2[1]));
          end();
        })
      }
      else if(str1 == "v"){
        printOptions();
        terminal.question("What variables do you know?", function(str2){
          str2 = convertToArray(str2);
          console.log(motion.velocity(str2[5],str2[4]));
          end();
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
