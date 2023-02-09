import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'

const t = initTRPC.context().create()

export const router = t.router
export const middleware = t.middleware
export const publicProcedure = t.procedure
export const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({})
