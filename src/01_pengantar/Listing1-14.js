// THIS IS VALID WITH var...                          

var number = 1;                                       

// 500 lines later                                    

// var with same name redeclared is valid             
var number = 2;                                       


var echoer = function(message) {                      
  // var with argument name is valid                    
  // gets overwritten                                   
 var message = "Local message";                          
  console.log(message);                                     
  return message;                                           
}                                                      

echoer("Hello there!");