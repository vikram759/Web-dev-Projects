import mongoose from 'mongoose';


const MenuItemsSchema = new mongoose.Schema({
    
    name:{type:String,unique:true,required:true},
    image:{type:String},
    id:{type:String},
    category:{type:String},
    size:{type:Array},
    extra:{type:Array},

    cost:{type:Number},


   
    

},
{timestamps:true}
);
const MenuItems = mongoose.models.MenuItems||mongoose.model('MenuItems', MenuItemsSchema)

export default MenuItems