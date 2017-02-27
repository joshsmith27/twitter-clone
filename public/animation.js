$(document).ready(function() {
  $(".stats").hide();
  $("#tweet-controls div").hide();
  $(".tweet-compose1").focus(function(){
    $(".button").show();
    $("#tweet-controls div").show();
    $(".tweet-compose").css("height", "5em" );
  });
  $(".tweet-compose1").blur(function(){
    setTimeout(function(){
      $(".button").hide();
      $("#tweet-controls div").hide();
      $(".tweet-compose").css( "height", "2.5em" );
    },200);

  });
  var maxLength = 140;
  $(".tweet-compose").keyup(function() {
    var length = $(this).val().length;
    length = maxLength - length;
    $('#char-count').text(length);
    if (length <= 10){
      $('#char-count').css("color", "#D40D12");
    }
    else {
      $('#char-count').css("color", "#333");
    }
    if (length <= 0){
      $(".button").prop("disabled", true);
    } else {
      $(".button").prop("disabled", false);
    }

  });
  $(".button").click(function(){
    var tweet = $(".tweet-compose").val();
    var profileImage =$(".avatar2").prop("src");
    // var userName = $(".username").html();
    var displayName =$(".disPlayName").html();
    $("#stream").prepend(
      '<div class="tweet" onClick="toggleStats(this)">' +
      '<div class="content">' +
      '<img class="avatar" src=' + "\"" + profileImage + "\"" + '/>' +
      '<strong class="fullname">' + displayName + '</strong>' +
      '<span class="username"> @TheSmoothest</span>' +
      '<p class="tweet-text">'+ tweet + '</p>' +
      '<div class="tweet-actions">'+
      '<ul>'+
      '<li><span class="icon action-reply"></span> Reply</li>'+
      '<li><span class="icon action-retweet"></span> Retweet</li>'+
      '<li><span class="icon action-favorite"></span> Favorite</li>'+
      '<li><span class="icon action-more"></span> More</li>'+
      '</ul>'+
      '</div>'+
      '<div class="stats">'+
        '<div class="retweets">'+
          '<p class="num-retweets">30</p>'+
          '<p>RETWEETS</p>'+
        '</div>'+
        '<div class="favorites">'+
          '<p class="num-favorites">6</p>'+
          '<p>FAVORITES</p>'+
        '</div>'+
        '<div class="users-interact">'+
          '<div>'+
            '<img src="img/vklimenko.jpg" />'+
            '<img src="img/funwatercat.jpg" />'+
          '</div>'+
        '</div>'+
        '<div class="time">'+
          '1:04 PM - 19 Sep 13'+
        '</div>'+
      '</div>'+
      '<div class="reply">'+
        '<img class="avatar" src=' + "\"" + profileImage + "\"" + '/>'+
        '<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>'+
      '</div>'
      );
      $(".tweet-compose1").val('');
      $(".stats").hide();
      // $(".tweet").click(function(){
      //   $(".stats", this).toggle();
      // });
  });
  // $(".tweet").click(function(){
  //   $(".stats", this).toggle();
  // });
});
function toggleStats(element){
  $(element).find(".stats").toggle();
}
