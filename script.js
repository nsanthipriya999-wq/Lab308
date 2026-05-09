<<<<<<< HEAD
const radius = 5;

let week1Pa, week2Pa, week3Pa, week4Pa = 0;                      //Area occupied by  plants in week1 ,week2,week3

const area = 3.1415 * radius * radius;
console.log("Circular field area is " + area + "square meters")
let initialPlants = 20;


let week1Np, week2Np, week3Np = 0;

week1Np = initialPlants * 2;


console.log("Plants grown in the first week is " + week1Np);

week2Np = week1Np * 2;

console.log("Plants grown in the Second week is " + week2Np);

week3Np = week2Np * 2;

console.log("Plants grown in the Third week is " + week3Np);

week4Np = week3Np * 2;
console.log("Plants grown in the Fourth week is " + week4Np);



const plantArea = 0.8;


const totalPlants = area / plantArea;                                    //circle area divided by area occupied by each plant 78.5375/0.8= 98.16 

console.log("The circular area can hold a total of " + totalPlants + "plants.");
const eightyPercent = 0.8 * totalPlants;                        //eighty percent of total plants

const fiftyPercent = 0.5 * totalPlants;                         //Fifty percent of total plants

console.log("Number of plants at eighty percent capacity: " + eightyPercent);

console.log("Number of plants at fifty percent capacity: " + fiftyPercent);

//part1 
//-----------------------------------------------------------------------------------

week1Pa = week1Np * plantArea;
console.log("Area occupied by the plants grown in the first week is " + week1Pa + "sq meters");

week2Pa = week2Np * plantArea;
console.log("Area occupied by the plants grown in the second week is " + week2Pa + "sq meters");

week3Pa = week3Np * plantArea;
console.log("Area occupied by the plants grown in the third week is " + week3Pa + "sq meters");



//Checking conditions for pruning, monitoring and planting more

//-------------------------------------------------------------------------------
if (week1Np > eightyPercent)                                 //Week1
    console.log("Plants should be pruned in the first week");

else if (week1Np >= fiftyPercent)
    console.log("Plants should be monitored in  the first week");

else
    console.log("More number of plants can be planted in the first week");

//---------------------------------------------------------------------------------

if (week2Np > eightyPercent)                                 //week2
    console.log("Plants should be pruned in the second week");

else if (week2Np >= fiftyPercent)
    console.log("Plants should be monitored in the second week");

else
    console.log("More number of plants can be planted in the second week");

//---------------------------------------------------------------------------------
if (week3Np > eightyPercent)                                 //week3
    console.log("Plants should be pruned in the third week");

else if (week3Np >= fiftyPercent)
    console.log("Plants should be monitored in the third week");

else
    console.log("More number of plants can be planted in the third week");


//Part2
//---------------------------------------------------------------------------------------

let plants = 100;
let r = 0;                                                 //Radius of new circle.
let weeks = 10;
let totalArea = 0;

for (i = 1; i <= 10; i++) {
    plants += plants;
    console.log(`Plants in week ${i} are ` + plants);
}
console.log("Number of plants after 10 weeks without pruning are " + plants);

totalArea = plants * plantArea;                                 //area occupied by each plant =0.8sqm

console.log("Total area occupied by the plants  is " + totalArea + " square meters");

r = Math.sqrt(totalArea / 3.1415);                             // pi=3.1415

console.log("Radius of the new circular field is " + r + " meters");

//part 3
//-------------------------------------------------------------------------------

const startingPlants = 100;

try {


    if (startingPlants > totalPlants) {
        throw new Error("No more Space for new plants");
    }
    console.log("Given plants fit in the circular field.");



}
catch (error) {

    console.error("Part3-Error: ", error.message);
}

/*------------------------------OUTPUT---------------------------------------
santh@SPY MINGW64 ~/OneDrive/Desktop/2026-RTT-19/308jsp/lab308 (main)
$ node script.js
Circular field area is 78.53750000000001square meters
Plants grown in the first week is 40
Plants grown in the Second week is 80
Plants grown in the Third week is 160
Plants grown in the Fourth week is 320
The circular area can hold a total of 98.171875plants.
Number of plants at eighty percent capacity: 78.53750000000001
Number of plants at fifty percent capacity: 49.0859375
Area occupied by the plants grown in the first week is 32sq meters
Area occupied by the plants grown in the second week is 64sq meters
Area occupied by the plants grown in the third week is 128sq meters
More number of plants can be planted in the first week
Plants should be pruned in the second week
Plants should be pruned in the third week
Plants in week 1 are 200
Plants in week 2 are 400
Plants in week 3 are 800
Plants in week 4 are 1600
Plants in week 5 are 3200
Plants in week 6 are 6400
Plants in week 7 are 12800
Plants in week 8 are 25600
Plants in week 9 are 51200
Plants in week 10 are 102400
Number of plants after 10 weeks without pruning are 102400
Total area occupied by the plants  is 81920 square meters
Radius of the new circular field is 161.48286269784148 meters
Part3-Error:  No more Space for new plants
//---------------------------------------------------------
*/
=======
let radius=5;

