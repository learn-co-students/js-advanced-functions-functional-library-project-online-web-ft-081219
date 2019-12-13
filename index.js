const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], [i], collection);
        }
        // for (const element of collection) {
        //   callback(element, collection)
        // }
      } else {
        for (const key in collection) {
          callback(collection[key], key, collection);
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          newCollection.push(callback(collection[i], [i], collection));
        }
      } else {
        for (const key in collection) {
          newCollection.push(callback(collection[key], key, collection));
        }
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      if (acc === undefined) {
        let total = collection[0]
        for (let i = 1; i < collection.length; i++) {
          total = callback(total, collection[i], collection);
        }
        return total
      } else {
        let total = acc
        for (const element of collection) {
          total = callback(total, element, collection)
        }
        return total
      }
    },

    find: function (collection, predicate) {
      for (const element of collection) {
        if (!!predicate(element)) {
          return element
        }
      }
    },

    filter: function (collection, predicate) {
      let newArr = []
      for (const element of collection) {
        if (!!predicate(element)) {
          newArr.push(element);
        }
      }
      return newArr
    },

    size: function (collection) {
      return Object.values(collection).length
    },

    first: function(array, n) {
      if (n === undefined) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n) {
      if (n === undefined) {
        return array.slice(-1)[0]
      } else {
        return array.slice(-n)
      }
    },

    compact: function(array) {
      let newArr = []
      for (const element of array) {
        if (!!element) {
          newArr.push(element);
        }
      }
      return newArr;
    },

    sortBy: function(array, callback) {
      let sortedArray = [...array];
      sortedArray.sort(function (a, b) { return callback(a) - callback(b) });
      return sortedArray;
    },

    flatten: function(collection, shallow) {
      let flattenedCollection = [];

      for (const element of collection) {
        if (Array.isArray(element)) {
          if (shallow === true) {
            for (let nestedEl of element) {
              flattenedCollection.push(nestedEl);
            };
          } else {
            let result = this.flatten(element);
            for (let nestedEl of result) {
              flattenedCollection.push(nestedEl);
            };
          };
        } else {
          flattenedCollection.push(element);
        };
      };

      return flattenedCollection;
    },

    functions: function() {

    },

    uniq: function(collection, isSorted = false, callback = (x) => x ) {
      const uniqueCollection = [];

      for (const i of collection) {
        let counter = 0;
        for (const n of uniqueCollection) {
          if (callback(n) === callback(i)) {
            counter++;
          };
        };
        if (counter < 1) {
          uniqueCollection.push(i);
        };
      };

      return uniqueCollection;
    },

    keys: function(object) {
      let newArr = []
      for (const k in object) {
        newArr.push(k)
      }
      return newArr
    },

    values: function(object) {
      let newArr = []
      for (const k in object) {
        newArr.push(object[k])
      }
      return newArr
    },

    functions: function(object) {
      let newArr = [];
      for (let p in object) {
        if (typeof object[p] === "function") {
          newArr.push(p);
        }
      }
      return newArr;
    }
  }
})()

fi.libraryMethod()
