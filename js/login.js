document.getElementById("login_submit").addEventListener("click", function () {
  const Emailid = document.getElementById("user_email");
  const useremail = Emailid.value;
  //   console.log(useremail);
  const Password = document.getElementById("user_pass");
  const userpassword = Password.value;
  //   console.log(userpassword);

  if (useremail == "abc@gmail.com" && userpassword == "12345") {
    // console.log("Valid user");
    window.location.href = "bankwebsite.html";
  } else {
    console.log("Invalid User");
  }
});
