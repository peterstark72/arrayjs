# ArrayJS

A few JavaScript functions to work with arrays, such as sum(), filter() and groupby().


Here are som examples.

### Groupby

```javascript
var array = require('./array');

var a = [{name: "Peter"}, {name: "Edvin"}, {name: "Peter"}];

var grouped = array.groupby(a, function (d) {return d.name; });

console.log(grouped);
```

Now ```grouped``` is:

```javascript
{ Peter: [ { name: 'Peter' }, { name: 'Peter' } ],
  Edvin: [ { name: 'Edvin' } ] }
```

### Filter

```javascript
var a = [{name: "Peter"}, {name: "Edvin"}, {name: "Peter"}];

var filtered = array.filter(a, function (d) {return d.name === "Edvin"; });
```

Now ```filtered``` is ```[ { name: 'Edvin' } ]```.



