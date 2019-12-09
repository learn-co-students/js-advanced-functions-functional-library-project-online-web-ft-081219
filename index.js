const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        collection.forEach(e => callback(e))
      } else {
        for (const key in collection) {
          callback(collection[key], key, collection);
        }
      }
      return collection
    },

    map: function(collection, callback) {
      if (Array.isArray(collection)) {
        return collection.map(e => callback(e));
      } else {
        let newArray = [];
        for (const key in collection) {
          newArray.push(callback(collection[key], key, collection));
        }
        return newArray;
      }
    },

    reduce: function(collection, callback, acc) {
      if (acc === undefined) {
        return collection.reduce(callback);
      } else {
        return collection.reduce(callback, acc);
      }
    },

    find: function(collection, predicate) {
      return collection.find(e => predicate(e));
    },

    filter: function(collection, predicate) {
      return collection.filter(e => predicate(e));
    },

    size: function(collection) {
      let size = 0;
      if (Array.isArray(collection)) {
        collection.forEach(e => size++);
      } else {
        for (const key in collection) {
          size ++;
        }
      }
      return size;
    },
    
    first: function(array, n) {
      if (n === undefined) {
        return array[0];
      } else {
        return array.slice(0, n);
      }
    },

    last: function(array, n) {
      if (n === undefined) {
        return array.slice(-1)[0];
      } else {
        return array.slice(-n);
      }
    },

    compact: function(array) {
      return array.filter(e => e);
    },

    sortBy: function(array, callback) {
      let sorted = [...array];
      sorted.sort((a, b) => (callback(a) - callback(b)));
      return sorted;
    },

    flatten: function(array, shallow) {
      let flat = [];
      
      array.forEach( e => {
        if (Array.isArray(e)) {
          if (shallow === true) {
            for (let nested of e) {
              flat.push(nested);
            };
          } else {
            let flattened = this.flatten(e);
            for (let nested of flattened) {
              flat.push(nested);
            };
          };
        } else {
          flat.push(e);
        };
      });

      return flat;
    },

    uniq: function(array, isSorted = false, callback = (x) => x ) {
      const unique = [];

      array.forEach((element) => {
        let x = 0;
        unique.forEach((e) => {
          if (callback(element) === callback(e)) {
            x++;
          }
        })
        if (x < 1) {
          unique.push(element)
        }
      })

      return unique;
    },

    keys: function(obj) {
      let array = [];
      for (const key in obj) {
        array.push(key);
      }
      return array;
    },

    values: function(obj) {
      let array = [];
      for (const key in obj) {
        array.push(obj[key]);
      }
      return array;
    },

    functions: function(obj) {
      let array = [];
      for (const key in obj) {
        if (typeof obj[key] === "function") {
          array.push(key);
        }
      }
      return array;
    },


  }
})()

fi.libraryMethod()
