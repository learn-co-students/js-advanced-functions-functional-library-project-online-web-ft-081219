const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (const [index, element] of collection.entries()) {
          callback(element, index, collection);
        };
      } else {
        for(const key in collection) {
          callback(collection[key], key, collection);
        };
      }
      return collection;
    },

    map: function(collection, callback) {
      const holder = [];
      if (Array.isArray(collection)) {
        for (const [index, element] of collection.entries()) {
          holder.push(callback(element, index, collection))
        };
      } else {
        for (const key in collection) {
          holder.push(callback(collection[key], key, collection));
        };
      };
      return holder;
    },

    reduce: function(collection, callback, acc) {
      let newAcc = acc;
      let collectionSlice = collection;
      if (acc === undefined) {
        newAcc = collection[0];
        collectionSlice = collection.slice(1);
      };
      for (const element of collectionSlice) {
        newAcc = callback(newAcc, element, collection);
      }
      return newAcc;
    },

    find: function(collection, predicate) {
      for (const element of collection) {
        if (predicate(element)) {
          return element
        };
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      const holder = [];
      for (const element of collection) {
        if (predicate(element)) {
          holder.push(element);
        };
      }
      return holder;
    },

    size: function(collection) {
      let counter = 0;
      for (const element in collection) {
        counter ++;
      };
      return counter;
    },

    first: function(array, n) { 
      if (n !== undefined) {
        return array.slice(0,n);
      };
      return array[0]
    },

    last: function(array, n) {
      if (n !== undefined) {
        return array.slice(n * -1);
      };
      return array[fi.size(array)-1];
    },

    compact: function(array) {
      const holder = [];
      for (const element of array) {
        if (element) {
          holder.push(element);
        };
      };
      return holder;
    },

    sortBy: function(array, callback) {
      return [...array].sort((a,b) => callback(a) - callback(b))
    },

    flatten: function(array, condition=false) {
      const holder = [];
      if (condition) {
        for (const element of array) {
          if (!Array.isArray(element)) {
            holder.push(element);
          } else {
            for (const e of element) {
              holder.push(e);
            }
          }
        };
      } else {
        function dive(array) {
          for (const element of array) {
            if (!Array.isArray(element)) {
              holder.push(element);
            } else {
              dive(element);
            }  
          }
        };
        dive(array);
      }
      return holder;
    },

    uniq: function(array, isSorted, callback) {
      const holder = [];
      let evalArray = [...array];
      if (!!callback) {
        evalArray = fi.map(array, callback);
      };
      for (const element of evalArray) {
        if (fi.find(holder,((obj)=>element===obj)) === undefined) {
          holder.push(element);
        }
      };
      return holder;
    },

    keys: function(object) {
      const holder=[];
      for (const key in object) {
        holder.push(key);
      };
      return holder
    },

    values: function(object) {
      const holder=[];
      for (const key in object) {
        holder.push(object[key]);
      };
      return holder;
    },

    functions: function(object) {
      const holder=[];
      for (const key in object) {
        if (typeof object[key]==='function') {
          holder.push(key)
        }
      }
      return holder;
    },


  }
})()

fi.libraryMethod()
