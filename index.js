function test() {
  var val1 = document.kirim.T1.value;
  if (val1 >= 0 && 40) document.kirim.T2.value = "E";
  if (val1 > 40 && 55) document.kirim.T2.value = "D";
  if (val1 > 55 && 60) document.kirim.T2.value = "C";
  if (val1 > 60 && 65) document.kirim.T2.value = "BC";
  if (val1 > 65 && 70) document.kirim.T2.value = "B";
  if (val1 > 70 && 80) document.kirim.T2.value = "AB";
  if (val1 > 80 && 100) document.kirim.T2.value = "A";
}
