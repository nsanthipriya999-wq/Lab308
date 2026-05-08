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

