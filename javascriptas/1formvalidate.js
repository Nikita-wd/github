function validateform() {
  var name1 = document.getElementById("inp1").value;
  var password = document.myform.password.value;

  if (name1 == null || name1 == "") {
    alert("name can not be blank");
    return false;
  } else if (Password.length < 6) {
    alert("password must be at least 6 characters long.");
    return false;
  }
}
