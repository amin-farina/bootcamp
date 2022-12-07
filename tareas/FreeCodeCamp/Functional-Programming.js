// Exercise Functional Programming

// Ejercicio 1
    // Learn About Functional Programming

      const prepareTea = () => 'greenTea';
      const getTea = (numOfCups) => {
        const teaCups = [];
        for(let cups = 1; cups <= numOfCups; cups += 1) {
          const teaCup = prepareTea();
          teaCups.push(teaCup);
        }
        return teaCups;
      };
      const tea4TeamFCC = getTea(40); //-> En este apartado especifico la cantidad de cups a tomar.


// Ejercicio 2
    //Understand Functional Programming Terminology
      const prepareGreenTea = () => 'greenTea';
      const prepareBlackTea = () => 'blackTea';
      const getTea = (prepareTea, numOfCups) => {
        const teaCups = [];
        for(let cups = 1; cups <= numOfCups; cups += 1) {
          const teaCup = prepareTea();
          teaCups.push(teaCup);
        }
        return teaCups;
      };
      const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
      const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
      console.log( tea4GreenTeamFCC,tea4BlackTeamFCC);
   
// Ejercicio 3
    // Understand the Hazards of Using Imperative Code
    
        const Window = function(tabs) {
          this.tabs = tabs; // We keep a record of the array inside the object
        };

        Window.prototype.join = function(otherWindow) {
          this.tabs = this.tabs.concat(otherWindow.tabs);
          return this;
        };
        Window.prototype.tabOpen = function(tab) {
          this.tabs.push('new tab'); // Let's open a new tab for now
          return this;
        };

        Window.prototype.tabClose = function(index) {

          this.tabs.splice(index, 1) // -> only delete element for list

          return this;
         };

        const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
        const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
        const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

        const finalTabs = socialWindow
          .tabOpen() // Open a new tab for cat memes
          .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
          .join(workWindow.tabClose(1).tabOpen());
        console.log(finalTabs.tabs);



// Ejercicio 4
      // Avoid Mutations and Side Effects Using Functional Programming
        let fixedValue = 4;
        function incrementer() {
          return fixedValue + 1;  // ->Thefunction "incrementer" should not change the value of fixedValue
        }
        

// Ejercicio 5
      // Pass Arguments to Avoid External Dependence in a Function
      let fixedValue = 4;  // <-- Global variable
      function incrementer(value) {
        return value + 1;
      }


// Ejercicio 6
      // Refactor Global Variables Out of Functions
      
          var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
          function add(arr, bookName) {
            let newArr = [...arr]; 
            newArr.push(bookName);
            return newArr; 
          }
          function remove(arr, bookName) {
            let newArr = [...arr];
            if (newArr.indexOf(bookName) >= 0) {
              newArr.splice(newArr.indexOf(bookName), 1);
              return newArr; 
            }
          }
          var newBookList = add(bookList, 'A Brief History of Time');
          var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
          var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
          console.log(bookList);


// Ejercicio 7
      // Use the map Method to Extract Data from an Array
      
          const ratings = watchList.map(movie => ({   // WatchList it is a JSON with movie attributes
            "title": movie.Title,
            "rating": movie.imdbRating})
          );
          console.log(JSON.stringify(ratings));


// Ejercicio 8
        // Implement map on a Prototype
      
      Array.prototype.myMap = function(callback) {
        const newArray = [];
        for (let i = 0; i < this.length; i++) {
          newArray.push(callback(this[i], i, this));
        }
        return newArray;
      };


// Ejercicio 9
        // Use the filter Method to Extract Data from an Array
            // WatchList it is a JSON with movie attributes
            const filteredList = watchList
             .filter(({ imdbRating }) => imdbRating >= 8.0)
              .map(({ Title: title, imdbRating: rating }) => ({ title, rating }));
            console.log(filteredList);


// Ejercicio 10
        // Implement the filter Method on a Prototype
            Array.prototype.myFilter = function(callback) {
              const newArray = [];
              for (let i = 0; i < this.length; i++) {
                if (Boolean(callback(this[i], i, this)) === true) {
                  newArray.push(this[i]);
                }
              }
              return newArray;
            };

