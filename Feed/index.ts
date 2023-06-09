import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest) {
    const posts = await prisma.post.findMany()

    return {
        status: 200,
        body: posts
    }
};

export default httpTrigger;