   // API routes
   const apiId = process.env.API_ID;
   const apiKey = process.env.API_KEY;

   // Fetch job data and update the job board
   function fetchJobs() {
     fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${apiId}&app_key=${apiKey}`)
       .then(response => response.json())
       .then(data => {
         // Compile the Handlebars template
         const source = document.getElementById('job-template').innerHTML;
         const template = Handlebars.compile(source);

         // Generate the HTML for the job listings
         const html = template(data);
         document.getElementById('job-listings').innerHTML = html;
       })
       .catch(error => console.error('Error fetching job data:', error));
   }

   // Fetch jobs when the page loads
   window.onload = fetchJobs;