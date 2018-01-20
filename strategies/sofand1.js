var log = require('../core/log');
var _ = require('lodash');

var strat = {};

// Prepare everything our method needs
strat.init = function() {
  this.input = 'candle';
  this.currentTrend = 'long';
  this.requiredHistory = 0;
}

// What happens on every new candle?
strat.update = function(candle) {
  this.randomNumber = Math.random();
  this.toUpdate = this.randomNumber < 0.1;
}

// For debugging purposes.
strat.log = function() {
  log.debug(this.settings.othersetting)
  log.debug('calculated random number:');
  log.debug('\t', this.randomNumber.toFixed(3));
}

// Based on the newly calculated
// information, check if we should
// update or not.
strat.check = function() {
  // Only continue if we have a new update.
  if(!this.toUpdate)
    return;

  if(this.currentTrend === 'long') {
    // If it was long, set it to short
    this.currentTrend = 'short';
    this.advice('short');
  } else {
    // If it was short, set it to long
    this.currentTrend = 'long';
    this.advice('long');
  }
}

module.exports = strat;
