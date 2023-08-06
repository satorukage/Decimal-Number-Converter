function myfunction() {
  let UserInput = document.getElementById("input").value;
  let num = Number(UserInput);
  return (document.getElementById("para").innerHTML =
    "Decimal (base 10): " +
    num.toString(10) +
    "<br><br>" +
    "Hexatrigesimal (base 36): " +
    num.toString(36) +
    "<br>" +
    "Duotrigesimal (base 32): " +
    num.toString(32) +
    "<br>" +
    "Hexadecimal (base 16): " +
    num.toString(16) +
    "<br>" +
    "Duodecimal (base 12): " +
    num.toString(12) +
    "<br>" +
    "Decimal (base 10): " +
    num.toString(10) +
    "<br>" +
    "Octal (base 8): " +
    num.toString(8) +
    "<br>" +
    "Binary (base 2): " +
    num.toString(2));
}
