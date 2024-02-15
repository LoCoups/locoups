// /pages/api/graphql.ts
import { schema } from "../../../graphql/schema";
import { context } from "../../../graphql/context";

import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";

const yoga = createYoga({ schema, context });
const server = createServer(yoga);
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
export default server;
