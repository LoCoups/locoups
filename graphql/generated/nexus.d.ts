/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  Role: "ADMIN" | "USER"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Business: { // root type
    address?: string | null; // String
    categories?: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    city?: string | null; // String
    coupons?: Array<NexusGenRootTypes['Coupon'] | null> | null; // [Coupon]
    id?: string | null; // ID
    latitude?: number | null; // Float
    longitude?: number | null; // Float
    name?: string | null; // String
    neighborhood?: string | null; // String
    photos?: Array<NexusGenRootTypes['photo'] | null> | null; // [photo]
    state?: string | null; // String
    zipCode?: string | null; // String
  }
  Category: { // root type
    businesses?: Array<NexusGenRootTypes['Business'] | null> | null; // [Business]
    category?: string | null; // String
    id?: string | null; // ID
  }
  Coupon: { // root type
    business?: NexusGenRootTypes['Business'] | null; // Business
    description?: string | null; // String
    id?: string | null; // ID
    users?: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  Link: { // root type
    category?: string | null; // String
    description?: string | null; // String
    id?: string | null; // ID
    imageUrl?: string | null; // String
    title?: string | null; // String
    url?: string | null; // String
    users?: Array<string | null> | null; // [String]
  }
  Mutation: {};
  Query: {};
  User: { // root type
    bookmarks?: Array<NexusGenRootTypes['Link'] | null> | null; // [Link]
    coupons?: Array<NexusGenRootTypes['Coupon'] | null> | null; // [Coupon]
    createdAt?: string | null; // String
    email?: string | null; // String
    id?: string | null; // ID
    image?: string | null; // String
    role?: NexusGenEnums['Role'] | null; // Role
    updatedAt?: string | null; // String
  }
  photo: { // root type
    business?: NexusGenRootTypes['Business'] | null; // Business
    caption?: string | null; // String
    id?: string | null; // ID
    imgUrl?: string | null; // String
    label?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Business: { // field return type
    address: string | null; // String
    categories: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    city: string | null; // String
    coupons: Array<NexusGenRootTypes['Coupon'] | null> | null; // [Coupon]
    id: string | null; // ID
    latitude: number | null; // Float
    longitude: number | null; // Float
    name: string | null; // String
    neighborhood: string | null; // String
    photos: Array<NexusGenRootTypes['photo'] | null> | null; // [photo]
    state: string | null; // String
    zipCode: string | null; // String
  }
  Category: { // field return type
    businesses: Array<NexusGenRootTypes['Business'] | null> | null; // [Business]
    category: string | null; // String
    id: string | null; // ID
  }
  Coupon: { // field return type
    business: NexusGenRootTypes['Business'] | null; // Business
    description: string | null; // String
    id: string | null; // ID
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  Link: { // field return type
    category: string | null; // String
    description: string | null; // String
    id: string | null; // ID
    imageUrl: string | null; // String
    title: string | null; // String
    url: string | null; // String
    users: Array<string | null> | null; // [String]
  }
  Mutation: { // field return type
    addBusiness: NexusGenRootTypes['Business'] | null; // Business
    deleteBusiness: NexusGenRootTypes['Business'] | null; // Business
    updateBusiness: NexusGenRootTypes['Business'] | null; // Business
  }
  Query: { // field return type
    getBusinesses: Array<NexusGenRootTypes['Business'] | null> | null; // [Business]
  }
  User: { // field return type
    bookmarks: Array<NexusGenRootTypes['Link'] | null> | null; // [Link]
    coupons: Array<NexusGenRootTypes['Coupon'] | null> | null; // [Coupon]
    createdAt: string | null; // String
    email: string | null; // String
    id: string | null; // ID
    image: string | null; // String
    role: NexusGenEnums['Role'] | null; // Role
    updatedAt: string | null; // String
  }
  photo: { // field return type
    business: NexusGenRootTypes['Business'] | null; // Business
    caption: string | null; // String
    id: string | null; // ID
    imgUrl: string | null; // String
    label: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Business: { // field return type name
    address: 'String'
    categories: 'Category'
    city: 'String'
    coupons: 'Coupon'
    id: 'ID'
    latitude: 'Float'
    longitude: 'Float'
    name: 'String'
    neighborhood: 'String'
    photos: 'photo'
    state: 'String'
    zipCode: 'String'
  }
  Category: { // field return type name
    businesses: 'Business'
    category: 'String'
    id: 'ID'
  }
  Coupon: { // field return type name
    business: 'Business'
    description: 'String'
    id: 'ID'
    users: 'User'
  }
  Link: { // field return type name
    category: 'String'
    description: 'String'
    id: 'ID'
    imageUrl: 'String'
    title: 'String'
    url: 'String'
    users: 'String'
  }
  Mutation: { // field return type name
    addBusiness: 'Business'
    deleteBusiness: 'Business'
    updateBusiness: 'Business'
  }
  Query: { // field return type name
    getBusinesses: 'Business'
  }
  User: { // field return type name
    bookmarks: 'Link'
    coupons: 'Coupon'
    createdAt: 'String'
    email: 'String'
    id: 'ID'
    image: 'String'
    role: 'Role'
    updatedAt: 'String'
  }
  photo: { // field return type name
    business: 'Business'
    caption: 'String'
    id: 'ID'
    imgUrl: 'String'
    label: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addBusiness: { // args
      address: string; // String!
      city?: string | null; // String
      latitude?: string | null; // String
      longitude?: string | null; // String
      name: string; // String!
      neighborhood?: string | null; // String
      state?: string | null; // String
      zipCode?: string | null; // String
    }
    deleteBusiness: { // args
      id: string; // ID!
    }
    updateBusiness: { // args
      address: string; // String!
      city?: string | null; // String
      id: string; // ID!
      latitude?: string | null; // String
      longitude?: string | null; // String
      name: string; // String!
      neighborhood?: string | null; // String
      state?: string | null; // String
      zipCode?: string | null; // String
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}