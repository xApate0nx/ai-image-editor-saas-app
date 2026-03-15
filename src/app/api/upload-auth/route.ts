// File: app/api/upload-auth/route.ts
import { getUploadAuthParams } from "@imagekit/next/server"
import { env } from "~/env"

export async function GET() {
    // Your application logic to authenticate the user
    // For example, you can check if the user is logged in or has the necessary permissions
    // If the user is not authenticated, you can return an error response
    try {
        const { token, expire, signature } = getUploadAuthParams({
        privateKey: env.IMAGEKIT_PRIVATE_KEY,
        publicKey: env.IMAGEKIT_PUBLIC_KEY,
        });

        return Response.json({
            token,
            expire,
            signature,
            publicKey: env.IMAGEKIT_PUBLIC_KEY,
            urlEndpoint: env.IMAGEKIT_URL_ENDPOINT,
        });
    } catch (error) {
        console.error("Upload auth error:", error);
        return Response.json(
            { error: "Failed to generate upload credentials" },
            { status: 500 },
        );
    }
}