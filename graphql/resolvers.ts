import { Category, Coupon, Photo } from "@prisma/client";
import prisma from "../lib/prisma";

export const resolvers = {
  Query: {
    businesses: () => {
      return prisma.business.findMany();
    },
    coupons: () => {
      return prisma.coupon.findMany();
    },
    categories: () => {
      return prisma.category.findMany();
    },
    users: () => {
      return prisma.user.findMany();
    },
    photos: () => {
      return prisma.photo.findMany();
    },
  },
};

// Business: {
//   coupons: async (parent: Coupon) => {
//     return await prisma.coupon.findMany({
//       where: {
//         businessId: parent.id,
//       },
//     });
//   },
//   categories: async (parent: Category) => {
//     return await prisma.category.findMany({
//       where: {
//         businesses: parent.businesses,
//       },
//     });
//   },
//   photos: async (parent: Photo) => {
//     return await prisma.photo.findMany({
//       where: {
//         businessId: parent.id,
//       },
//     });
//   },
// },
// Coupon: {},
// User: {},
// Category: {},
