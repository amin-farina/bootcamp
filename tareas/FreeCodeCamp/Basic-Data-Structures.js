// BASIC DATA STRUCTURES



//Ejercicio 1
    // Use an Array to Store a Collection of Data
        let yourArray = [9, "Amin", true, "complete", "hello world"] 


//Ejercicio 2
    // Access an Array's Contents Using Bracket Notation
        let myArray = ["a", "b", "c", "d"];
        myArray[1]= "ba"
        console.log(myArray);


//Ejercicio 3
    // Add Items to an Array with push() and unshift()
        function mixedNumbers(arr) {
            arr.unshift('I', 2, 'three'); //BEFORE
            arr.push(7,'VIII' , 9); //AFTER
            return arr;
        }
        console.log(mixedNumbers(['IV', 5, 'six']));


//Ejercicio 4
    // Remove Items from an Array with pop() and shift()
        function popShift(arr) {
            let popped = arr.pop(); // latest element
            let shifted = arr.shift(); // first element
            return [shifted, popped];
        }
        console.log(popShift(['challenge', 'is', 'not', 'complete']));


//Ejercicio 5
    // Remove Items Using splice()
        const arr = [2, 4, 5, 1, 7, 5, 2, 1];
        arr.splice(1,4)
        console.log(arr);


//Ejercicio 6
    // Add Items Using splice()
        function htmlColorNames(arr) {
            arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond')
            return arr;
        }
        console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


//Ejercicio 7
    // Copy Array Items Using slice()
        function forecast(arr) {  
            return arr.slice(2,4);
        }
        console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


//Ejercicio 8
    // Copy an Array with the Spread Operator
        function copyMachine(arr, num) {
            let newArr = [];
            while (num >= 1) {
            newArr.push([...arr])
            num--;
            }
            return newArr;
        }
        console.log(copyMachine([true, false, true], 2));


//Ejercicio 9
    // Combine Arrays with the Spread Operator
        function spreadOut() {
            let fragment = ['to', 'code'];
            let sentence= ['learning', ...fragment , 'is', 'fun'];
            return sentence;
        }
        console.log(spreadOut());


//Ejercicio 10
    // Check For The Presence of an Element With indexOf()
        function quickCheck(arr, elem) {
            return arr.indexOf(elem) == -1 ? false : true;
        }
        console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


//Ejercicio 11
    // Iterate Through All an Array's Items Using For Loops
        function filteredArray(arr, elem) {
            let newArr = [];
            let band = false;
            for (let i=0; i < arr.length; i++){
            for (let j = 0; j < arr[i].length; j++){
                if(arr[i][j] == elem){
                band = true
                }
            }
            band == false ? newArr.push(arr[i]): band=false;
            }
            return newArr;
        }
        console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

        // Other solution
        function filteredArray(arr, elem) {
            let newArr = [];
            for (let i=0; i < arr.length; i++){
              if (arr[i].indexOf(elem) == -1){
                newArr.push(arr[i])
              }
            }
            return newArr;
          }
          console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


//Ejercicio 12
    // Create complex multi-dimensional arrays
        let myNestedArray = [
            'level 1',                      // myNestedArray[0]       
            ['level 2'],	                // myNestedArray[1][0]
            [['level 3','deep']],	        // myNestedArray[2][0][0]
            [[['level 4','deeper']]],       // myNestedArray[3][0][0][0]
            [[[['level 5','deepest']]]]     // myNestedArray[4][0][0][0][0]
        ];


//Ejercicio 13
    // Add Key-Value Pairs to JavaScript Objects
        let foods = {
            apples: 25,
            oranges: 32,
            plums: 28
        };
        foods.bananas = 13;
        foods['grapes'] = 35;
        foods.strawberries = 27;     
        console.log(foods);


//Ejercicio 14
    // Modify an Object Nested Within an Object
        let userActivity = {
            id: 23894201352,
            date: 'January 1, 2017',
            data: {
            totalUsers: 51,
            online: 42
            }
        };
        userActivity.data.online = 45 //Modify attribute
        console.log(userActivity);


//Ejercicio 15
    // Access Property Names with Bracket Notation
        let foods = {
            apples: 25,
            oranges: 32,
            plums: 28,
            bananas: 13,
            grapes: 35,
            strawberries: 27
        };
        function checkInventory(scannedItem) {
            return foods[scannedItem]
        }
        console.log(checkInventory("apples"));

//Ejercicio 16
    // Use the delete Keyword to Remove Object Properties
        let foods = {
            apples: 25,
            oranges: 32,
            plums: 28,
            bananas: 13,
            grapes: 35,
            strawberries: 27
        };
            delete foods.oranges;
            delete foods.plums;
            delete foods.strawberries;
        console.log(foods);


//Ejercicio 17
    // Check if an Object has a Property
        let users = {
            Alan: {age: 27,online: true},
            Jeff: {age: 32,online: true},
            Sarah: {age: 48,online: true},
            Ryan: {age: 19,online: true}
        };
        function isEveryoneHere(userObj) {
            if(
            userObj.hasOwnProperty('Alan') &&
            userObj.hasOwnProperty('Jeff') &&
            userObj.hasOwnProperty('Sarah') &&
            userObj.hasOwnProperty('Ryan')
            ){
            return true
            }else{
            return false
            }
        }
        console.log(isEveryoneHere(users));


//Ejercicio 18
    // Iterate Through the Keys of an Object with a for...in Statement
        const users = {
            Alan: {online: false},
            Jeff: {online: true},
            Sarah: {online: false}
        }
        function countOnline(usersObj) {
            let tot = 0;
            for(let user in usersObj){
                if(usersObj[user].online == true){
                    tot += 1;
                }
            }
            return tot
        }
        console.log(countOnline(users));


//Ejercicio 19
    // Generate an Array of All Object Keys with Object.keys()
        let users = {
            Alan: {age: 27,online: false},
            Jeff: {age: 32,online: true},
            Sarah: {age: 48,online: false},
            Ryan: {age: 19,online: true}
        };
        
        function getArrayOfUsers(obj) {
            return Object.keys(obj)
        }
        console.log(getArrayOfUsers(users));


//Ejercicio 20
    // Modify an Array Stored in an Object
        let user = {
            name: 'Kenneth',
            age: 28,
            data: {
            username: 'kennethCodesAllDay',
            joinDate: 'March 26, 2016',
            organization: 'freeCodeCamp',
            friends: [
                'Sam',
                'Kira',
                'Tomo'
            ],
            location: {
                city: 'San Francisco',
                state: 'CA',
                country: 'USA'
            }
            }
        };
        
        function addFriend(userObj, friend) {
            userObj.data.friends.push(friend)
            return userObj.data.friends
      }
      
      
