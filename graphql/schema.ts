export const typeDefs = `
  type Link {
    id: ID
    title: String
    description: String
    url: String
    category: String
    imageUrl: String
    users: [String]
  }

  type Business {
    id: ID
    name: String
    address: String 
    city: String
    state: String
    zipCode: String
    neighborhood: String
    longitude: Float
    latitude: Float
    coupons: [Coupon]
    categories: [Category]
    photos: [Photo]
  }
  
  type User {
    id: ID
    createdAt: String
    updatedAt: String
    email: String
    image: String
    role: Role
    bookmarks: [Link]
    coupons: [Coupon]
  }

  type Coupon {
    id: ID
    business: Business
    description: String
    users: [User]
  }

  type Category {
    id: ID
    category: String
    businesses: [Business]
  }

  enum Role {
    USER
    ADMIN
  }

  type Query {
    links: [Link]!
    businesses: [Business]!
    coupons: [Coupon]!
    categories: [Category]!
    users: [User]!
  }
`;
