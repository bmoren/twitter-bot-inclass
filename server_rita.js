
//https://sites.google.com/site/partofspeechhelp/

const twit = require('twit')
const rita = require('rita');


var T = new twit({
  consumer_key:         'YOURKEYHERE',
  consumer_secret:      'YOURKEYHERE',
  access_token:         'YOURKEYHERE',
  access_token_secret:  'YOURKEYHERE',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})


// var rs = rita.RiString("The elephant took a bite!");
// console.log(rs.features());


let source = "I keep wondering about Maker garbage, Maker detritus. I haven’t seen any yet. What does a charity shop in a full-on Maker culture look like, or a boot sale? Would we sort through them, looking for treasures in the same way we do now? Have you ever seen the contents of an end-of-term art school skip? Is anything sadder? The idea that everyone is by nature a maker of things, merely waiting to be empowered, may be akin to the idea that everyone is a curator of things. I think that may just be an idea, BTW.I’m not entirely convinced that we have the luxury, much, of seeing how things are being redefined, if indeed they are. “Things are being redefined” = our culture is changing. And we can’t see our culture very well, because we see with it. Being the one who sees one’s own culture, who stands without the frame, is a variously attentiongetting and lucrative gaff, and should always be suspect as such, particularly when it comes to the output of one’s own inner futurist. Socks. Socks are a part of culture and media, then? They are, I believe. I am wearing a pair now. They were designed in Brooklyn by a firm called Outlier, and manufactured in South Carolina from 1.5 micron merino yarn from New Zealand. Knitting machines today are rather like more fully realised 3D printers. They’ve been working on it since Jacquard; it’s like a technological reacharound from Babbage’s day! It’s possible to machineknit quite fantastically engineered garments now, but very few designers have been willing to take that on, rethinking the utterly mundane: socks. But there’s only the one factory in the US that’s up to making them, the micromerino is hard to come by, and the founders of Outlier have the rather unlikely skillset to put those things together. The future probably won’t be an Etsy awash with brilliantly comfy, highly technical socks. Nonetheless, these are, arguably, digital socks, and probably the most comfortable socks I’ve ever worn. They wouldn’t exist without the internet, etc, nor would Outlier. I still like Eno’s definition of culture, that it’s anything we do that we don’t literally need to. Not everything we do that we don’t literally need to is good for us, or for the world. Most of the things that we don’t really like about our world, today, are cultural. But that means that other, more benign cultural things can be invented to replace them. Though we never know exactly what a given invention will do, ever, over any considerable period of time.Craftsmanship is knowing how to make things exceptionally well, and being unwilling not to do so. Technology is anything we do, physically, that we do with anything we weren’t born with. Human, I’m not sure we still are, entirely. The future will resent us in exact proportion to our failure to have attempted to meaningfully address those systemic problems that we will be known to have been quite aware of. My work is largely concerned with that matrix of four. I feel that functional things that are the product of good craftsmanship possess a certain innate nobility (nobility in something like the alchemical sense, as opposed to aristocratic). The fetishisation of craftsmanship for the sake of producing status objects becomes the opposite of that, in much the way that nostalgia is the deadliest enemy of history. I’m perpetually of two minds about [whether today is unique]! Which is good, I think, as it allows for a kind of parallax. In America, corporate entities can now contribute to political campaigns. I’m not at all convinced that’s a good idea. But I’ve long assumed that real aliens, arriving here, would probably assume that multinationals are the most evolved living things on the planet, slime molds to our individual cells, and more sophisticated than nation states. We do tend to have this unexamined assumption that the individual is a huge fucking deal. Because it feels to use that we are. Because our neurological equipment seems to demonstrate to each of us that we are quite obviously the exact center of the universe. Just as we are all, subjectively, politically quite sensibly centrist. The key to racism is that racists literally don’t know they are. They think it’s a specious category invented to shame them for simply being sensible."
//
let markov = new rita.RiMarkov(1.1);
markov.loadText(source);
//
let sentence = markov.generateSentence();
console.log(sentence)


// let s = rita.RiString("We're really heading for the sun now, time to reinforce our wings");
// // nnp rb vbg in dt nn rb , nn to vb prp$ nns
// console.log(s.features());




setInterval(function(){

  let s = `We're ${ rita.RiTa.randomWord("rb") } ${ rita.RiTa.randomWord("vbg") } for the ${ rita.RiTa.randomWord("nn") } now, time to ${ rita.RiTa.randomWord("vb") } our ${ rita.RiTa.randomWord("nns") }`

  console.log(s);


//post to twitter
  // T.post('statuses/update', { status: s }, function(err, data, response) {
  //   // console.log(data)
  //   console.log(err)
  //   // console.log(response)
  //
  //
  // })

}, 1000)
