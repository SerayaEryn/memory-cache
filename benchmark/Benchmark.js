'use strict'

const Cache = require('../lib/Cache')
const memoryCache = require('memory-cache')
const { Suite } = require('benchmark')

const cache = new Cache({ttl: 100})

const suite = new Suite()
 
suite
  .add('@serayaeryn/memory-cache', function() {
    cache.put('key', 'value', 100);
    cache.get('key');
    cache.delete('key');
  })
  .add('memory-cache', function() {
    memoryCache.put('key', 'value', 100);
    memoryCache.get('key');
    memoryCache.del('key');
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ 'async': true });
