// Ejercicio 1
        // Comment
        /* Comment multiline  */
// Ejercicio 2
        // Declare Variables
        var myName;

// Ejercicio 3
        // Storin values in variables
        myName = "Amin"

// Ejercicio 4
        // Assigning the Value of One Variable to Another
        copyName = myName;

// Ejercicio 5
        // Initializing Variables with the Assignment Operator
        var num = 9;

// Ejercicio 6
        // Declare String Variables
        var myFirstName = "Amin"
        var myLastName = "Fariña"

// Ejercicio 7
        // Understanding Uninitialized Variables
        var a = 5;
        var b = 10;
        var c = "I am a";
        //---------------
        a = a + 1;
        b = b + 5;
        c = c + " String!";

// Ejercicio 8
        //Understanding Case Sensitivity in Variables
        var sTUDYLYcAr; // NO!
        var studyCar; // YES!
        // and we will call exactly the same as we declared it, to use

// Ejercicio 9
        // Explore Differences Between the var and let Keywords
        var catNames = "Oliver";
        // change for let
        let catName = "Oliver";

// Ejercicio 10
        // Declare a Read-Only Variable with the const Keyword
        const FCC = "freeCodeCamp"; 
        let fact = "is cool!"; 
        fact = "is awesome!";
        console.log(FCC, fact);

// Ejercicio 11
        // Add Two Numbers
        const sum = 10+10;

// Ejercicio 12
        // Subtract One Number from Another
        const differnce = 45-12;

// Ejercicio 13
        // Multiply Two Numbers
        const product = 8 * 10;

// Ejercicio 14
        // Divide One Number by Another
        const quotient = 66 / 33;

// Ejercicio 15
        // Increment a Number
        let myVar = 87;
        myVar++;

// Ejercicio 16
        // Decrement a Number
        let myVar2 = 11;
        myVar2--;

// Ejercicio 17
        // Create Decimal Numbers
        let myDecimal = 0.7

// Ejercicio 18
        // Multiply Two Decimals
        const product2 = 2.0 * 2.5;

// Ejercicio 19
        // Divide One Decimal by Another
        const quotient2 = 4.4/2.0;2

// Ejercicio 20
        // Finding a Remainder
        const remainder = 11%3;

// Ejercicio 21
        // Compound Assignment With Augmented Addition
        let a = 3;
        let b = 17;
        let c = 12;
        a += 12;
        b += 9;
        c += 7;

// Ejercicio 22
        // Compound Assignment With Augmented Subtraction
        let a = 11;
        let b = 9;
        let c = 3;
        a -= 6;
        b -= 15;
        c -= 1;

// Ejercicio 23
        // Compound Assignment With Augmented Multiplication
        let a = 5;
        let b = 12;
        let c = 4.6;
        a *= 5;
        b *= 3;
        c *= 10;

// Ejercicio 24
        // Compound Assignment With Augmented Division
        let a = 48;
        let b = 108;
        let c = 33;
        a /= 12;
        b /= 4;
        c /= 11;

// Ejercicio 25
        // Escaping Literal Quotes in Strings
        const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// Ejercicio 26
        // Quoting Strings with Single Quotes
        const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Ejercicio 27
        // Escape Sequences in Strings
        /* 
        \' Single quote
        \" Double quote
        \\ backlash
        \n newline
        \t tab
        \r carriage return
        \b word boundary
        \f form feed  
        */
        const myStr = "FirstLine \n\t \\SecondLine \nThirdLine"; // Use espacios para entenderlo en realidad no van

// Ejercicio 28
        // Concatenating Strings with Plus Operator
        const myStr = "This is the start." + " This is the end.";

// Ejercicio 29
        // Concatenating Strings with the Plus Equals Operator
        let myStr = "This is the first sentence.";
        myStr += " This is the second sentence.";

// Ejercicio 30
        // Constructing Strings with Variables
        const myName = "Amin";
        const myStr = "My name is " + myName + "and I am well!";  

// Ejercicio 31
        // Appending varaibles to strings
        const someAdjective = "good";
        let myStr = "Learning to code is ";
        myStr += someAdjective;

// Ejercicio 32
        //Find the Length of a String
        let lastNameLength = 0;
        const lastName = "Lovelace";
        lastNameLength = lastName.length;

// Ejercicio 33
        // Use Bracket Notation to Find the First Character in a String
        let firstLetterOfLastName = "";
        const lastName = "Lovelace";
        firstLetterOfLastName = lastName[0];

// Ejercicio 34
        // Understand String Immutability
        let myStr = "Jello World";
        myStr = "Hello World"; // myStr[0] = "H" not is possible

// Ejercicio 35
        // Use Bracket Notation to Find the Nth Character in a String
        const lastName = "Lovelace";
        const thirdLetterOfLastName = lastName[2];

// Ejercicio 36
        // Use Bracket Notation to Find the Last Character in a String
        const lastName = "Lovelace";
        const lastLetterOfLastName = lastName[lastName.length - 1]; 

// Ejercicio 37
        // Use Bracket Notation to Find the Nth-to-Last Character in a String
        const lastName = "Lovelace";
        const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Ejercicio 38
        // Word Blanks
        const myNoun = "dog";
        const myAdjective = "big";
        const myVerb = "ran";
        const myAdverb = "quickly";

        const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb;

// Ejercicio 39
        //Store Multiple Values in one Variable using JavaScript Arrays
        const myArray = ["String", 9];

// Ejercicio 40
        // Nest one Array within Another Array
        const myArray = [["String1", 9],["String2", 8]];
