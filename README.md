# Clipboard utility

[![Build Status](https://travis-ci.org/baartko/clipboard-utility.svg?branch=master)](https://travis-ci.org/baartko/clipboard-utility)
[![Maintainability](https://api.codeclimate.com/v1/badges/8c657f21a8d7d27b735a/maintainability)](https://codeclimate.com/github/baartko/clipboard-utility/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/baartko/clipboard-utility/badge.svg?branch=master)](https://coveralls.io/github/baartko/clipboard-utility?branch=master)

It's a utility to proceed with text copy in a browser.  
It's LESS than 1KB and NO DEPENDENCIES.

Check below for more details.

## Release notes
If something has stopped working and you probably did update of package recently, consider checking out our releases and changes between them.

Check out available markups across all the versions in our [wiki](https://github.com/baartko/clipboard-utility/wiki/Markups).

## Installation

`npm i clipboard-utility --save`

## How to use

__1st scenario__
```
const copy = require('clipboard-utility')`
const text = copy('something to be copied!')

text -> { success: true, value: 'something to be copied!' }
```

__2nd scenario__
```
const copy = require('clipboard-utility')`
const text = copy('something to be copied!', ({ success, value }) => {
  if (!success) {
    // early quit
  }

  // e.g
  history.push({ pathname: value })
})
```

In both scenarios, value is placed in a __CLIPBOARD__  .

## Response

As a result of copy operation we are going to get an object as response.

### Types
__success__  
Returned when copy execution is proceeded flawlessly.

```
{
  sucess: false,
  value: 'Message that actually has been copied'
}
```

__error__  
Returned when copy execution has failed at some point.

```
{
  type: false,
  value: 'Error message that has been thrown'
}
```
