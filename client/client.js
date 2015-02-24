setInterval(function() {
  var time = new Date()
  var timeTwo = new Date(time.getFullYear(), time.getMonth(), time.getDate()+1, 13-1, 37)
  var diff = new Date(timeTwo.valueOf()-time.valueOf());

  var preHours = diff.getHours()

  var hours = (preHours<10?'0':'') + preHours;
  var minutes = (diff.getMinutes()<10?'0':'') + diff.getMinutes();
  var seconds = (diff.getSeconds()<10?'0':'') + diff.getSeconds();

  if (hours == '00' && minutes == '00' && seconds == '00') {
    //tweetLeet();
    $('#timeText').text("The clock is Leet O"+"'"+"Clock")
    $('#timeDiff').text("LEEEEEET")
  } else if(hours == '23' && minutes == '59'){
    $('#timeText').text("The clock is Leet O"+"'"+"Clock")
    $('#timeDiff').text("LEEEEEET")
  } else {
    $('#timeText').text("Time till Leet O"+"'"+"Clock")
    $('#timeDiff').text(hours + ":" + minutes + ":" + seconds)
  }
}, 1000);

function tweetLeet() {
  Meteor.call('sendLeet', function(err, res) {
    console.log(res)
  })
}
