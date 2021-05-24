//wk2-1 Craps game build

//function to play craps

function playCraps(){
    console.log("playCraps has started"); 

    // Create the first die
    var die1; 
    die1 = Math.ceil(Math.random() * 6);
    console.log("The value of die1 is: " + die1);
    document.getElementById("die1Results").innerHTML = "The value of die1 is : " + die1; 

    // Create the second die
    var die2; 
    die2 = Math.ceil(Math.random() * 6);
    console.log("The value of die2 is: " + die2);
    document.getElementById("die2Results").innerHTML = "The value of die2 is : " + die2;

    // Add the values of the the two die
    var dieSum; 
    dieSum = die1 + die2;
    document.getElementById("sumResults").innerHTML = "The sum of die1 plus die2 is : " + dieSum;

    // First we check if the values are = to 7 or 11, if so we write You Lose
    // Second we check if the values match and are eve, if so we instead write You Win
    // Third if it is neither of the above then we write to Roll Again
    if((die1+die2 == 7) || (die1+die2 == 11)){
        document.getElementById("crapsResults").innerHTML = "The reults are:  YOU LOSE! ";
    } else if(((die1 == 2) && (die2 == 2)) || ((die1 == 4) && (die2 == 4)) || ((die1 == 6) && (die2 == 6))){
        document.getElementById("crapsResults").innerHTML = "The results are: YOU WIN!!";
    } else{
        document.getElementById("crapsResults").innerHTML = "Roll Again!";
    }







}