let week1Pa,week2Pa,week3Pa,week4Pa=0;                      //Area occupied by  plants in week1 ,week2,week3

const area= 3.1415*radius*radius;
console.log("Circle Area is" + area )


let week1Np=20;
let week2Np,week3Np,week4Np=0;

 
console.log("Plants grown in the first week is "+ week1Np )
  
week2Np=week1Np*2;
console.log("Plants grown in the Second week is "+ week2Np )

week3Np=week2Np*2;
console.log("Plants grown in the Third week is "+ week3Np )

week4Np=week3Np*2;
console.log("Plants grown in the Fourth week is "+ week4Np )


numofPlants=20;                                             //first week no of plants
const plantArea=0.8;


const totalPlants=98.16;                                    //circle area divided by area occupied by each plant 78.5375/0.8= 98.16 

const eightyPercent=0.8*totalPlants;                        //eighty percent of total plants
const fiftyPercent=0.5*totalPlants;                         //Fifty percent of total plants

console.log("No of plants that Eighty percent of Area  can hold is "+ eightyPercent );
console.log("No of plants that fiftyPercent of Area  can hold is  "+ fiftyPercent );
try{
      if (numofPlants>totalPlants)
        throw new Error("No more Space for new plants");



 week1Pa = numofPlants*plantArea;
 console.log("Area occupied by the plants grown in the first week is "+ week1Pa ); 

 week2Pa=week2Np*plantArea;
 console.log("Area occupied by the plants grown in the second week is "+ week2Pa );

 week3Pa=week3Np*plantArea;
 console.log("Area occupied by the plants grown in the third week is "+ week3Pa );
  
 week4Pa=week4Np*plantArea;
 console.log("Area occupied by the plants grown in the fourth week is "+ week4Pa );
  
//Checking conditions for pruning, monitoring and planting more

if (week1Pa<fiftyPercent)
   console.log("More no of plants can be planted in the First week"); 

else if (fiftyPercent<week1Pa<eightyPercent)
    console.log("plants should be monitored in first week");

else if(week1Pa>eightyPercent)                                 //Week1
     console.log("Plants should be pruned in first week");
 

 
if (week2Pa<fiftyPercent)
   console.log("More no of plants can be planted in the second week"); 

else if (fiftyPercent<week2Pa<eightyPercent)
    console.log("plants should be monitored in the second week");

else if(week2Pa>eightyPercent)                                 //Week2
     console.log("Plants should be prunedin the second week");
 

if (week3Pa<fiftyPercent)
   console.log("More no of plants can be planted in the third week "); 

else if (fiftyPercent<week3Pa<eightyPercent)
    console.log("plants should be monitored in the third week ");

else if(week3Pa>eightyPercent)                                 //Week3
     console.log("Plants should be pruned in the third week ");
 



if (week4Pa<fiftyPercent)
   console.log("More no of plants can be planted in the fourth week"); 

else if (fiftyPercent<week4Pa<eightyPercent)
    console.log("plants should be monitored in the fourth week");

else if(week4Pa>eightyPercent)                                 //Week4
     console.log("Plants should be pruned in the fourth week");
}   
catch (error) {
    console.error("Error: ", error.message);
}
  
  
        //Part2

let plants=100;
let r=0;                                                 //Radius of new circle.
let weeks=10;
let totalArea=0;

for(i=1;i<=10;i++)
{
  plants+=plants;
  console.log(`plants in week ${i} are ` + plants);
}  
console.log("Number of plants after 10 weeks without pruning are " + plants);

totalArea=plants*0.8 ;                                 //area occupied by each plant =0.8sqm

console.log("Total area occupied by the plants " + totalArea);

r= Math.sqrt(totalArea/3.1415);                             // pi=3.1415

console.log("Radius of the new circle "+r);

>>>>>>> ee4d5a60c8dad7d2db3c7a97f70afddc1089fce4
