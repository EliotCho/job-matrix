// Any javascript needed for the dataOne goes here
// hint- remember to import them in your handlebars!
console.log("This is page-one.js talking!");

// template script
const source = document.getElementById('form-template').innerHTML;

// Compile the template
const template = Handlebars.compile(source);

// Render the form
document.body.innerHTML += template();

// Handle form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Display form data
    const output = document.getElementById('form-output');
    output.innerHTML = `<h3>Form Submitted!</h3><pre>${JSON.stringify(data, null, 2)}</pre>`;
});
