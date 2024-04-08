export function notFound(req,res){
    res.status(404);
    res.send("Page not found");
    console.error("PAGE NOT FOUND")
}