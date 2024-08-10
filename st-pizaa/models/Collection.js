import mongoose from 'mongoose';


const CollectionSchema = new mongoose.Schema({
    collection:{type:String,unique:true},
 

},
{timestamps:true}
);
const Collection = mongoose.models.Collection||mongoose.model('Collection', CollectionSchema)

export default Collection