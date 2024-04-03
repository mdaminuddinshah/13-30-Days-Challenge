import fs from "fs";
import path from "path";

const htmlpath = path.join(process.cwd(), "pages", "home.html");
const readpath = fs.readFileSync(htmlpath, "utf-8");

function Home(req,res){
    res.send(readpath)
}

export default Home;