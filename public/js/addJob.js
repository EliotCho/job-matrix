async function addJob(event) {
  event.preventDefault();

  const jobTitle = document.querySelector("#jobTitle").value;
  const companyName = document.querySelector("#companyName").value;
  const description = document.querySelector("#description").value;
  const salaryMax = document.querySelector("#salaryMax").value;
  const salaryMin = document.querySelector("#salaryMin").value;
  const remote = document.querySelector("#remote:checked") ? true : false;

  // check path for /api/job
  const response = await fetch(`/api/job`, {
    method: "POST",
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
    document.location.replace("/");
  } else {
    alert("Failed to add job");
  }
}

document.querySelector(".addJob-form").addEventListener("submit", addJob);
