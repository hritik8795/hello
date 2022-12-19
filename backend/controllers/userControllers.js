import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const signup =async(req,res )=>{
const {name,email,password ,confirmPassword} =req.body
try {
    const alreadyUser =await User.findOne({email})
    if(alreadyUser)
      return res.status(400).json({messag:"user already exists"})

    if (password !== confirmPassword)
      return res.status(400).json({ message: "password dont match" });

      const hashedPassword = await bcrypt.hash(password, 12);

     const result = await User.create({name,email,password:hashedPassword})

      res.status(201).json({result})
    
} catch (error) {
    res.status(500).json({message:"something error"})
    
}


}
export const login =async(req,res) =>{
    const {email,password} =req.body

    try {
        const alreadyUser =await User.findOne({email})
        if (!alreadyUser){
            return res.status(400).json({message:"user does not exist"})
        }
        const exactPassword = await bcrypt.compare(password,alreadyUser.password);
        if(!exactPassword){
            return res.status(400).json({message:"password is wrong"});
        }
        return res.status(200).json({result:alreadyUser});
    } catch (error) {
        res.status(500).json({message:"kuch to galat hai maa kasam"})
        
    }

    User.findOne({email:email}, (err,user) =>{
        if(user){
            if(password === user.password){
                res.send({message:"successfully logged in",user:user});
            }
            else{
                res.send({message:"incorrect password"});
            }
        }
        else{
            res.send({message:"user not found"});
                    }
    });
}