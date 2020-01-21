# Clipboard utility

[![Build Status](https://travis-ci.org/baartko/clipboard-utility.svg?branch=master)](https://travis-ci.org/baartko/clipboard-utility)
[![Maintainability](https://api.codeclimate.com/v1/badges/8c657f21a8d7d27b735a/maintainability)](https://codeclimate.com/github/baartko/clipboard-utility/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/baartko/clipboard-utility/badge.svg?branch=master)](https://coveralls.io/github/baartko/clipboard-utility?branch=master)

It's a utility to proceed with text copy in a browser.   
Check below for more details.

## Release notes
If something has stopped working and you probably did update of package recently, consider checking out our releases and changes between them.

Check out available markups across all the versions in our [wiki](https://github.com/baartko/clipboard-utility/wiki/Markups).

## Installation

`npm i clipboard-utility --save`

## How to use

There are 2 ways to use that.

`const copy = require('clipboard-utility')`

> Use destructuring to get properties

`const { success, value } = require('clipboard-utility')`

> Use callback to provide an action, after copy process is done

```
copy('reloadToURL', ({ success, value }) => {
  if (!success) {
    // early quit
  }

  // e.g
  history.push({ pathname: value })
})
```

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
