const mongoose =require("mongoose")


mongoose.connect("mongodb://localhost:27017/contactnodeproject")
.then(()=>{
    console.log("Data Base is Connected!!!")
})
.catch(error=>{
    console.log(error)
})

// const dbConnect = ()=>{
//     try {
//         const connect = mongoose.connect("mongodb://localhost:27017")
//         console.log("dbconnected");
//     } catch (error) {
//         console.log(error)
//     }
// }

// module.exports = dbConnect