import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { subscribeToEvent } from '../functions/subscribe-to-event'

export const subscribeToEventRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscriptions',
    {
      schema: {
        operationId: 'subscribeToEvent',
        summary: 'Subscribes someone to the event',
        description: 'Bigger text',
        tags: ['subscription'],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          referrer: z.string().nullish(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email, referrer } = request.body

      const { subscriberId } = await subscribeToEvent({
        name,
        email,
        referrerId: referrer,
      })

      return reply.status(201).send({
        subscriberId,
      })
    }
  )
}
