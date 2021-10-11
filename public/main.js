/* main.js
 * @authors: Pirjot Atwal
*/

//Put some code here to run!

/**
 * Prints Hello to the console with the passed in name.
 * 
 * @param {String} name 
 * @author Pirjot
 */
function printHello(name) {
    console.log("Hello " + name + "!");
}

printHello("User!");

function attachAction() {
    document.getElementById("myButton").addEventListener("click", async (evt) => {
        evt.preventDefault();
        //Send request to add class to server
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({class: "Math-101A", MONEY:5.00})
        }
        let response = await fetch('/add-class', options);
        console.log(await response.json());
    });
}

// document.addEventListener("DOMContentLoaded", attachAction);
attachAction();