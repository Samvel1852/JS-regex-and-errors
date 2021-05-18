# JS Errors and Regular Expressions

## Error

Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.

### Description

Runtime errors result in new Error objects being created and thrown.

#### Error Types

Besides the generic Error constructor, there are other core error constructors in JavaScript. For client-side exceptions, see [Exception handling statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

-   [EvalError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError)

Creates an instance representing an error that occurs regarding the global function eval().
-   [RangeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)

Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.
-   [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)

Creates an instance representing an error that occurs when de-referencing an invalid reference.
-   [SyntaxError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)

Creates an instance representing a syntax error.
-   [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
-   [URIError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError)

Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.
-   [AggregateError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)

Creates an instance representing several errors wrapped in a single error when multiple errors need to be reported by an operation, for example by Promise.any().
-   [InternalError(Non-Standart)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError) 

Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".

### Constructor

[Error()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)

Creates a new Error object.

### Static Methods

Error.captureStackTrace()

A non-standard V8 function that creates the stack property on an Error instance.

### Instance properties

-   Error.prototype.message

Error message.
-   Error.prototype.name

Error name.
-   Error.prototype.description

A non-standard Microsoft property for the error description. Similar to message.
-   Error.prototype.number

A non-standard Microsoft property for an error number.
-   Error.prototype.fileName

A non-standard Mozilla property for the path to the file that raised this error.
-   Error.prototype.lineNumber

A non-standard Mozilla property for the line number in the file that raised this error.
-   Error.prototype.columnNumber

A non-standard Mozilla property for the column number in the line that raised this error.
-   Error.prototype.stack

A non-standard Mozilla property for a stack trace.

### Instance methods

Error.prototype.toString()

Returns a string representing the specified object. Overrides the Object.prototype.toString() method.

### Examples

#### Throwing a generic error

Usually you create an Error object with the intention of raising it using the throw keyword. You can handle the error using the [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) construct:

```javascript
try {
  throw new Error('Whoops!')
} catch (e) {
  console.error(e.name + ': ' + e.message)
}
```

#### Handling a specific error

You can choose to handle only specific error types by testing the error type with the error's constructor property or, if you're writing for modern JavaScript engines, [instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) keyword:

```javascript
try {
  foo.bar()
} catch (e) {
  if (e instanceof EvalError) {
    console.error(e.name + ': ' + e.message)
  } else if (e instanceof RangeError) {
    console.error(e.name + ': ' + e.message)
  }
  // ... etc
}
```

#### Custom Error Types

You might want to define your own error types deriving from Error to be able to throw new MyError() and use instanceof MyError to check the kind of error in the exception handler.  This results in cleaner and more consistent error handling code. 

See ["What's a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) on StackOverflow for an in-depth discussion.

##### ES6 Custom Error Class

```javascript
class CustomError extends Error {
  constructor(foo = 'bar', ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params)

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }

    this.name = 'CustomError'
    // Custom debugging information
    this.foo = foo
    this.date = new Date()
  }
}

try {
  throw new CustomError('baz', 'bazMessage')
} catch(e) {
  console.error(e.name)    //CustomError
  console.error(e.foo)     //baz
  console.error(e.message) //bazMessage
  console.error(e.stack)   //stacktrace
}
```

##### ES5 Custom Error Object

```javascript
function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.name = 'CustomError';
  instance.foo = foo;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }
  return instance;
}

CustomError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

if (Object.setPrototypeOf){
  Object.setPrototypeOf(CustomError, Error);
} else {
  CustomError.__proto__ = Error;
}

try {
  throw new CustomError('baz', 'bazMessage');
} catch(e){
  console.error(e.name); //CustomError
  console.error(e.foo); //baz
  console.error(e.message); //bazMessage
}
```

## Regular expressions

Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the [exec()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) and [test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) methods of RegExp, and with the [match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match), [matchAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll), [replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [replaceAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll), [search()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search), and [split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) methods of [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). This chapter describes JavaScript regular expressions.

### Creating a regular expression

You construct a regular expression in one of two ways:

-   Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:

```javascript
let re = /ab+c/;
```

Regular expression literals provide compilation of the regular expression when the script is loaded. If the regular expression remains constant, using this can improve performance.

-   Or calling the constructor function of the [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) object, as follows:

```javascript
let re = new RegExp('ab+c');
```

Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.

### Writing a regular expression pattern

A regular expression pattern is composed of simple characters, such as /abc/, or a combination of simple and special characters, such as /ab*c/ or /Chapter (\d+)\.\d*/. The last example includes parentheses, which are used as a memory device. The match made with this part of the pattern is remembered for later use, as described in [Using groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#using_groups).

#### Using simple patterns

Simple patterns are constructed of characters for which you want to find a direct match. For example, the pattern /abc/ matches character combinations in strings only when the exact sequence "abc" occurs (all characters together and in that order). Such a match would succeed in the strings "Hi, do you know your abc's?" and "The latest airplane designs evolved from slabcraft." In both cases the match is with the substring "abc". There is no match in the string "Grab crab" because while it contains the substring "ab c", it does not contain the exact substring "abc".

#### Using special characters

When the search for a match requires something more than a direct match, such as finding one or more b's, or finding white space, you can include special characters in the pattern. For example, to match a single "a" followed by zero or more "b"s followed by "c", you'd use the pattern /ab*c/: the * after "b" means "0 or more occurrences of the preceding item." In the string "cbbabbbbcdebc", this pattern will match the substring "abbbbc".

The following pages provide lists of the different special characters that fit into each category, along with descriptions and examples.

-   Assertions

Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions).
-   Character classes

Distinguish different types of characters. For example, distinguishing between letters and digits.
-   Groups and ranges

Indicate groups and ranges of expression characters.
-   Quantifiers

Indicate numbers of characters or expressions to match.
-   Unicode property escapes

Distinguish based on unicode character properties, for example, upper- and lower-case letters, math symbols, and punctuation.