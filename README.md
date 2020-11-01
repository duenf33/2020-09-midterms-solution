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
