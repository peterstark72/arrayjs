"use strict";

exports.groupby = function (array, key) {
    /* 
        Takes an array and returns a map of keys and groups. 
        The key is a function that returns the key value for an element. 
    */
    var i,
        max,
        v,
        result = {};

    if (!array || !key) {
        throw new Error("Missing array and key parameters");
    }

    for (i = 0, max = array.length; i < max; i++) {
        v = key(array[i]);
        if (result.hasOwnProperty(v)) {
            result[v].push(array[i]);
        } else {
            result[v] = [array[i]];
        }
    }
    return result;
};


exports.sum = function (array, accessor) {
    // Returns the sum of all elements in the array
    var getvalue = accessor || function (d) {return d; };

    if (array === undefined) { return undefined; }
    if (array.length === 0) { return 0; }

    return array.reduce(function (a, b) {
        return a + getvalue(b);
    }, 0);
};

exports.set = function (array) {
    //Takes an array and returns set, unique values 
    var result = [],
        i,
        max;

    for (i = 0, max = array.length; i < max; i++) {
        if (result.indexOf(array[i]) === -1) {
            result.push(array[i]);
        }
    }
    return result;
};

exports.max = function (array, accessor) {
    //Returns max value from the array
    var getvalue = accessor || function (d) {return d; };

    if (array === undefined) { return undefined; }
    if (array.length === 0) { return 0; }

    return Math.max.apply(null, array.map(getvalue));
};

exports.min = function (array, accessor) {
    //Returns min value from the array
    var getvalue = accessor || function (d) {return d; };

    if (array === undefined) { return undefined; }
    if (array.length === 0) { return 0; }

    return Math.min.apply(null, array.map(getvalue));
};

exports.mean = function (array, accessor) {
    // Returns mean value of the array
    var getvalue = accessor || function (d) {return d; };

    if (array === undefined) { return undefined; }
    if (array.length === 0) { return 0; }

    return exports.sum(array, getvalue) / array.length;
};

exports.lastN = function (array, n) {
    // Returns last n item, n=0 returns the last item
    var index = n || 0;

    if (array === undefined) { return undefined; }
    if (array.length === 0) { return 0; }

    return array[array.length - 1 - index];
};


exports.count = function (array, accessor) {
    // Counts the number of elements in the array for which accessor is true
    var c = 0;

    var getvalue = accessor || function (d) {return d; };

    if (array === undefined) { return undefined; }
    if (array.length === 0) { return 0; }

    array.forEach(function (e) {
        if (getvalue(e)) {
            c++;
        }
    });
    return c;
};

exports.filter = function (array, accessor) {
    // Returns an array with the elements for which the accessor is true

    var e,
        result = [];

    if (array === undefined) { return undefined; }
    if (array.length === 0) { return 0; }

    for (e in array) {
        if (array.hasOwnProperty(e) && accessor(array[e]) === true) {
            result.push(array[e]);
        }
    }
    return result;
};

exports.sort = function (array, accessor, reverse) {
    // Sorts the array

    var getvalue = accessor || function (d) {return d; };

    if (array === undefined) { return undefined; }
    if (array.length === 0) { return []; }

    var compare = function (a, b) {
        if (getvalue(a) === getvalue(b)) {
            return 0;
        }
        if (getvalue(a) > getvalue(b)) {
            return reverse ? 1 : -1;
        }
        if (getvalue(a) < getvalue(b)) {
            return reverse ? -1 : 1;
        }
    };

    return array.sort(compare);
};

exports.aggregate = function (array, index, func) {
    /*
    
        Aggregates objects in an array based on a given index.

        - array, an array of objects
        - index, name of index
        - func, the function used to aggregate the values. It shuould take an array of values and return a result, eg sum([1,2,3]) -> 6

    */

    var i,
        itm,
        group,
        result = [];

    var grouped = exports.groupby(array, function (d) {return d[index]; });

    var attribs = exports.filter(Object.keys(array[0]), function (d) {return d !== index; }),
        numberOfAttribs = attribs.length;

    var getAttrib = function (d) {
        return d[this.attrib];
    };

    for (group in grouped) {
        if (grouped.hasOwnProperty(group)) {

            itm = {};
            itm[index] = group;
            for (i = 0; i < numberOfAttribs; i++) {
                itm[attribs[i]] = func(grouped[group].map(getAttrib.bind({attrib: attribs[i]})));
            }
            result.push(itm);
        }
    }

    return result;
};
