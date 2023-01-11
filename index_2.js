$("#Show").click(function () {
  $("p").show(5000, function () {
    alert("Show");
  });
});
$("#hide").click(function () {
  $("p").hide(2000, function () {
    alert("Hide");
  });
});
