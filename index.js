const db = require('./database')

const main = async () => {

    // 1. Create table
    // try {
    //      await db.schema.createTable('users', table => {
    //          table.increments();
    //          table.string("name");
    //      })
    // } catch (error) {    
    //     console.log(error)
    // }


    // 2. Insert single data
    // const user = { name:"apollo" }
    // try {
    //     const inserted = await db.insert(user).into("users")
    //     console.log(inserted)
    // } catch(e) {
    //     console.log(err)
    // }



    // 3. Insert multiple data at once
    // const multipleUsers = [
    //     {name:"user 1"},
    //     {name:"user 2"}, 
    //     {name:"user 3"}
    // ]
    // try {
    //     const inserted = await db.insert(multipleUsers).into("users")
    //     console.log(inserted)
    // } catch(e) {
    //     console.log(err)
    // }


    // 4. Select data
    const users = await db.select("*").from("users")
    console.log(users)
}

main()