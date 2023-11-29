function Calculate() {
  var a = parseInt(document.getElementById("bookone").value);
  var b = parseInt(document.getElementById("booktwo").value);
  var c = parseInt(document.getElementById("bookthree").value);
  var d = parseInt(document.getElementById("bookfour").value);
  var e = parseInt(document.getElementById("bookfive").value);
  var f = parseInt(document.getElementById("booksix").value);
  var g = parseInt(document.getElementById("bookseven").value);
  if (
    a > 100 ||
    b > 100 ||
    c > 100 ||
    d > 100 ||
    e > 100 ||
    f > 100 ||
    g > 100
  ) {
    alert("please enter corrent value");
  } else {
    var Obtain = a + b + c + d + e + f + g;
    document.getElementById("Obtained").innerHTML = Obtain;
    var per = (Obtain / 500) * 100;
    document.getElementById("Percentage").innerHTML = per;
    if (a > 40 && c > 40 && b > 40 && d > 40 && e > 40 && f > 40 && g > 40) {
      document.getElementById("Remarks").innerHTML =
        "<span style='color:#292'>pass</span>";
    } else {
      document.getElementById("<span style='color:red'>Fail</span>").innerHTML =
        "<>";
    }
    if (Obtain >= 80) {
      document.getElementById("Grade").textContent = "A";
    } else if (Obtain >= 70) {
      document.getElementById("Grade").textContent = "B";
    } else if (Obtain >= 60) {
      document.getElementById("Grade").textContent = "C";
    } else if (Obtain >= 50) {
      document.getElementById("Grade").textContent = "D";
    } else if (Obtain >= 40) {
      document.getElementById("Grade").textContent = "E";
    } else {
      document.getElementById("Grade").textContent = "F";
    }
  }
}
