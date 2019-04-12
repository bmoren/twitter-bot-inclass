## Twitter Bot starter kit in Node.js

In this repo you'll find 3 files with 3 directions you might take this project.

before using this repository `cd` into it in your terminal <br>
then run `npm install` to install the dependencies <br>
then take a look at one of the strategies below:

1. madlibs – using arrays to build sentence structure `node server_mad_libs.js`

1. multiline – using multilines and glyphs to make formal visual output `node server_multiline.js`

1. rita – using [rita.js](http://rednoise.org/rita/) to make synthesized text.  `node server_rita.js`


### Notes
You'll likely want to make the interval loops here much much longer or use time of day to determine when to post. if you leave it at 10 seconds, you'll quickly meet the twitter anti-spam rate limit for posting tweets.

### keys and developer account
you'll need a set of twitter developer keys to post to twitter:

1. make a twitter account

1. go here: and register: https://developer.twitter.com/
1. under your username, create a new app, this will get you keys to post to twitter
1. find the keys and paste them into these examples.
