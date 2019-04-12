var Twit = require('twit')

var T = new Twit({
  consumer_key:         'YOURKEYHERE',
  consumer_secret:      'YOURKEYHERE',
  access_token:         'YOURKEYHERE',
  access_token_secret:  'YOURKEYHERE',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})



//reminder: control + C to exit the program

let person = ["the boy", "kai", "an alien", "the president", " a cat" ]
let verb = ["swimming", "flailing", "eating", "crying", "skateboarding" ]
let setting = ["a dungeon", "the house", "a swimming pool", "the training center", "my head", "a dream", "1938"]
let feeling = [, "was excellent", "was dumb", "made them scared", "was rad", "ended badly" ]


setInterval(function(){
//everything to do on the loop goes here...

  //mad libs approach.
  //root sentence
  //  V           V           V             V
  // Ethan was trapped in the dungeon which sucked.

  //template literals (TLS)
  //`` inside of back ticks (this is the tilde ~ key w/o shift)
  // the actual templace literal looks like this: ${}
  // THIS IS NOT JQUERY. this uses curly braces.
  // TLS, let you compute inside of the {} which is then auto concatted (joined) into the string

                      //Math.floor : always rounds down    // person.length get the number of items in ther person array

  let personSelect = Math.floor( Math.random() * person.length )
  let verbSelect = Math.floor( Math.random() * verb.length )
  let settingSelect = Math.floor( Math.random() * setting.length )
  let feelingSelect = Math.floor( Math.random() * feeling.length )


  console.log(`${ person[ personSelect ] } was ${ verb[ verbSelect ]} in the ${setting[settingSelect]} which ${feeling[feelingSelect]}.`);


  // console.log( Math.round( Math.random() * 100 ) )
  // console.log('tweet!')

//post to twitter
  // T.post('statuses/update', { status: `${ person[ personSelect ] } was ${ verb[ verbSelect ]} in the ${setting[settingSelect]} which ${feeling[feelingSelect]}.` }, function(err, data, response) {
  //   console.log(data)
  // })



}, 1000 * 10  ) //our interval time in milliseconds 1000ms to 1s
//1000 * 10 = 1000millis * 10 seconds.
