import path from "path";
import fs from "fs";

const dashboardPath = path.join(process.cwd(), "pages", "dashboard.html");
const readDashboard = fs.readFileSync(dashboardPath, "utf-8");

function Dashboard(req,res){
    res.send(readDashboard);
}

export default Dashboard;