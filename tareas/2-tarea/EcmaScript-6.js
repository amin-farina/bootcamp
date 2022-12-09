// ES6 or ECMAScript


// Ejercicio 1
      // Compare Scopes of the var and let Keywords
          function checkScope() {
            let i = 'function scope';
            if (true) {
              let i = 'block scope';
              console.log('Block scope i is: ', i);
           }
           console.log('Function scope i is: ', i);
           return i;
           }


// Ejercicio 2
      // Mutate an Array Declared with const
          const s = [5, 7, 2];
          function editInPlace() {
            s[0]=2;
            s[1]=5;
            s[2]=7;
          }
          editInPlace();
          

// Ejercicio 3
      // Prevent Object Mutation
          function freezeObj() {
          const MATH_CONSTANTS = {
            PI: 3.14
          };
          Object.freeze(MATH_CONSTANTS);

          try {
            MATH_CONSTANTS.PI = 99;
          } catch(ex) {
            console.log(ex);
          }
          return MATH_CONSTANTS.PI;
        }
        const PI = freezeObj();


// Ejercicio 4
      // Use Arrow Functions to Write Concise Anonymous Functions
          const magic = () => new Date();

// Ejercicio 5
      // Write Arrow Functions with Parameters
          const myConcat = (arr1, arr2) => arr1.concat(arr2);
          console.log(myConcat([1, 2], [3, 4, 5]));


// Ejercicio 6
      // Set Default Parameters for Your Functions
          const increment = (number, value = 1 ) => number + value;

// Ejercicio 7
      // Use the Rest Parameter with Function Parameters
          const sum = (...args) => {
            return args.reduce((a, b) => a + b, 0);
          }
          

// Ejercicio 8
      // Use the Spread Operator to Evaluate Arrays In-Place
        const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
        let arr2;
        arr2 = [...arr1];  
        console.log(arr2);

// Ejercicio 9
      // Use Destructuring Assignment to Extract Values from Objects
        const HIGH_TEMPERATURES = {
          yesterday: 75,
          today: 77,
          tomorrow: 80
        };
        const {today, tomorrow} = HIGH_TEMPERATURES;


// Ejercicio 10
      // Use Destructuring Assignment to Assign Variables from Objects
          const HIGH_TEMPERATURES = {
            yesterday: 75,
            today: 77,
            tomorrow: 80
          };
          const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES


// Ejercicio 11
      // Use Destructuring Assignment to Assign Variables from Nested Objects
          const LOCAL_FORECAST = {
            yesterday: { low: 61, high: 75 },
            today: { low: 64, high: 77 },
            tomorrow: { low: 68, high: 80 }
          };
          const {today: {low:lowToday, high:highToday } } = LOCAL_FORECAST


// Ejercicio 12
      // Use Destructuring Assignment to Assign Variables from Arrays
          let a = 8, b = 6;
          [a,b] = [b,a]


// Ejercicio 13
      // Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
          function removeFirstTwo(list) {
            const [a, b, ...shorterList]= list; // Change this line
            return shorterList;
          }
          const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          const sourceWithoutFirstTwo = removeFirstTwo(source);


// Ejercicio 14
      // Use Destructuring Assignment to Pass an Object as a Function's Parameters
          const stats = {
            max: 56.78,
            standard_deviation: 4.34,
            median: 34.54,
            mode: 23.87,
            min: -0.75,
            average: 35.85
          };
          const half = ({max,min}) => (max + min) / 2.0; 


// Ejercicio 15
      // Create Strings using Template Literals
          const result = {
            success: ["max-length", "no-amd", "prefer-arrow-functions"],
            failure: ["no-var", "var-on-top", "linebreak"],
            skipped: ["no-extra-semi", "no-dup-keys"]
          };
          function makeList(arr) {
            const failureItems = [];
            for (let i=0; i< arr.length; i++){
             failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
            }
            return failureItems;
          }
          const failuresList = makeList(result.failure);


// Ejercicio 16
      // Write Concise Object Literal Declarations Using Object Property Shorthand
          const createPerson = (name, age, gender) => {
            return {
              name,
              age,
              gender
            };
          };

// Ejercicio 17
      // Write Concise Declarative Functions with ES6
          const bicycle = {
            gear: 2,
            setGear(newGear) {
              this.gear = newGear;
            }
          };
          bicycle.setGear(3);
          console.log(bicycle.gear);

// Ejercicio 18
      // 


// Ejercicio 19


// Ejercicio 20


// Ejercicio 21


// Ejercicio 22


// Ejercicio 23


// Ejercicio 24


// Ejercicio 25


// Ejercicio 26


// Ejercicio 27


// Ejercicio 28


// Ejercicio 29

