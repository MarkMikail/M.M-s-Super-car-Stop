var myFunc=function() {


var points=0;


var answer=prompt("How fast does the Koenigsegg Agera R go? \n 1. 245MPH \n 2. 261MPH \n 3. 273MPH"); 


if ((answer==="273MPH")||(answer==="273")||(answer==="273mph"))
{
    ++points
}


var answer2=prompt("When did the Hennessey Venom GT set a Guinness World Record? \n 1. 2002 \n 2. 2013 \n 3. 2014 ");

if (answer2==="2013")
{
    ++points
}


var answer3= prompt("When was the Bugatti Veyron was discontinued?  \n 1. late 2014 \n 2. early 2015 \n 3. mid 2013")

if (answer3==="late 2014")
{
    ++points
}

alert("You have "+points+" points out of 3");

}