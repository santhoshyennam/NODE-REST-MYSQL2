function connect(callback) {
    console.log("connecting to database...wait for 2 minutes.")
    /*
    ......
    */
   console.log("connected to database somethingwent wrong...")
    callback("error has occured...")
}

// function callback(err) {
//     console.log(err)
// }
connect(function callback(err) {
    if(err) {
        console.log(err)
    } else {
        console.log("connected to database successfully....")
    }
})