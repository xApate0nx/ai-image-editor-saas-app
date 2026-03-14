import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const auth = betterAuth({

    emailAndPassword: { 
    enabled: true, 
  }, 
  trustedOrigins: [
    "http://localhost:3050",
    "http://10.98.95.45:3050",
    "http://127.0.0.1:3050"
  ],

    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
});