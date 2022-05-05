// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  }

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const list1 = [];
array.forEach(content=>{
      list1.push({username:content.username+"!",team:content.team,score:content.score,items:content.items});
});

console.log('forEach',list1);


//Create an array using map that has all the usernames with a "? to each of the usernames
const list2 = [];
const mapArray = array.map(content => {
     return list2.push({username:content.username+"?",team:content.team,score:content.score,items:content.items});
});

console.log('map',list2);


//Filter the array to only include users who are on team: red
const filterArray = array.filter(content => {
  return content.team === 'red';
});

console.log('filter',filterArray);


//Find out the total score of all users using reduce
const reduceArray = array.reduce((cum,content) =>{
  return cum + content.score;
},0);

console.log('reduce',reduceArray);

// (1), what is the value of i? i is an index which counts the 6-elements in arrayNum from (0-5)
// (2), Make this map function pure:

// pureFunction = (arrayNum=[]) =>{
//   var newArray = [];
//   for (var i=0; i < arrayNum.length; i++){
//     console.log(arrayNum[i], i);
//     alert(arrayNum[i]);
//     newArray.push(arrayNum[i]*2);
//   }  
//   return newArray; 
// }

pureFunction = (arrayNum=[]) =>{
  const newArray = arrayNum.map((num, i) => {  
    console.log(num, i);
    alert(num);
    return num * 2;   
  }); 
}

pureFunction([1, 2, 4, 5, 8, 9]);

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {  
// 	console.log(num, i);
// 	alert(num);
// 	return num * 2;
// })


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const list3 = [];
const newItems = [];
mapArray = array.map(content => {
    return list3.push({username:content.username,team:content.team,score:content.score,items:content.items.map((itemCont)=>newItems.push(itemCont + "!"))});        
    
});

console.log('map',list3);
