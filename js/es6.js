<<<<<<< HEAD
/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
var name = 'your_name_here';
var email = '';
var languages = [];

// TODO: rewrite the object literal using object property shorthand
users.push({
    name: name,
    email: email,
    languages: languages
});

// TODO: replace `var` with `let` in the following variable declarations
// TODO: rewrite the following using arrow functions

let emails = [];
let names = [];

users.forEach(({ email }) => emails.push(email));
users.forEach(({ name }) => names.push(name));

// console.log(emails);
// console.log(names);

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function({ name, email, languages }) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition

    // const { name, email, languages } = user;
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;

    // TODO: rewrite the assignment below to use template strings
    // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
       developers.push(`${name}'s email is: ${email}. ${name} knows the following programming languages: ${languages.join(', ')}`);
});
       console.log(developers);

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
   for(let developer of developers) {

    // TODO: rewrite the assignment below to use template strings
    // stringslist += '<li>' + developer + '</li>';
       list += `<li>${ developer }</li>`;
};
list += '</ul>';

document.write(list);
=======
    /*
     * Complete the TODO items below
     */
    const users = [
      {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
      },
      {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
      },
      {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
      },
      {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
      },
      {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
      }
    ];

    // TODO: fill in your name and email and add some programming languages you know
    // to the languages array


    // TODO: replace the `var` keyword with `const`, then try to reassign a variable
    // declared as `const`
    var name = 'Javier_Estrada';
    var email = 'estrada.javier.525@gmail.com';
    var languages = ["assembly", "c", "Java Script", "HTML", "JSON"];


    // TODO: rewrite the object literal using object property shorthand
    users.push({
      name,
      email,
      languages
    });


    // TODO: replace `var` with `let` in the following variable declarations
    let emails = [];
    let names = [];


    // TODO: rewrite the following using arrow functions

      users.forEach(function(user) {
        return emails.push(user.email);
      });

      users.forEach(function(user) {
        return names.push(user.name);
      });


    // TODO: replace `var` with `let` in the following declaration
    const developers = [];
    users.forEach(function(user) {
      // TODO: rewrite the code below to use object destructuring assignment
      //       note that you can also use destructuring assignment in the function
      //       parameter definition
      const name,
      const email,
      const languages = user.languages;



      // TODO: rewrite the assignment below to use template strings
      developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(', ')}`);
    });



    // TODO: Use `let` for the following variable
    let list = '<ul>';



    // TODO: rewrite the following loop to use a for..of loop
    // developers.forEach(function (developer) {
    for(let developer of developers) let i = 0; i < developers.length; i += 1) {

        // TODO: rewrite the assignment below to use template strings
        // list += '<li>' + developer + '</li>';
        list += '<li>'${developer}'</li>'
    });
    list += '</ul>';
>>>>>>> 66e21c339acac306f6539a841e9573e06daef85a
