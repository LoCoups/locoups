// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    String: string,
    ID: string,
    Float: number,
    Boolean: boolean,
}

export interface Business {
    address: (Scalars['String'] | null)
    categories: ((Category | null)[] | null)
    city: (Scalars['String'] | null)
    coupons: ((Coupon | null)[] | null)
    id: (Scalars['ID'] | null)
    latitude: (Scalars['Float'] | null)
    longitude: (Scalars['Float'] | null)
    name: (Scalars['String'] | null)
    neighborhood: (Scalars['String'] | null)
    photos: ((photo | null)[] | null)
    state: (Scalars['String'] | null)
    zipCode: (Scalars['String'] | null)
    __typename: 'Business'
}

export interface Category {
    businesses: ((Business | null)[] | null)
    category: (Scalars['String'] | null)
    id: (Scalars['ID'] | null)
    __typename: 'Category'
}

export interface Coupon {
    business: (Business | null)
    description: (Scalars['String'] | null)
    id: (Scalars['ID'] | null)
    users: ((User | null)[] | null)
    __typename: 'Coupon'
}

export interface Link {
    category: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    id: (Scalars['ID'] | null)
    imageUrl: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    users: ((Scalars['String'] | null)[] | null)
    __typename: 'Link'
}

export interface Mutation {
    addBusiness: (Business | null)
    deleteBusiness: (Business | null)
    updateBusiness: (Business | null)
    __typename: 'Mutation'
}

export interface Query {
    getBusinesses: ((Business | null)[] | null)
    __typename: 'Query'
}

export type Role = 'ADMIN' | 'USER'

export interface User {
    bookmarks: ((Link | null)[] | null)
    coupons: ((Coupon | null)[] | null)
    createdAt: (Scalars['String'] | null)
    email: (Scalars['String'] | null)
    id: (Scalars['ID'] | null)
    image: (Scalars['String'] | null)
    role: (Role | null)
    updatedAt: (Scalars['String'] | null)
    __typename: 'User'
}

export interface photo {
    business: (Business | null)
    caption: (Scalars['String'] | null)
    id: (Scalars['ID'] | null)
    imgUrl: (Scalars['String'] | null)
    label: (Scalars['String'] | null)
    __typename: 'photo'
}

export interface BusinessGenqlSelection{
    address?: boolean | number
    categories?: CategoryGenqlSelection
    city?: boolean | number
    coupons?: CouponGenqlSelection
    id?: boolean | number
    latitude?: boolean | number
    longitude?: boolean | number
    name?: boolean | number
    neighborhood?: boolean | number
    photos?: photoGenqlSelection
    state?: boolean | number
    zipCode?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CategoryGenqlSelection{
    businesses?: BusinessGenqlSelection
    category?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CouponGenqlSelection{
    business?: BusinessGenqlSelection
    description?: boolean | number
    id?: boolean | number
    users?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LinkGenqlSelection{
    category?: boolean | number
    description?: boolean | number
    id?: boolean | number
    imageUrl?: boolean | number
    title?: boolean | number
    url?: boolean | number
    users?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    addBusiness?: (BusinessGenqlSelection & { __args: {address: Scalars['String'], city?: (Scalars['String'] | null), latitude?: (Scalars['String'] | null), longitude?: (Scalars['String'] | null), name: Scalars['String'], neighborhood?: (Scalars['String'] | null), state?: (Scalars['String'] | null), zipCode?: (Scalars['String'] | null)} })
    deleteBusiness?: (BusinessGenqlSelection & { __args: {id: Scalars['ID']} })
    updateBusiness?: (BusinessGenqlSelection & { __args: {address: Scalars['String'], city?: (Scalars['String'] | null), id: Scalars['ID'], latitude?: (Scalars['String'] | null), longitude?: (Scalars['String'] | null), name: Scalars['String'], neighborhood?: (Scalars['String'] | null), state?: (Scalars['String'] | null), zipCode?: (Scalars['String'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    getBusinesses?: BusinessGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGenqlSelection{
    bookmarks?: LinkGenqlSelection
    coupons?: CouponGenqlSelection
    createdAt?: boolean | number
    email?: boolean | number
    id?: boolean | number
    image?: boolean | number
    role?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface photoGenqlSelection{
    business?: BusinessGenqlSelection
    caption?: boolean | number
    id?: boolean | number
    imgUrl?: boolean | number
    label?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Business_possibleTypes: string[] = ['Business']
    export const isBusiness = (obj?: { __typename?: any } | null): obj is Business => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBusiness"')
      return Business_possibleTypes.includes(obj.__typename)
    }
    


    const Category_possibleTypes: string[] = ['Category']
    export const isCategory = (obj?: { __typename?: any } | null): obj is Category => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategory"')
      return Category_possibleTypes.includes(obj.__typename)
    }
    


    const Coupon_possibleTypes: string[] = ['Coupon']
    export const isCoupon = (obj?: { __typename?: any } | null): obj is Coupon => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCoupon"')
      return Coupon_possibleTypes.includes(obj.__typename)
    }
    


    const Link_possibleTypes: string[] = ['Link']
    export const isLink = (obj?: { __typename?: any } | null): obj is Link => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLink"')
      return Link_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const photo_possibleTypes: string[] = ['photo']
    export const isphoto = (obj?: { __typename?: any } | null): obj is photo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphoto"')
      return photo_possibleTypes.includes(obj.__typename)
    }
    

export const enumRole = {
   ADMIN: 'ADMIN' as const,
   USER: 'USER' as const
}
