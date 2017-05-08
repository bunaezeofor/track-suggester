$(document).ready(function() {
  $("#main-form").submit(function(event) {
    var question1 = $('input#text1').val();
    var question2 = $('input#text2').val();

  if (question1 === 'yes'){
    $("#p1").show();
    $('#p2').hide();
    $('#p3').hide();
} else if (question1 === 'no'){
    $("#p2").show();
    $("#p1").hide();
    $("#p3").hide();
}


    event.preventDefault();
  });
});
