$(document).ready(function(){

  var num1 = "";
  var num2 = "";
  var operator = "";
  var result = 0;
  var stuff = "";
  var clsAfter = false;


//console.log(operator.length === 1);
  $('#cancel').on('click', function(){
    num1 = "";
    num2 = "";
    operator = "";
    $('#screen').text("");
  });

  $('.buttons :not(".operator")').on('click', function(){
    // if ( clsAfter === true ) {
    //     $('#screen').text("");
    //     clsAfter = false;
    // } //this if statement added
    //$('#screen').append($(this).text());
    //screen holds 14 charecters
    if (operator.length === 0 ){
      num1 = num1 + $(this).text();
      $('#screen').text(num1);
    } else {
      num2 = num2 + $(this).text();
      $('#screen').text(num1 + operator + num2);
  }
    console.log("num1: " + num1);
    console.log("num2: " + num2);
  });

  $('.operator:not("#cancel, #calc")').on('click', function(){
    operator = $(this).text();
    //clsAfter = true;
    $('#screen').append($(this).text());
    //$('#screen').text("");
    console.log("operator input: " + operator);
  });

  $('#calc').on('click', function(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var re = /[^-+*a-zA-Z0-9]/g
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
    console.log("here I am in result" + result);
    $('#screen').text(result);
    clsAfter = true;
    operator = "";
    num1 = result;
    num2 = "";
  });

});//document
