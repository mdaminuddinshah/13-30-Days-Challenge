function notFound(req,res){
    res.status(404).json({
        message: "not found lah"
    })
}

export default notFound;