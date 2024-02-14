// import { createYoga, YogaInitialContext } from "graphql-yoga";
// import type { NextApiRequest, NextApiResponse } from "next";
// import { resolvers } from "../../../../../graphql/resolvers";
// import { typeDefs } from "../../../../../graphql/schema";

// const options = {
//   typeDefs: typeDefs as string,
//   resolvers,
//   context: ({
//     req,
//     res,
//   }: YogaInitialContext &
//     NextApiRequest & { req: NextApiRequest; res: NextApiResponse }) => ({
//     req,
//     res,
//   }),
// };

// const yogaServer = createYoga(options);

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   yogaServer.handler(req, res);
// };

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };


import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}