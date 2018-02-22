/**
 * Creating conditional (cascading) drop-down lists using JavaScript
 * @author Kristina Marasovic
 */
var xmlhttp = new XMLHttpRequest();
var url = "data.json"; 


xmlhttp.onreadystatechange = function() { 
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        console.log(myArr); 
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

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

window.onload = function () {
    
    
    let selects = document.getElementById("selects");

    //1. TODO: Create select elements which options you will pull from the CollegeProgram object
    let collegeSelect = document.createElement('select');
    collegeSelect.setAttribute('id', 'college');
    selects.appendChild(collegeSelect);
    // DRY!
    let campusSelect = document.createElement('select');
    campusSelect.setAttribute('id', 'campus');
    selects.appendChild(campusSelect);

    let programSelect = document.createElement('select');
    programSelect.setAttribute('id', 'program');
    selects.appendChild(programSelect);

    //2. TODO: Using a for..in loop create options for the select element
    for (let college in CollegeProgram) {
        collegeSelect.options.add(new Option(college, college));
        //collegeSelect.appendChild(new Option(college, college));
    }

    //3. TODO: Implement what will happen on college change
    collegeSelect.onchange = function () {
        
        //      TODO: What if first option is selected?
        if (this.selectedIndex < 1) {
            campusSelect.length = 1;
            programSelect.length = 1;
            return;
        }
        campusSelect.length = 0;
        programSelect.length = 0;
        //      TODO: Use a for..in loop to iterate over CollegeProgram
        for (let campus in CollegeProgram[this.value]) {
            campusSelect.options.add(new Option(campus, campus));
        }
    };

    //4. TODO: Implement what will happen on campus change
    //      TODO: What if first option is selected?
    //      TODO: Use a for loop to iterate over CollegeProgram
    campusSelect.onchange = function () {
        //      TODO: What if first option is selected?
        if (this.selectedIndex < 1) {
            programSelect.length = 1;
            campusSelect.length = 1;
            return;
        }
        programSelect.length = 0;
        //      TODO: Use a for..in loop to iterate over CollegeProgram
        for (let program in CollegeProgram[collegeSelect.value][campusSelect.value]) {
            programSelect.options.add(new Option(program, program));
        }
    };
};