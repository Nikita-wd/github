function validateform() {
  var name1 = document.getElementById("inp1").value;
  var password1 = document.getElementById("inp2").value;

  if (name1 == null || name1 == "") {
    alert("your name enter");
    return false;
  } else if (Password1.length < 6) {
    alert("password must be at least 6 characters long.");
    return false;
  }
}
