//Check off specific todos by clicking
//The easy & shorter way
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append(`<li><span>X</span> ${todoText}</li>`);
  }
});



//The hard & longer way
// //if li is gray
// if($(this).css("color") === "rgb(128, 128, 128)"){
//   //turn it black
//   $(this).css({
//     color: "#000",
//     textDecoration: "none"
//   });
// } else {
//   //turn it gray
//   $(this).css({
//     color: "gray",
//     textDecoration: "line-through"
//   });
// }
