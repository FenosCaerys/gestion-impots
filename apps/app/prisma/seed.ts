import { config } from "dotenv"
config()
import ora from "ora"

import bcrypt from "bcryptjs"
import { env } from "@/lib/env"
// import { logger, startTask } from "@gestion-impots/lib"
import { PrismaClient } from "@prisma/client"

const spinner = ora()

const prisma = new PrismaClient()

async function main() {
  try {
    //* Admin
    const adminExists = await prisma.user.findFirst({
      where: {
        email: env.AUTH_ADMIN_EMAIL,
      },
    })
    if (!adminExists) {
      console.log("Creating admin...")
      await prisma.user.create({
        data: {
          email: env.AUTH_ADMIN_EMAIL as string,
          password: await bcrypt.hash(env.AUTH_ADMIN_PASSWORD ?? "", 12),
          role: "ADMIN",
          emailVerified: new Date(),
          hasPassword: true,
          name: "Admin",
          firstName: "Administrateur",
          lastName: "Système",
          npi: `NPI${Date.now()}ADM`,
          profileCompletionStep: 3,
        },
      })
      console.log("Admin created")
    } else {
      console.log("Admin already exists")
    }

    //* Utilisateur de test
    const testUserExists = await prisma.user.findFirst({
      where: {
        email: "test@user.com",
      },
    })
    if (!testUserExists) {
      console.log("Creating test user...")
      await prisma.user.create({
        data: {
          email: "test@user.com",
          password: await bcrypt.hash("password123", 12),
          role: "USER",
          emailVerified: new Date(),
          hasPassword: true,
          name: "Utilisateur Test",
          firstName: "Jean",
          lastName: "Dupont",
          phoneNumber: "+225 07 12 34 56 78",
          npi: `NPI${Date.now()}USR`,
          profileCompletionStep: 2,
        },
      })
      console.log("Test user created")
    } else {
      console.log("Test user already exists")
    }
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    spinner.stop()
    await prisma.$disconnect()
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
