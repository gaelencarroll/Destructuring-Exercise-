// prior to destructuring
const teaOrder = {
    variety: 'oolong',
    teaName : 'winter sprout',
    origin : 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 3
}

// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;

// const {price, quantity, teaName, ...others} = teaOrder;
// const {origin} = teaOrder;

const {brewTemp = 175} = teaOrder; // define new key and value
const {teaName: tea} = teaOrder; // rename

function checkout(tea){
    const {quantity = 1, price} = tea;
    return quantity * price;
}

const order1 = {
    variety: 'green',
    teaName : 'silver needle',
    origin : 'taiwan',
    price: 12.99,
    hasCaffeine: true
}

const students = [
    {name : 'Drake', gpa : 4.0},
    {name : 'Henrietta', gpa : 3.8},
    {name : 'Harry', gpa : 3.7},
    {name : 'Morgan', gpa : 3.5},
    {name : 'Jake', gpa : 3.4}
];

const [topStudent, secondBest,,fourth] = students;



const order2 = {
    variety: 'green',
    teaName : 'silver needle',
    origin : 'taiwan',
    price: 12.99,
    hasCaffeine: true
}

function getTotal({quantity: qty = 1, price}){
    return qty * price;
}

const longJumpResults = ['Tammy', 'Jessica', 'Violet'];
const swimMeetResults = ['Japan', 'France', 'Chile'];
function awardMedals ([gold,silver,bronze]){
    return{
        gold,
        silver,
        bronze
    };
};

movie = {
    name : 'Amadeus',
    rated : {
        rating : 'R',
        advisory : 'rated R for brief nudity'
    },
    runtime : '160 min',
    versions : [
        {version : 'Original Release', runtime : 161},
        {version : "Director's Cut", runtime : 180}
    ],
    ratings : [
        {Source : 'Internet Movie Database', Value : '8.3/10'},
        {Source : 'Rotten Tomatoes', Value : '93%'},
        {Source : 'Metacritic', Value : '88/100'}
    ]
}

// const {rated} = movie;
// const {rating, advisory} = rated;

const { rated : { rating, advisory : note } } = movie;
const { 
    ratings : [ 
        { Value : imdbRating }, 
        { Value : rtRating }, 
        { Value : metaRating } 
    ],
    versions : [ 
        {runtime : originalRuntime}, 
        {runtime : directorsCutRuntime} 
    ] 
} = movie;


let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream';

// let temp = delicious;
// delicious = disgusting;
// disgusting = temp;

// let both = [delicious, disgusting];
// [disgusting, delicious] = both;

[delicious, disgusting] = [disgusting, delicious]