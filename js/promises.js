            // {
            //     "use strict";
            //     alert( "Yes! We reached Javier's JS Page.")
            //
            //     /* TODO: make a GET request using fetch to the url below to get
            //         an array of five cat fact objects.
            //     Log the text property of the first cat fact object. Be sure to
            //     log possible errors in a catch.
            //  */
            //
            //     const catFactsURL = 'https://cat-fact.herokuapp.com/facts';
            //
            //     fetch(catFactsURL)
            //         .then(response => response.json())
            //         .then(data => {
            //             console.log(data);
            //             .catch(console.error);
            //             document.write(`<h2>${data.name}</h2>`);
            //         })
            //
            //     },
            //
            // {
// {
//         "use strict";
//          // alert( "Yes! We reached Javier's JS Page.")
//     // -------- MINI EXERCISE 4
//
//     /* TODO: Create a new endpoint on https://hookbin.com/ and use
//         fetch to send some POST requests. Experiment with sending
//         different shapes of data in the body of the request.
//      */
//     alert("Welcome to GitHub.")
//     const username = prompt("Enter your username:");
//     const password = prompt("Enter password");
//     // const age = prompt("age");
//     // const pets = prompt("pets")
//
//     fetch(PROMISES, {
//         console.log("PROMISES");
//         method: "post",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             username,
//             password
//             // age,
//             // pets
//         })
//     })
//         .then(console.log)
//         .catch(console.error)

        // wait(3000).then(() => console.log('You\'ll see this after 1 second'));
        // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// }

{
    const gitHub = "https://api.github.com/";

    function getDate() {
        const getUserDate = new Promise(resolve, reject) => {
            if(true) {
                resolve("Resolved");
            } else {
                reject("Rejected");
            }
            return getDate;
        }
    }

    fetch(gitHub)
        .then(responce => response.json())
        .then(console.log)
        .catch(console.error)

}