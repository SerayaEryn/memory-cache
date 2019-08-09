# memory-cache

[![Build Status](https://travis-ci.org/SerayaEryn/memory-cache.svg?branch=master)](https://travis-ci.org/SerayaEryn/memory-cache)
[![Coverage Status](https://coveralls.io/repos/github/SerayaEryn/memory-cache/badge.svg?branch=master)](https://coveralls.io/github/SerayaEryn/memory-cache?branch=master)
[![NPM version](https://img.shields.io/npm/v/@serayaeryn/memory-cache.svg?style=flat)](https://www.npmjs.com/package/@serayaeryn/memory-cache)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```
npm i @serayaeryn/memory-cache
```

## API

### Cache(options)

#### ttl

Time to live in milliseconds.

### Cache#get(key)

Returns the cached entry for the `key`.

### Cache#has(key)

Allows to check if the cache contains an entry for the `key`.

### Cache#remove(key)

Remove the entry for the `key` from the cache.

### Cache#put(key, value)

Stores the `value` for the `key` in the cache.

## License

Licensed under [MIT](./LICENSE).