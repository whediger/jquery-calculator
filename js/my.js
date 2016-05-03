$(document).ready(function(){

  var num1 = "";
  var num2 = "";
  var operator = "";
  var result = 0;

  $('#cancel').on('click', function(){
    num1 = "";
    num2 = "";
    operator = "";
    $('#screen').text("");
  });


  $('.buttons :not(".operator, .l-row")').on('click', function(){
    console.log($(this).text());
      if (operator.length === 0){
        num1 = num1 + $(this).text();
        console.log(num1);
        $('#screen').text(num1);
      } else {
        num2 = num2 + $(this).text();
        $('#screen').text(num1 + operator + num2);
      }
  });

  $('.operator:not("#cancel, #calc")').on('click', function(){
    operator = $(this).text();
    $('#screen').append($(this).text());
  });

  $('#calc').on('click', function(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var re = /[^-+*a-zA-Z0-9]/g //to remove division symbol
    operator = operator.replace(re, "/");
    console.log("operator: " + operator);
    switch (operator) {
      case '/':
          result = num1 / num2;
        break;
      case 'x':
          result = num1 * num2;
        break;
      case '-':
          result = num1 - num2;
        break;
      case '+':
          result = num1 + num2;
        break;
      default:
    }
    $('#screen').text(result);
    operator = "";
    num1 = result;
    num2 = "";
  });

});//document
