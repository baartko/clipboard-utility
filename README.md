# Clipboard utility

[![Build Status](https://travis-ci.org/baartko/clipboard-utility.svg?branch=master)](https://travis-ci.org/baartko/clipboard-utility)

## Installation

`npm i clipboard-utility --save`

## How to use

There are different solutions, depnding on your needs.

```
const copy = require('clipboard-utility')

// Message is the result of operation, that can represent success or error structure.
const { message } = copy('test')

// Copy message and as a callback get result.
copy('test', ({ type, value }) => {
  if (type === 'error') {
    console.error(value)
  }
})
```

## Response

As a result of copy operation we are going to get an object as response.

### Types
__success__  
Returned when copy execution is proceeded flawlessly.

```
{
  type: 'success',
  value: 'Message that actually has been copied'
}
```

__error__  
Returned when copy execution has failed at some point.

```
{
  type: 'error',
  value: 'Error message that has been thrown'
}
```
