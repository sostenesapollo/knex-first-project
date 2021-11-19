const db = require('./database')

// 1. Create table
// db.schema.createTable('users', table => {
//     table.increments();
//     table.string("name");
// })
// .then(()=>{ console.log("table created")})
// .catch(err=>{ console.log("error to create", err)})


// 2. Insert single data
// const user = { name:"apollo" }
// db.insert(user).into("users")
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))



// 3. Insert multiple data at once
// const multipleUsers = [
//     {name:"user 1"},
//     {name:"user 2"}, 
//     {name:"user 3"}
// ]

// db.insert(multipleUsers).into("users")
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))
