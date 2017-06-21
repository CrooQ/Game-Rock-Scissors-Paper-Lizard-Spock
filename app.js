var userChoice;
var cpuChoice;

function compare() {
    
    if (userChoice === cpuChoice) {
        return "There is a DRAW";
    
        
    // When user pick ROCK
        
    } else if (userChoice === "rock") {
        if (cpuChoice === "paper") {
            return "paper covers rock <br> You LOSE!";
        } else if (cpuChoice === "scissors") {
            return "rock crushes scissors <br> You WIN!";
        } else if (cpuChoice === "lizard") {
            return "rock crushes lizard <br>You WIN!";
        } else {
            return "Spock vaporizes rock <br>You LOSE!"; 
        }
    
        
    // When user pick PAPER
    
    } else if (userChoice === "paper") {
        if (cpuChoice === "rock") {
            return "paper covers rock <br>You WIN!";
        } else if (cpuChoice === "scissors") {
            return "scissors cut paper <br>You LOSE!";
        } else if (cpuChoice === "lizard") {
            return "lizard eats paper <br>You LOSE!";
        } else {
            return "paper disproves Spock <br>You WIN!"; 
        }
        
        
    // When user pick SCISSORS

    } else if (userChoice === "scissors") {
        if (cpuChoice === "rock") {
            return "rock crushes scissors <br>You LOSE!";
        } else if (cpuChoice === "paper") {
            return "scissors cut paper <br>You LOSE!";
        } else if (cpuChoice === "lizard") {
            return "scissors decapitate lizard <br>You WIN!";
        } else {
            return "Spock smashes scissors <br>You LOSE!"; 
        }    
        
        
    // When user pick LIZARD

    } else if (userChoice === "lizard") {
        if (cpuChoice === "rock") {
            return "rock crushes lizard <br>You LOSE!";
        } else if (cpuChoice === "paper") {
            return "lizard eats paper <br>You WIN!";
        } else if (cpuChoice === "scissors") {
            return "scissors decapitate lizard <br>You LOSE!";
        } else {
            return "lizard poisons Spock <br>You WIN!"; 
        }
        
        
        // When user pick SPOCK

    } else if (userChoice === "spock") {
        if (cpuChoice === "rock") {
            return "Spock vaporizes rock <br>You WIN!";
        } else if (cpuChoice === "paper") {
            return "paper disproves Spock <br>You LOSE!";
        } else if (cpuChoice === "scissors") {
            return "Spock smashes scissors <br>You WIN!";
        } else {
            return "lizard poisons Spock <br>You LOSE!"; 
        }
    }
};

$(document).ready(function(){
    
    $("button").on("click", function(){
        userChoice = this.id;
        cpuChoice = Math.floor(Math.random() * 5);
        console.log(cpuChoice);
        switch (cpuChoice) {
            case 0: cpuChoice = "rock";
                break;
            case 1: cpuChoice = "paper";
                break;
            case 2: cpuChoice = "scissors";
                break;
            case 3: cpuChoice = "lizard";
                break;
            case 4: cpuChoice = "spock";
                break;
            }
    
    var result = compare();
     
        $(".result").html("<p>User vs CPU" + "<br>" + userChoice.toUpperCase() + "   :   " + cpuChoice.toUpperCase() + "<h1>Result:</h1>" + "<p>" + result + "</p>");    
           
    });
                      
    });
    