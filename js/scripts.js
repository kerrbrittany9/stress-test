$(document).ready(function(){
  $("#stress_survey").submit(function(event) {
    event.preventDefault();
    var warningSigns = $("input:checkbox[name=warningSigns]:checked");
    warningSigns.each(function(){
      $("#goodJob").show();
    });
    var healthSigns = $("input:checkbox[name=healthSigns]:checked");
    healthSigns.each(function(){
      $("#doBetter").show();
    });
    var copingMethods = $("input:checkbox[name=copingMethods]:checked");
    copingMethods.each(function(){
      $("#dieSoon").show();
    });
  });
});