// Ejercicio 11
        // Return Part of an Array Using the slice Method
            function sliceArray(anim, beginSlice, endSlice) {
                return anim.slice(beginSlice, endSlice)
            }
            const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
            sliceArray(inputAnim, 1, 3);

// Ejercicio 12
        // Remove Elements from an Array Using slice Instead of splice

            function nonMutatingSplice(cities) {
              let newCities = cities; // or [...cities]
              return newCities.slice(0,3);
            }

            const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
            nonMutatingSplice(inputCities);

// Ejercicio 13
        // Combine Two Arrays Using the concat Method
            function nonMutatingConcat(original, attach) {
                return original.concat(attach)
            }
            const first = [1, 2, 3];
            const second = [4, 5];
            nonMutatingConcat(first, second);


// Ejercicio 14
        // Add Elements to the End of an Array Using concat Instead of push
            function nonMutatingPush(original, newItem) {
              return original.concat(newItem);
            }
            const first = [1, 2, 3];
            const second = [4, 5];
            nonMutatingPush(first, second);


// Ejercicio 15
        // Use the reduce Method to Analyze Data
            // WatchList it is a JSON with movie attributes
            function getRating(watchList) {
              let averageRating;
              let totalMovies =  watchList.filter(movie => movie.Director == "Christopher Nolan").length;
              let filterList = watchList
              .filter(movie => movie.Director == "Christopher Nolan")
              .map (movie => Number(movie.imdbRating))
              .reduce((sumaTot, rating) => sumaTot + rating );
              averageRating = filterList / totalMovies
              // Only change code above this line
              return averageRating;
            }
            console.log(getRating(watchList));


// Ejercicio 16
        // Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
        const squareList = arr => {
          let numInt = arr
          .filter(numero => ((Number.isInteger(numero) == true) && numero >=0))
          .reduce((resultado,numero) => {
            return resultado.concat(numero*numero)
            }, [] )
            arr = numInt
          return arr;
        };
        const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
        console.log(squaredIntegers);


// Ejercicio 17
        // Sort an Array Alphabetically using the sort Method
            function alphabeticalOrder(arr) {
              return arr.sort(function(a,b){
                return a === b ? 0 : a < b ? -1 : 1;
              })
            }
            alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


// Ejercicio 18
        // Return a Sorted Array Without Changing the Original Array
            const globalArray = [5, 6, 3, 2, 9];
            function nonMutatingSort(arr) {
              let newArr = [...arr];
              return newArr.sort(function (a,b) {
                return a-b
              })
            }
            nonMutatingSort(globalArray);


// Ejercicio 19
        // Split a String into an Array Using the split Method
            function splitify(str) {
              return str.split(/\W/)
            }
            splitify("Hello World,I-am code");


// Ejercicio 20
        // Combine an Array into a String Using the join Method
            function sentensify(str) {
              return str
              .split(/\W/)
              .join(" ")
            }
            sentensify("May-the-force-be-with-you");

// Ejercicio 21
        // Apply Functional Programming to Convert Strings to URL Slugs
            function urlSlug(title) {
              return title.toLowerCase().trim().split(/\s+/).join("-");  // trim() -> Delete spacing
            }
            urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

// Ejercicio 22
        // Use the every Method to Check that Every Element in an Array Meets a Criteria
            function checkPositive(arr) {
              return arr.every(function (current){
                return current >= 0;
              })
            }
            checkPositive([1, 2, 3, -4, 5]);

// Ejercicio 23
        // Use the some Method to Check that Any Elements in an Array Meet a Criteria
            function checkPositive(arr) {
              return arr.some(function(current){
                return current >= 0
              })
            }
            checkPositive([1, 2, 3, -4, 5]);


// Ejercicio 24
        // Introduction to Currying and Partial Application
            function add(x) {
              return function(y){
                return function(z){
                  return x + y + z 
                }
              }
            }

            add(10)(20)(30);
