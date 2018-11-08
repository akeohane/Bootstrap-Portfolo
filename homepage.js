$(document).ready(function () {
    $(".printPort").playbackRate = 2;
    $(".videoDiv").click(function() {
        console.log($(this).attr("href"));
        window.location = $(this).attr("href"); 
        // return false;
      });


    $(".videoDiv").hover(function () {
        $(this).children("video")[0].play();
    }, function () {
        var el = $(this).children("video")[0];
        el.pause();
        el.currentTime = 0;
    });


});