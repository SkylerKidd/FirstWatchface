/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main_face = new UI.Window({
  fullscreen: true,
  backgroundColor: 'white'
});

var main_day = new UI.TimeText({
  position: new Vector2(0, 35),
  size: new Vector2(124, 60),
  font: 'gothic-28',
  color: 'black',
  textAlign: 'right',
  text: '%a,'
});

var main_date = new UI.TimeText({
  position: new Vector2(0, 65),
  size: new Vector2(124, 60),
  font: 'gothic-28',
  color: 'black',
  textAlign: 'right',
  text: '%B %d'
});

var main_time = new UI.TimeText({
  position: new Vector2(0, 95),
  size: new Vector2(124, 60),
  font: 'gothic-28',
  color: 'black',
  textAlign: 'right',
  text: '%I:%M %p'
});

var right_bar = new UI.Rect({
  position: new Vector2(129, 20),
  size: new Vector2(20, 128),
  backgroundColor: 'black'
});

main_face.add(main_day);
main_face.add(main_date);
main_face.add(main_time);
main_face.add(right_bar);
main_face.show();

