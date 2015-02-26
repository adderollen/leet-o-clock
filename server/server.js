var Twit = Meteor.npmRequire('twit');

var T = new Twit({
        consumer_key:         '', // API key
        consumer_secret:      '', // API secret
        access_token:         '', 
        access_token_secret:  ''
}); 

Meteor.methods({
	sendLeet: function () {
		T.post('statuses/update',
		{
			status: "The clock is Leet O"+"'"+"Clock http://leet.meteor.com/ #LEET #elite #LeetOClock"
		},
		function(err, data, response) {
			console.log(data);
		}
		);
	}
})
