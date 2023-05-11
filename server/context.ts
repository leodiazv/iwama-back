import { FetchCreateContextFnOptions, inferAsyncReturnType } from "../deps.ts";

export function createContext({ req }: FetchCreateContextFnOptions) {
  // const token = req.headers.get('Authorization') ?? 'anonymous'
  return { req };
}

export type Context = inferAsyncReturnType<typeof createContext>;
