// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
import testData from "./testData.json";
const prisma = new PrismaClient();

async function main() {
  // Iterate over the testData array and create a business for each object
  for (const businessData of testData) {
    const { coupons, categories, photos, ...business } = businessData;

    // Create the business in the database
    const createdBusiness = await prisma.business.create({
      data: {
        ...business,
        // Create coupons for the business
        coupons: {
          create: coupons.map((coupon) => ({
            description: coupon.description,
          })),
        },
        // Create categories for the business
        categories: {
          create: categories.map((category) => ({
            category,
          })),
        },
        // Create photos for the business
        photos: {
          create: photos,
        },
      },
    });

    console.log(`Created business with ID: ${createdBusiness.id}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
