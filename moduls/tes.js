app.get("/tes", async(req, res) => {
    const results = await knex('coba').select()
    res.json(results)
})