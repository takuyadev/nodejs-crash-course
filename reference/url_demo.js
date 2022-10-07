const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString())

// Host
console.log(myUrl.host)

// Hostname
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Serialized Query
console.log(myUrl.search)

// Params Object
console.log(myUrl.searchParams)

// Add a param
myUrl.searchParams.append('abc', 123)
console.log(myUrl.searchParams)

// Loop throuogh params
myUrl.searchParams.forEach((value,name)=>{
    console.log(`${name}, ${value}`)
})