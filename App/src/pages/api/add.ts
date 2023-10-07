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
    configuredBy,
  } = req.body

  const routerData = await prisma.router.findUnique({
    where: {
      macAddress: macAddress as string,
    },
  })

  console.log(routerData)

  if (!routerData) {
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
        configuredBy,
        configuredAt: new Date(),
      },
    })

    res.status(200).json({
      message: 'Equipamento adicionado com sucesso.',
      created: true,
    })
  } else {
    const updateUser = await prisma.router.update({
      where: {
        macAddress: routerData.macAddress,
      },
      data: {
        routerModel,
        macAddress,
        cableDownloadSpeed: Number(cableDownloadSpeed),
        cableUploadSpeed: Number(cableUploadSpeed),
        wifiDownloadSpeed2G: Number(wifiDownloadSpeed2G),
        wifiUploadSpeed2G: Number(wifiUploadSpeed2G),
        wifiDownloadSpeed5G: Number(wifiDownloadSpeed5G),
        wifiUploadSpeed5G: Number(wifiUploadSpeed5G),
        configuredBy,
        configuredAt: new Date(),
      },
    })

    res.status(200).json({
      message: 'Equipamento atualizado com sucesso.',
      created: true,
    })
  }
}
