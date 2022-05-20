'use strict';
(function() {
    window.addEventListener('load', init);

    function init() {
let kitten = {
name: "Orange", // string
breedName: "Domestic Short hair", // string
meow: function() {
console.log(this.name + " says meow!"); // function
},
age: 3, // number
toys: ["mouse", "fuzzy hat", "shoe string"] // array
};
console.log(kitten.toys[1]); // fuzzy hat
kitten.meow(); // Orange says meow!
console.log(kitten["breedName"]); // Domestic Short hair
console.log(kitten.breedName); // Domestic Short hair   
    }
})();

