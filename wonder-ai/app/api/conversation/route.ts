import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai-edge";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

// integrate OpenAI API SDK
export const runtime = "edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) { 
      return new NextResponse("Free trial has been expired.", { status: 403 });
     
    }

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      stream: true,
      // I want my system to act like a cat
      messages: [
        {
          role: "system",
          content: "Your system message here",
        },
        ...messages,
      ],
    });

    if (!isPro) {
      await increaseApiLimit();
    }

    // create stream of data from OpenAI (stream data to frontend)
    const stream = await OpenAIStream(response);
    // Old Version to return OpenAI response
    // return NextResponse.json(response);

    //New Version to return stream data
    return new StreamingTextResponse(stream);
  } catch (error) {
    //   console.log("[CONVERSATION_ERROR]", error);
    //   console.log("help");
    //   return new NextResponse("Internal Error", { status: 500 });
    // }

    //Vercel AI SDK HANDLING Error
    // Check if the error is an APIError      
    console.log('error',error )
    if (error instanceof OpenAI.APIError) {
      const { name, status, headers, message } = error;

      return NextResponse.json({ name, status, headers, message }, { status });
      
    } else {
      throw error;
    }
  }
}
