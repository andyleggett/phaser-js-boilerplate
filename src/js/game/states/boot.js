var Stats = require('Stats')
  , properties = require('../properties');

module.exports = function(game) {
  var addStats = function() {
    var stats = new Stats();

    stats.setMode(0);

    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';

    document.body.appendChild(stats.domElement);

    setInterval(function () {
      stats.begin();
      stats.end();
    }, 1000 / 60);
  };

  var boot = {};

  boot.create = function () {
    if (properties.showStats) {
      addStats();
    }

    game.sound.mute = properties.mute;

    game.state.start('preloader');
  };

  return boot;
};
