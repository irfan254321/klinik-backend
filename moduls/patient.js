app.get("/getpatientdata", async (req, res) => {

    try{
        const results = await knex("patient_data").select()
        
        res.status(200).json({message: "Data Berhasil Terambil"})
    }catch(err){
        res.status(500).json({message : `${err}, Server Sedang Mengalami Masalah!`})
    }

})

app.post("/postpasientdata", async (req, res) => {
    
    let date = new Date
    let medicre = `${date.getDate()}${date.getMonth()}${date.getYear()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`


    const {
        medicalRecords,
        name_patient,
        date_birth,
        gender,
        identity,
        no_identity,
    } = req.body

    const results = await knex("patient_data").insert({
        medicalRecords : medicre,
        "name_patient" : name_patient,
        "date_birth" : date_birth,
        "gender" : gender,
        "identity" : identity,
        "no_identity" : no_identity
    })

    res.json(results)

})