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

 let lines = ["@@@@@@@@@", "%%%%%%%%%", "^^^^^^^^^", "&&&&&&&&&", "#########", "|||||||||"]

  let l1 = Math.floor( Math.random() * lines.length )
  let l2 = Math.floor( Math.random() * lines.length )
  let l3 = Math.floor( Math.random() * lines.length )
  let l4 = Math.floor( Math.random() * lines.length )
  let l5 = Math.floor( Math.random() * lines.length )

  console.log(`
    ${lines[l1]}
    ${lines[l2]}
    ${lines[l3]}
    ${lines[l4]}
    ${lines[l5]}
     `)

     //post to twitter
  // T.post('statuses/update', { status: `
  //     ${lines[l1]}
  //     ${lines[l2]}
  //     ${lines[l3]} 
  //     ${lines[l4]}
  //     ${lines[l5]}`
  //   }, function(err, data, response) {
  //   console.log(data)
  // })



}, 1000 *10   ) //our interval time in milliseconds 1000ms to 1s
//1000 * 10 = 1000millis * 10 seconds.
