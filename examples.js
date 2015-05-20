var array = require('./array');


// Groupby

var a = [{name: "Peter"}, {name: "Edvin"}, {name: "Peter"}];

var grouped = array.groupby(a, function (d) {return d.name; });

console.log(grouped);


// Filter

var a = [{name: "Peter"}, {name: "Edvin"}, {name: "Peter"}];

var filtered = array.filter(a, function (d) {return d.name === "Edvin"; });

console.log(filtered);

// Sort

var a = [{name: "Adam"}, {name: "Calle"}, {name: "Boo"}];

var sorted = array.sort(a, function (d) {return d.name; });

console.log(sorted);


// Aggretate

var a = [{name: "Adam", value: 5}, {name: "Calle", value: 5}, {name: "Boo", value: 5}, {name: "Boo", value: 5}, {name: "Calle", value: 7}];

var agg = array.aggregate(a, 'name', array.sum);

console.log(agg);