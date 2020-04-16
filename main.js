$(document).ready(function () {
  $(".navbar-nav li").click(function (x) {
    $(".navbar-nav li").removeClass("active");
    $(event.target).parent().addClass("active");
  });
});

function showCircuit() {
  $("#circuit").change(function (o) {
    switch (o.target.value) {
      case "ITA":
        $("#circuitimage").attr("src", "img/monza.jpg");
        $("#f1sound")[0].play();
        break;
      case "HUN":
        $("#circuitimage").attr("src", "img/hungaroring.jpg");
        break;
      case "BEL":
        $("#circuitimage").attr("src", "img/spa.jpg");
        break;
      case "MON":
        $("#circuitimage").attr("src", "img/monaco.jpg");
        break;

      default:
        break;
    }
  });
}

//---------------------------------------------------------

function calculate() {
  var selected = $("#circuit").val();
  var lapTime = Number($("#laptime").val() / 3600);

  if(selected == "HUN")
    $("#averagespeed").val((4381 / lapTime) / 1000 + " km/h ");
  else if(selected == "MON")
    $("#averagespeed").val((3337 / lapTime) / 1000 + " km/h ");
  else if(selected == "BEL")
    $("#averagespeed").val((7004 / lapTime) / 1000 + " km/h ");
  else if(selected == "ITA")
    $("#averagespeed").val((5793 / lapTime) / 1000 + " km/h ");
}
