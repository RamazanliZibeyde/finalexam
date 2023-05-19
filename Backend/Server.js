const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ZibeydaRamazanli:zibeyda2003@cluster0.uuowm9p.mongodb.net/").then(res=>{
    console.log("db connected")

})
const productSchema=mongoose.Schema({
   
    title:{
        type:String,
        required:true
    },
   content: {
        type:String,
        required:true
    }
   
})
const Products=mongoose.model("Products",productSchema)

app.get("/",async(req,res)=>{
    const data=await Products.find()
    res.send(data)
})

app.post("/", async (req, res) => {

    const newProduct = new Products({
        ...req.body
    })
    await newProduct.save()
    res.send(newProduct)
})
app.listen(3000)
