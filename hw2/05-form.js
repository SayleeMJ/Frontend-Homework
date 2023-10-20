// Add your code here
const formInput = document.getElementById("formInput");

formInput.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const registrationStatus = document.getElementById("registration").value;

  let courseList;
  if (document.getElementById("pl").checked)
    courseList = "Programming Langauges,";
  else "";
  if (document.getElementById("os").checked)
    courseList += " Operating Systems,";
  else "";
  if (document.getElementById("fullStack").checked)
    courseList += ' Full Stack Web Development';
  else "";

  courseList = courseList.split(",").join(",");

  const anythingElse = document.getElementById("anythingElse").value;
  console.log(
    `-------Form Details-------
    Full Name: ${fullName}
    Email: ${email}
    Registration Status: ${registrationStatus}
    Registered Courses: ${courseList}
    Anything else: ${anythingElse}
    `
  );

  formInput.reset();
});
