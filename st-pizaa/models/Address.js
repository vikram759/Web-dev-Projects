import mongoose from 'mongoose';


const addressSchema = new mongoose.Schema({
    email:{type:String},
    phoneNumber:{type:Number},
    address:{type:String,unique:true,required:true},
    postal:{type:Number},
    city:{type:String},
    country:{type:String},
    isSelected:{ type: Boolean}
    

},
{timestamps:true}
);
const Address = mongoose.models.Address||mongoose.model('Address', addressSchema)

export default Address