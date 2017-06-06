$(document).ready(function(){
  $("#stress_survey").submit(function(event) {
    event.preventDefault();


    var warningSigns = 0;  $("input:checkbox[name=warningSigns]:checked").each(function(){
      var stressors = parseInt($(this).val());
      warningSigns += stressors;

    });
    var healthSigns = 0; $("input:checkbox[name=healthSigns]:checked").each(function(){
      var stressors = parseInt($(this).val());
      healthSigns += stressors;

    });
    var copingMethods = 0; $("input:checkbox[name=copingMethods]:checked").each(function(){
      var stressors = parseInt($(this).val());
      copingMethods += stressors;
    });
    $(".result").hide();
    if (warningSigns >= 3 && healthSigns >= 4 && copingMethods <= 2){
      $("#dieSoon").show();
    } else if (warningSigns >= 3 && healthSigns >= 3 && copingMethods >= 3){
      $("#doBetter").show();
    } else {
      $("#goodJob").show();
    }
  });
});
