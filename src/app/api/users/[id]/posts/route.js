// import Prompt from "@models/prompt";
// import { connectToDB } from "@utils/database";

// export const GET = async (request, { params }) => {
//     try {
//         await connectToDB()

//         const prompts = await Prompt.find({ creator: params.id }).populate("creator")

//         return new Response(JSON.stringify(prompts), { status: 200 })
//     } catch (error) {
//         return new Response("Failed to fetch prompts created by user", { status: 500 })
//     }
// } 






// import Prompt from "@models/prompt";
// import { connectToDB } from "@utils/database";

// export const GET = async (request, contextPromise) => {
//     try {
//         const { params } = await contextPromise;

//         await connectToDB();

//         const prompts = await Prompt.find({ creator: params.id }).populate("creator");

//         return new Response(JSON.stringify(prompts), { status: 200 });
//     } catch (error) {
//         console.error("Error fetching prompts:", error);
//         return new Response("Failed to fetch prompts created by user", { status: 500 });
//     }
// };











import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request,{ params }) => {
    try {
        await connectToDB();
        console.log("aaaaaaaaaaaaa===", params)

        const prompts = await Prompt.find({ creator:params.id }).populate("creator");


        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error("Error fetching prompts:", error);
        return new Response("Failed to fetch prompts created by user", { status: 500 });
    }
};
