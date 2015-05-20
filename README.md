# ArrayJS

A few JavaScript functions to work with arrays, such as sum(), filter() and groupby().


Here are som examples.

### Groupby

```javascript
var array = require('./array');

var a = [{name: "Peter"}, {name: "Edvin"}, {name: "Peter"}];

var grouped = array.groupby(a, function (d) {return d.name; });
```

Now ```grouped``` is:

```javascript
{ Peter: [ { name: 'Peter' }, { name: 'Peter' } ],
  Edvin: [ { name: 'Edvin' } ] }
```

### Filter

```javascript
var array = require('./array');

var a = [{name: "Peter"}, {name: "Edvin"}, {name: "Peter"}];

var filtered = array.filter(a, function (d) {return d.name === "Edvin"; });
```

Now ```filtered``` is ```[ { name: 'Edvin' } ]``.


### Sort

```javascript
var a = [{name: "Adam"}, {name: "Calle"}, {name: "Boo"}];

var sorted = array.sort(a, function (d) {return d.name; });
```

Now ```sorted``` is:
```
[ { name: 'Calle' }, { name: 'Boo' }, { name: 'Adam' } ]
```

### Aggregate

```javascript
var a = [{name: "Adam", value: 5}, {name: "Calle", value: 5}, {name: "Boo", value: 5}, {name: "Boo", value: 5}, {name: "Calle", value: 7}];

var agg = array.aggregate(a, 'name', array.sum);
```

Now ```agg``` is:

```javascript
[ { name: 'Adam', value: 5 },
  { name: 'Calle', value: 12 },
  { name: 'Boo', value: 10 } ]
```