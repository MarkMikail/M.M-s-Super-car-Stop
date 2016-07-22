function supercar(){
	
	

	var venom=0
	
	var nemenis=0
	
	var porsh=0
	
var answer=prompt("Which stat do you think is the most important? \n 1. speed \n 2. acceleration \n 3. handling"); 


if (answer==="speed")
{
    ++venom
}

if(answer==="acceleration")
{
	++nemenis
}

if(answer==="handling"){
++porsh
	
}


var answer2=prompt("Do you want a supercar to gain attention? If not, do you want your car to be fast? \n 1. yes and no \n 2. no and yes");

if (answer2==="yes and no")
{
    ++nemenis
	++porsh
}

if(answer2==="no and yes"){
	++venom
}



var answer3= prompt("Do you prefer sleek or modern?  \n 1. sleek \n 2. modern")

if (answer3==="sleek")
{
    ++porsh
}
	
if(answer3==="modern")	{
	++nemenis
}
	
	
	alert("You have a " +venom+ "/2 to buy the Hennessey Venom, a " +nemenis+ " /2 chance to buy the Trion Nemesis and a " +porsh+ " /2 chance to buy the  2011 Porsche Boxster Spyder.");
	
}