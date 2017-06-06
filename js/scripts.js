$(document).ready(function(){
  $("#stress_survey").submit(function(event) {
    event.preventDefault();


    var warningSigns = 0  $("input:checkbox[name=warningSigns]:checked").each(function(){
    var stressors = parseInt($(this).val())
    stressors += warningSigns

    });
    var healthSigns = 0 $("input:checkbox[name=healthSigns]:checked").each(function(){

    });
    var copingMethods = 0 $("input:checkbox[name=copingMethods]:checked").each(function(){

    });
      $("#goodJob").show();
        $("#doBetter").show();
            $("#dieSoon").show();
  });
});
