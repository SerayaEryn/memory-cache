'use strict'

const Cache = require('..')
const test = require('ava')

test.cb('should remove entry after ttl', (t) => {
  t.plan(2)

  const cache = new Cache({ ttl: 100 })
  cache.put('key1', 'a value')

  const value = cache.get('key1')
  t.is(value, 'a value')
  setTimeout(() => {
    const value = cache.get('key1')
    t.is(value, null)
    t.end()
  }, 200)
})

test.cb('should override entry', (t) => {
  t.plan(4)

  const cache = new Cache({ ttl: 100 })
  cache.put('key1', 'a value')
  cache.put('key1', 'a value2')

  const value = cache.get('key1')
  t.is(cache.size, 1)
  t.is(value, 'a value2')
  setTimeout(() => {
    const value = cache.get('key1')
    t.is(value, null)
    t.is(cache.size, 0)
    t.end()
  }, 200)
})

test('should be able to remove non existing entry', (t) => {
  const cache = new Cache({ ttl: 100 })
  cache.remove('key1')

  const value = cache.get('key1')
  t.is(value, null)
})

test('should return true is cache has entry', (t) => {
  const cache = new Cache({ ttl: 100 })
  cache.put('key1', 'a value')

  const exists = cache.has('key1')

  t.true(exists)
})

test('should return fales is cache hasn\'t entry', (t) => {
  const cache = new Cache({ ttl: 100 })

  const exists = cache.has('key1')

  t.false(exists)
})
