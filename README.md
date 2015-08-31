# short-term-memory

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Build Status](https://api.travis-ci.org/dodekeract/short-term-memory.svg)](https://travis-ci.org/dodekeract/short-term-memory/)
[![Code Climate](https://codeclimate.com/github/dodekeract/short-term-memory/badges/gpa.svg)](https://codeclimate.com/github/dodekeract/short-term-memory)
[![Coverage Status](https://coveralls.io/repos/dodekeract/short-term-memory/badge.svg)](https://coveralls.io/github/dodekeract/short-term-memory)
[![NPM Downloads](https://img.shields.io/npm/dm/short-term-memory.svg)](https://npmjs.com/package/short-term-memory)
[![NPM Dependencies](https://david-dm.org/dodekeract/short-term-memory.svg)](https://david-dm.org/dodekeract/short-term-memory)
[![Code Documentation](https://inch-ci.org/github/dodekeract/short-term-memory.svg)](https://inch-ci.org/github/dodekeract/short-term-memory)

In-memory short-term single-get key-value-store.

## Installation
**Basic**: ````npm install short-term-memory````

**As Dependency**: ````npm install short-term-memory --save````

**Require in Node**: ````var ShortTermMemory = require('short-term-memory');````

## Purpose
Short-term-memory is mostly used to store tokens, as the in-memory database is automatically deleting entries after a configurable time. In addition to that entries are deleted when accessed once. So you don't need to worry about tokens being used multiple times. An example for this usage can be found in [one of my projects](https://github.com/dodekeract/impequid/blob/master/modules/socket/token.js).

## Usage
### Initialization

````javscript
var ShortTermMemory = require('short-term-memory');
var myStore = new ShortTermMemory({
    duration: 60000
}); // delete entries after 60 seconds
````

### Add entry

````javascript
myStore.add('unique token you generated or other key', {
    some: 'object',
    string: 'or',
    other: 'data'
});
````

### Retrieve entry

````javscript
var token = myStore.get('unique token you generated or other key');
if (token !== false) {
    // token is valid and automatically removed from myStore
} else {
    // token invalid or already used
}
````
