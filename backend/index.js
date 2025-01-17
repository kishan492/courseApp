import express from "express"
import dotenv from "dotenv"
import connectdb from "./config/db.js";
import courseRoute from "./routes/courseRouter.js"
import cors from "cors"

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
connectdb();

const port = process.env.PORT || 3000;

app.use('/api/course',courseRoute);
app.get('/',(req,res)=>{
    res.send("welcome to index page")
})

app.listen(port,()=>{
    console.log(`your app is running on http://localhost:${port}`)
})
