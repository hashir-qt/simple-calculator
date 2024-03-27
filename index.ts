#! /usr/bin/env node 
import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
    { message: "Pehla Number DALO", type: "number", name: "PehlaNumber" },
    { message: "Dusra Number DALO", type: "number", name: "DusraNumber" },
    { message: "Koi sa operator select karo", type: "list", name: "operator",
     choices: ["Addition","Subtraction","Division","Multiplication"],
    },
    ]);
    
    //conditional statement
    if(asnwer.operator === "Addition") {
        console.log( asnwer.PehlaNumber + asnwer.DusraNumber);
    }
    else if(asnwer.operator === "Subtraction"){
        console.log( asnwer.PehlaNumber - asnwer.DusraNumber);  
    }
    else if(asnwer.operator === "Multiplication"){
        console.log( asnwer.PehlaNumber * asnwer.DusraNumber);  
    }
    else if(asnwer.operator === "Division"){
        console.log( asnwer.PehlaNumber / asnwer.DusraNumber);  
    }
    else{
        console.log("Sahi operator select kro chomu");
        }