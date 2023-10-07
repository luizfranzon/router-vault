import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { macAddress } = req.query
  const routerData = await prisma.router.findUnique({
    where: {
      macAddress: macAddress as string,
    },
  })
  if (routerData === null) {
    res.status(200).json({
      error: 'No router found with that MAC address',
    })
  } else {
    res.status(200).json(routerData)
  }
}
