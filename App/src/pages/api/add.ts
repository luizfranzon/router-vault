import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    routerModel,
    macAddress,
    cableDownloadSpeed,
    cableUploadSpeed,
    wifiDownloadSpeed2G,
    wifiUploadSpeed2G,
    wifiDownloadSpeed5G,
    wifiUploadSpeed5G,
    receivePower,
    transmitPower,
    configuredBy,
  } = req.body

  const router = await prisma.router.create({
    data: {
      routerModel,
      macAddress,
      cableDownloadSpeed: Number(cableDownloadSpeed),
      cableUploadSpeed: Number(cableUploadSpeed),
      wifiDownloadSpeed2G: Number(wifiDownloadSpeed2G),
      wifiUploadSpeed2G: Number(wifiUploadSpeed2G),
      wifiDownloadSpeed5G: Number(wifiDownloadSpeed5G),
      wifiUploadSpeed5G: Number(wifiUploadSpeed5G),
      receivePower: Number(receivePower),
      transmitPower: Number(transmitPower),
      configuredBy,
      configuredAt: new Date(),
    },
  })
  res.status(200).json({
    Message: 'Equipamento adicionado com sucesso.',
    Data: router,
  })
}
