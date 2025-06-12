const bcrypt = require("bcrypt")

app.post("/loginuser", async(req, res) => {
   
   const {email, password} = req.body

      if(!email || !password){
         res.status(400).json({message : "Email atau Password harus diisi!"})
      }

   try{
      
      const userEmail = await knex("user_klinik").where({email}).first()

      if(!userEmail){
         return res.status(401).json({message : "Email Anda Salah!"})
      }
      const userPassword = await bcrypt.compare(password, userEmail.password)

      if(!userPassword){
         return res.status(401).json({message : "Password Anda Salah"})
      }
      res.status(200).json({message : "Login Berhasil!"})
   }catch(err){
      res.status(500)
   }
})