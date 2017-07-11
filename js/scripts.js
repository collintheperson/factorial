$(document).ready(function(){
  $("form").submit(function(event){

    var inputNum = $("input:text[name=factorial]").val();
    for (var index = (inputNum - 1); index >= 1 ; index -= 1) {
      inputNum = inputNum * index;
    };
    alert("answer:" + inputNum);

    $("#answer").after(inputNum);

    event.preventDefault();
  });
});
