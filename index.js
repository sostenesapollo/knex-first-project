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
    const user = { first_name:"apollo" , last_name:"apollo", bio: "botanist" }
    try {
        const inserted = await db.insert(user).into("users")
        console.log(inserted)
    } catch(e) {
        console.log(e)
    }



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
    try {
        const users = await db.select("*").from("users")
        console.log(users)
    } catch(e) {
        console.log(e)
    }


    // 4.1 Select specific fields
    // try {
    //     const users = await db.select(["name"]).from("users")
    //     console.log(users)
    // } catch(e) {
    //     console.log(e)
    // }


    // 5.0 Where
    // try {
    //     const filter = await db.where({name: "user 1"}).table("users")
    //     console.log(filter)
    // }catch(e) {
    //     console.log(e)
    // }


    // 5.1 Where
    // try {
    //     const filter = await db.where({id: 3}).table("users")
    //     console.log(filter)
    // }catch(e) {
    //     console.log(e)
    // }

    // 5.1 Where using OR
    // try {
    //     const filter = await db.where({id: 3}).orWhere({id: 4}).table("users")
    //     console.log(filter)
    // }catch(e) {
    //     console.log(e)
    // }


    // 5.1 Where > < !=
    // try {
    //     const filter = await db.whereRaw("id  < 5").orWhere({id: 7}).table("users")
    //     console.log(filter)
    // }catch(e) {
    //     console.log(e)
    // }


    // 6.0 Delete
    // try {
    //     const deleted = await db.where({id: "5"}).delete().table("users")
    //     console.log(deleted)
    // }catch(e) {
    //     console.log(e)
    // }


    // 7.0 Update
    // try {
    //     const updated = await db.where({id: "3"}).update({name: "updated"}).table("users")
    //     console.log(updated)
    // }catch(e) {
    //     console.log(e)
    // }

    // 8.0 OrderBy
    // orderBy("column", "desc")

    



}

main()