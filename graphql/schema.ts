import {
  asNexusMethod,
  objectType,
  makeSchema,
  queryType,
  mutationType,
  enumType,
  nonNull,
  stringArg,
  idArg,
} from "nexus";
import * as path from "path";
// import { DateTimeResolver } from "graphql-scalars";

const Link = objectType({
  name: "Link",
  definition(t) {
    t.id("id");
    t.string("title");
    t.string("description");
    t.string("url");
    t.string("category");
    t.string("imageUrl");
    t.list.string("users");
  },
});

const Business = objectType({
  name: "Business",
  definition(t) {
    t.id("id");
    t.string("name");
    t.string("address");
    t.string("city");
    t.string("state");
    t.string("zipCode");
    t.string("neighborhood");
    t.float("longitude");
    t.float("latitude");
    t.list.field("coupons", {
      type: Coupon,
    });
    t.list.field("categories", {
      type: Category,
    });
    t.list.field("photos", {
      type: Photo,
    });
  },
});

const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("createdAt");
    t.string("updatedAt");
    t.string("email");
    t.string("image");
    t.field("role", { type: Role });
    t.list.field("bookmarks", {
      type: Link,
    });
    t.list.field("coupons", {
      type: Coupon,
    });
  },
});

const Coupon = objectType({
  name: "Coupon",
  definition(t) {
    t.id("id");
    t.field("business", { type: Business });
    t.string("description");
    t.list.field("users", {
      type: User,
    });
  },
});

const Category = objectType({
  name: "Category",
  definition(t) {
    t.id("id");
    t.string("category");
    t.list.field("businesses", {
      type: Business,
    });
  },
});

const Photo = objectType({
  name: "photo",
  definition(t) {
    t.id("id");
    t.field("business", { type: Business });
    t.string("caption");
    t.string("label");
    t.string("imgUrl");
  },
});

const Role = enumType({
  name: "Role",
  members: ["USER", "ADMIN"],
});
const SortOrder = enumType({
  name: "SortOrder",
  members: ["asc", "desc"],
});

const Query = queryType({
  definition(t) {
    t.list.field("getBusinesses", {
      type: Business,
      resolve: async (_, args, ctx) => {
        try {
          const businesses = await ctx.db.business.findMany();
          return businesses.map((business) => ({
            id: business.id.toString(),
            name: business.name,
            address: business.address,
            city: business.city,
            state: business.state,
            zipCode: business.zipCode,
            neighborhood: business.neighborhood,
            longitude: business.longitude,
            latitude: business.latitude,
          }));
        } catch (error) {
          throw new Error(`${error}`);
        }
      },
    });
  },
});

const Mutation = mutationType({
  definition(t) {
    t.field("addBusiness", {
      type: Business,
      args: {
        name: nonNull(stringArg()),
        address: nonNull(stringArg()),
        city: stringArg(),
        state: stringArg(),
        zipCode: stringArg(),
        neighborhood: stringArg(),
        longitude: stringArg(),
        latitude: stringArg(),
      },
      resolve: async (_, args, ctx) => {
        try {
          const createdBusiness = await ctx.db.business.create({
            data: {
              name: args.name,
              address: args.address,
              city: args.city ?? "",
              state: args.state ?? "",
              zipCode: args.zipCode ?? "",
              neighborhood: args.neighborhood ?? "",
              longitude: parseFloat(args.longitude ?? ""),
              latitude: parseFloat(args.latitude ?? ""),
            },
          });
          // Ensure that the id is converted to a string
          const businessWithIdAsString = {
            ...createdBusiness,
            id: createdBusiness.id.toString(),
          };
          return businessWithIdAsString;
        } catch (error) {
          throw new Error(`${error}`);
        }
      },
    });

    t.field("updateBusiness", {
      type: Business,
      args: {
        id: nonNull(idArg()),
        name: nonNull(stringArg()),
        address: nonNull(stringArg()),
        city: stringArg(),
        state: stringArg(),
        zipCode: stringArg(),
        neighborhood: stringArg(),
        longitude: stringArg(),
        latitude: stringArg(),
      },
      resolve: async (_, args, ctx) => {
        try {
          const updatedBusiness = await ctx.db.business.update({
            where: { id: parseInt(args.id) },
            data: {
              name: args.name,
              address: args.address,
              city: args.city ?? "",
              state: args.state ?? "",
              zipCode: args.zipCode ?? "",
              neighborhood: args.neighborhood ?? "",
              longitude: parseFloat(args.longitude ?? ""),
              latitude: parseFloat(args.latitude ?? ""),
            },
          });
          const businessWithIdAsString = {
            ...updatedBusiness,
            id: updatedBusiness.id.toString(),
          };
          return businessWithIdAsString;
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });
    t.field("deleteBusiness", {
      type: Business,
      args: {
        id: nonNull(idArg()),
      },
      resolve: async (_, args, ctx) => {
        await ctx.db.business.delete({
          where: { id: parseInt(args.id) },
        });
        return null;
      },
    });
  },
});
export const schema = makeSchema({
  types: [Link, Business, User, Coupon, Category, Role, Query, Mutation],
  outputs: {
    schema: path.join(process.cwd(), "graphql/schema.graphql"),
    typegen: path.join(process.cwd(), "graphql/generated/nexus.d.ts"),
  },
  contextType: {
    module: path.join(process.cwd(), "graphql/context.ts"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "db",
      },
    ],
  },
});
