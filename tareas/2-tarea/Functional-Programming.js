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
              .reduce((suma, rating) => suma + rating );
              averageRating = filterList / totalMovies
              // Only change code above this line
              return averageRating;
            }
            console.log(getRating(watchList));


// Ejercicio 16
// Ejercicio 17
// Ejercicio 18
// Ejercicio 19
// Ejercicio 20
// Ejercicio 21
// Ejercicio 22
// Ejercicio 23
// Ejercicio 24
















