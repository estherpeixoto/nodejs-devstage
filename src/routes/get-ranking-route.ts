import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getRanking } from '../functions/get-ranking'

export const getRankingRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/ranking',
    {
      schema: {
        operationId: 'getRanking',
        summary: 'Get ranking',
        description: 'Bigger text',
        tags: ['referral'],
        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                id: z.string(),
                name: z.string(),
                score: z.number(),
              })
            ),
          }),
        },
      },
    },
    async () => {
      const { rankingWithScore } = await getRanking()

      return { ranking: rankingWithScore }
    }
  )
}
