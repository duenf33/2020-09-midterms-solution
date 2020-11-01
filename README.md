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

Returns only the grades that are between 70 and 79 (inclusive) in the given array.


##### Examples

``` javascript
justTheCs([40, 73, 77, 100, 70, 79, 83, 93, 71, 76, 0])
// -> [73, 77, 70, 79, 71, 76]
```


##### Hints

* This is a filter operation.
* You can do that with a named helper function, an anonymous helper function, an anonymous arrow helper function... or a manual loop. Just solve the problem!

