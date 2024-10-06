import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    
    name:{type:String},
    email:{type:String,unique:true,required:true},
    username:{type:String},
    password:{type:String,required:true,
        validate:(pass)=>{
            if(!pass?.length||pass.length<5){
                new Error('password must be at least 5 characters')
                return false;
            }

         },

    },
    admin:{type:Boolean, default:false}
    

},
{timestamps:true}
);


userSchema.post('validate',function(user){
    const pass=user.password;
    const salt=bcrypt.genSaltSync(10);
    user.password=bcrypt.hashSync(pass,salt);
    

    
})
const User = mongoose.models.User||mongoose.model('User', userSchema)

export default User