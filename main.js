
// // var arr = [1,2,3,4];
// // var arr2 = arr.slice(0,1);
// // console.log(arr2);
// var heroes = ['superman', 'batman', 'flash'];
// // add 'wonderwoman' to the end
// heroes.push('wonderwoman');
// // remove 'superman' and store him in a variable called firstHero
// var firstHero = heroes.shift();
// // add 'spongebob' to the start of the array
// heroes.unshift('spongebob');
// // remove 'flash' from the array and store him in a variable called secondHero
// var secondHero = heroes.pop();
// // leave batman in the array but put a copy of him on a variable called thirdHero
// var thirdHero = heroes.slice(-1);
var snake = {
    sliters: 'sideways',
    eats: 'rodents',
    says: 'ssss',
    smells: 'heat',
    runs: 'legless'
};
for(var x in snake){
    if(x[0] === 's'){

        console.log(x);
    }
};
console.log(snake);


// console.log(arr);