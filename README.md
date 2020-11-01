# 2020-09 Term 1 Midterm Exam



### isValidPassword

##### Summary

Returns true if there are no spaces or periods in the given string and the string is at least 12 characters long. Returns false otherwise.

##### Examples

``` javascript
isValidPassword('hey no this is not how it should be') // -> false
isValidPassword('bad password') // -> false
isValidPassword('colin.jaffe@codeimmersives.com') // -> false
isValidPassword('Inconceivable.') // -> false
isValidPassword('shorty') // -> false
isValidPassword('ritemoarpls') // -> false
isValidPassword('longpasswordwithnospacesorperiods') // -> true
isValidPassword('justlongenuf') // -> true`
```

##### Hints

Try using `.includes` instead of a loop.


### onlyCs

##### Summary

Returns only the grades that are Cs (between 70 and 79 inclusive) in the given array.


##### Examples

``` javascript
onlyCs([40, 73, 77, 100, 70, 79, 83, 93, 71, 76, 0])
// -> [73, 77, 70, 79, 71, 76]
```


##### Hints

* This is a filter operation, taking many values and returning a collection of values that met a criterion for inclusion.
* You can filter with a named helper function, an anonymous helper function, an anonymous arrow helper function... or a manual loop. Just solve the problem!


### countBs

##### Summary

Returns a count of how many grades in the given array were Bs (from 80 to 89 inclusive).


##### Examples

``` javascript
countBs([90, 50, 63, 87, 100, 83, 93, 81, 76, 79, 0]);
// -> 3
countBs([89, 80, 106, 81, 100, 87, 110]);
// -> 4
```


##### Hints

* This is a reduce operation, taking many values and giving back one.
* You can complete it using `.reduce`, but it's almost as clean with a simple for loop!
* Don't forget to update how many Bs you've seen so far, and don't `return` until you have a full answer.


### lastIndexOfPunctuation

##### Summary

Returns the *last* appearance of a period, question mark, or exclamation point in the given string. Returns `-1` if none is found.


##### Examples

``` javascript
lastIndexOfPunctuation(`what even? I can't do this. not today`) //-> 26
lastIndexOfPunctuation(`no. I do not!`) //-> 12
lastIndexOfPunctuation(`I have no punc and I cannot lie`) //-> -1
```

