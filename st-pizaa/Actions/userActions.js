"use server"

import Address from "../models/Address"
import User from "../models/User"
import Collection from "../models/Collection"
import connectDb from "../db/ConnectionDb"
import MenuItems from "../models/MenuItems"
import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";


export const fetchAdresses=async()=>{
    await connectDb();
    const session=await getServerSession(authOptions)
    const emailz=session?.user?.email

    let hpmes=await Address.find({email:emailz}).lean();
    let postzz=hpmes.map(doc=>{
        doc._id = doc._id.toString();
        return doc;
    })
    return postzz

}

export const fetchadmin=async()=>{

    await connectDb()
    const session=await getServerSession(authOptions)
    const emailz=session?.user?.email
    const postzz=await User.findOne({email:emailz})

    if(postzz.admin===true){
        return true
    }
    else{
        return false
    }
    
    
}
export const fetchCollection=async()=>{

    await connectDb();

    const coll=await Collection.find({}).lean()
    let postzz=coll.map(doc=>{
        doc._id = doc._id.toString();
        return doc;
    })
    return postzz
}
export const fetchMenuItems=async()=>{
    const coll=await MenuItems.find({}).lean()
    let postzz=coll.map(doc=>{
        doc._id = doc._id.toString();
        return doc;
    })
    return postzz

}

export const fetchitems=async(id)=>{

    const m=await MenuItems.findOne({id:id});
    let user=m.toObject({flattenObjectIds:true})

    return user;
}
export const fetchitemss=async(cat)=>{

    const m=await MenuItems.find({category:cat});
    let postzz=m.map(doc=>{
        doc._id = doc._id.toString();
        return doc;
    })
    return postzz
}

