var array = require('./array');

var a = [{name: "Peter"}, {name: "Edvin"}, {name: "Peter"}];

var grouped = array.groupby(a, function (d) {return d.name; });

console.log(grouped);


var a = [{name: "Peter"}, {name: "Edvin"}, {name: "Peter"}];

var filtered = array.filter(a, function (d) {return d.name === "Edvin"; });

console.log(filtered);


