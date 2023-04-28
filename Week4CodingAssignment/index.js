//1. Create an array called ages that contains the following values: 3,9,23,64,2,8,28,93.
var ages= [3,9,23,64,2,8,28,93];

//1a. subtract the value of the first element in the array from the value in the last element of the array
//****this would be 93-3==90 in answer
console.log(ages[ages.length-1]-ages[0]);

//1b. add a new age and repeat the step above 
// ***new age I put is 27 so 27-3==24 in answer
ages.push(27);
console.log(ages[ages.length-1]-ages[0]);

//1c. iterate through the array and calculate the average ages
var i, sum = 0;
for (i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
};
console.log(sum /ages.length);
///***answer was 28.555


//2.create an array called names with below names given 
var names= [ 'Sam','Tommy','Tim','Sally','Buck','Bob'];

//2a. loop through and array and calculate an average
sum = 0;
for (i = 0; i < names.length; i++) {
   sum = sum + names[i].length;
}
console.log (sum / names.length);
//average number of letters per name is 3.8333

//2b. dont even know where to start---didnt do. dont understand 

//3. how to access last element of an array
//array [array.length-1]

//4. how to access the first element of an array
// array[0]

//5.loop through namesArray and add length of each name to nameLengths array
let nameLengths = [];
for (i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
    }
    console.log(nameLengths); 

////couldnt get it to count number of letters in each name, counted the number total of names 


//6.loop to iterate over the nameLengths array and calculate the sum of all the elemnts in the array
sum= 0;
for (i = 0; i < nameLengths.length; i++) {
    sum = sum + nameLengths[i];
}
console.log(sum);

//7.function w/2 param (word and n)...concat word to itself n number of times

function repeat (word, n) {
    var repeatWord = '';
    for (i = 0; i < n; i++){

    repeatWord=repeatWord + word;
}
return (repeatWord);
}
console.log (repeat("Hello",3));
/// prints "Hello" 3 times

//8. write a function that returns fullname, first and last, separated by a space
function fullName (firstName, lastName) {
    return (firstName + " " + lastName);
}
console.log (fullName("Shannon", "Hunter"));
//spells out my full name

//9. Write a function that takes and array of numbers and returns ture if the sum is greater than 100
function isSumGreaterThan100(numbers){
    let sum= 0;
    for(let i= 0; i < number.length; i++) {
        sum += numbers [i];
    }
    return sum > 100;
}

let numbers = [20,40.60];
let result=isSumGreaterThan100
console.log(true);
///result is true because 20+40+60=120 which is > 100

//10.array of numbers that takes the average
let numberArray = [1,3,6,9];
let total = 0;
for(i=0; i< numberArray.length;i++) {
    total += numberArray[i];
}
let average=total/numberArray.length;
console.log(`Average is ${average}`);
//average is 4.75

//11.dont understand how to do this one/cant find help omn Google or Slack

//12.Write a function willBuyDrink that takes boolean isHotOutside and number moneyinPocket and returns true if its hot outside and money is > 10.50 
let buyDrink = willBuyDrink(true, 12.00);
function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        console.log("true");
    } else {
        console.log("false");
    }
  }
///prints true because its hot and I have 12 dollars which is more than 10.50

//13.Create an array to see how much I spend of my weekly 1500 income if I buy a 4 dollar coffee every day for one week
let coffeeCost = 4;
let daysInWeek = 7;
let  weeklyIncome = 1500;

let  coffeeSpending = coffeeCost * daysInWeek;
let  percentageSpent = (coffeeSpending / weeklyIncome) * 100;

console.log(`I spend $${coffeeSpending} on coffee every week, which is ${percentageSpent.toFixed(2)}% of my weekly income.`);
//total is 28.00 a week spent on coffee






















