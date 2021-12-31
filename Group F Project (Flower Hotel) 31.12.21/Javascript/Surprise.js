

$(document).ready(function () {
  $("#music-btn").mouseleave(function(){
    $("#music-box").trigger('pause');
  });
  $("#music-btn").mouseenter(function(){
     $("#music-box").trigger('play');
  });
});


