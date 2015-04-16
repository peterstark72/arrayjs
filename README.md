# ArrayJS

A few JavaScript functions to work with arrays, such as SUM, FILTER and GROUPBY


## Examples

```javascript
var array = require('./array');

var a = [{name: "Peter"}, {name: "Edvin"}, {name: "Peter"}];

var grouped = array(a, function (d) {return d.a; });
```

Now ```grouped``` is:

```javascript
{Peter: [{name: "Peter"}, {name: "Peter"}, "Edvin": [{name: "Edvin"}]}
```

