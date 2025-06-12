app.get("/getqueuepatient", async(req,res) => {

    try{

        const results = await knex("patient_queue")
                        .orderBy("id", "desc")
                        .first()
                        .select("number")
        
        res.status(200).json({message : "Antrian Aman!"})
    }catch(err){
        res.status(500).json({message : "Server Terjadi Gangguan!r"})
    }

})

app.post("/postqueuepatient", async(req,res) => {
    try{
        const number = req.body
        
        const results = await knex("patient_queue")
                        .insert(
                            number
                        )
        res.status(200).json({message : "Antrian Berhasil!"})
    }catch(err){
        res.status(500).json({message : "Server Terjadi Gangguan!"})
    }
})