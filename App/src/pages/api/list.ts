import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const routersList = await prisma.router.findMany({
    select: {
      routerModel: true,
      macAddress: true,
      configuredBy: true,
    },
  })
  res.status(200).json(routersList)
}
