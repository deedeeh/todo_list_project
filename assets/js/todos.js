// Check off specific todos by clicking
$("li").click(function(){
  //one line of code by creating a class in css and use toggleClass method
  $(this).toggleClass("completed");
});

//The harder & longer way of doing it
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
