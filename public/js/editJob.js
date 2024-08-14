async function editJob(event) {
  event.preventDefault();

  const jobTitle = document.querySelector("#jobTitle").value;
  const companyName = document.querySelector("#companyName").value;
  const description = document.querySelector("#description").value;
  const salaryMax = document.querySelector("#salaryMax").value;
  const salaryMin = document.querySelector("#salaryMin").value;
  const remote = document.querySelector("#remote:checked") ? true : false;

  // getting the job id from the url
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // ? What part of our application will handle this 'put' request?
  // ? The Controller will handle this 'put' request.

  const response = await fetch(`/api/job/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      jobTitle,
      companyName,
      description,
      salaryMax,
      salaryMin,
      remote,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace(`/job/${id}`);
  } else {
    alert("Failed to edit job");
  }
}

document.querySelector(".edit-job-form").addEventListener("submit", editJob);
