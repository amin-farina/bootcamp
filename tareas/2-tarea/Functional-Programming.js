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
      // 
// Ejercicio 6
// Ejercicio 6
// Ejercicio 6
// Ejercicio 6
// Ejercicio 6
// Ejercicio 6
// Ejercicio 6
// Ejercicio 6















