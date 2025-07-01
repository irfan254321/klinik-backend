app.post("/posttoken", async (req,res) => {

    const SECRET_KEY = process.env.SECRET_KEY

    const {user} = req.body

    const checkuser = await knex("testoken").where({user}).first()

    try{
        if(!checkuser){
            return res.status(400).json({message : "Your Username is Wrong"})
        }
        
        const insertToken = jwebtoken({"token" : SECRET_KEY})
        res.json(checkuser)
    }
    catch (err) {
        res.status(500).json({message : "Failed to Insert Token", err})
    }
})

app.get("/gettoken", async (req,res) => {
    const result = await knex("testoken").select()

    res.json(result)
})