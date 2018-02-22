/**
 * Creating conditional (cascading) drop-down lists using JavaScript - Refactored 
 * @author Kristina Marasovic
 */

/**
 * Associative array holding application data. Consider using JSON or XML instead.
 * ES6 maps could also be taken into account.
 */
const CollegeProgram = { // associative array of associative arrays of ...
    "Select a College": "college", //this is being used for ID
    "RIT Croatia": {
        "Select a Campus": "campus", //this is being used for ID
        "Dubrovnik": {
            "Select a Program": "program", 
            "Web and Mobile Computing (BS)": 0, 
            "Hospitality and Tourism Management (BS)": 0 
        },
        "Zagreb": {
            "Select a Program": "program", 
            "Web and Mobile Computing (BS)": 0, 
            "International Business (BS)": 0, 
            "Service Leadership and Innovation (MS)": 0
        }
    },
    "RIT": {
        "Select a Campus": "campus", //this is being used for ID
        "GCCIS - Information Sciences & Technologies": {
            "Select a Program": "program", 
            "Web & Mobile Computing (BS)": 0, 
            "Human Centered Computing (BS)": 0, 
            "Computing & Information Technologies (BS)": 0
        },
        "GCCIS - Computer Science": {
            "Select a Program": "program", 
            "Computer Science (BS)": 0, 
            "Computer Science (MS)": 0
        }
    }
};

let selects;

window.onload = function () {
    selects = document.getElementById("selects");
    addSelectFor(CollegeProgram);
};

/**
 * Recursive building of conditional selects.
 * 
 * @param {Array} options - data structure containing select options
 */
function addSelectFor(options) {
    //1. Stop condition

    //2. If the select element does not exist, create it

    //3. Clear select options first, and then add new ones; use a for...in loop

    //4. Implement onchange event handling - recursive call (addSelectFor(?))
};