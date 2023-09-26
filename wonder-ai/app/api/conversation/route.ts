import { error } from "console";
import { NextResponse } from "next/server";
import  OpenAI  from "openai";
import {auth} from '@clerk/nextjs';


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

export async function POST(
    req:Request
){
    const {userId} = auth();
    const body = await req.json();
    const {message} = body;

    if (!userId){
        return new NextResponse("Unauthorized", {status: 401})
    }
    try{
const {userId} = auth(); 
    }catch (error){
        console.log("[CONVERSATION_ERROR]", error)
        return new NextResponse("Internal Server Error", {status: 500})
    }
}

