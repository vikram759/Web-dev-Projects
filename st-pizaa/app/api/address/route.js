import Address from "../../../models/Address";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import connectDb from "../../../db/ConnectionDb";
import { NextResponse } from "next/server";




export async function POST(req){
     await connectDb()

    let x=await req.json()

    const session=await getServerSession(authOptions)
    const emailz=session?.user?.email
    console.log({session,x})
let addresses=await Address.findOne({email:emailz}).lean();
const updateData = { isSelected: false };

if(addresses){
    await Address.updateMany({email:emailz},{ $set: updateData})
}
console.log(addresses)

    const Newaddress= await new Address({
        email:emailz,
        phoneNumber:x.phoneNumber,
    address:x.address,
    postal:x.postal,
    city:x.city,
    country:x.country,
    isSelected:true,
        
       
    })

    try{
        await Newaddress.save()
         return new NextResponse("user is registered",{status:200})
    } 
    catch(err){
        return new NextResponse(err,{status:500,});
    }



}