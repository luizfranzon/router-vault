import { Header } from '@/components/Header'
import { useState } from 'react'

import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { format } from 'date-fns'
import { Router } from '../components/Header'

export default function Home() {
  const [router, setRouter] = useState<Router>({
    id: '',
    routerModel: '',
    macAddress: '',
    cableDownloadSpeed: 0,
    cableUploadSpeed: 0,
    wifiDownloadSpeed2G: 0,
    wifiUploadSpeed2G: 0,
    wifiDownloadSpeed5G: 0,
    wifiUploadSpeed5G: 0,
    configuredAt: '',
    configuredBy: '',
  })
  const [showCard, setShowCard] = useState(false)

  return (
    <div>
      <Header setRouter={setRouter} setShowCard={setShowCard} />
      {showCard ? (
        <div id="Card">
          <div className="p-6 flex flex-col items-center bg-[#262626] max-w-[736px] m-auto mt-28 rounded-lg ju">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold">
                MAC:{' '}
                <span className="font-normal select-all">
                  {router?.macAddress}
                </span>
              </h2>
              <span className="font-bold">
                Modelo:{' '}
                <span className="font-normal">{router?.routerModel}</span>
              </span>
            </div>
            <div className="flex gap-12 mt-8">
              <div className="flex flex-col gap-1">
                <p className="text-center font-bold">Wifi 2.4G</p>
                <div className="flex items-center gap-1">
                  <ArrowCircleDown size={28} weight="bold" color="#6AFFF3" />
                  <span>
                    {router?.wifiDownloadSpeed2G}{' '}
                    <span className="font-bold">Mbps</span>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowCircleUp size={28} weight="bold" color="#BF71FF" />
                  <span>
                    {router?.wifiUploadSpeed2G}{' '}
                    <span className="font-bold">Mbps</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-center font-bold">Wifi 5G</p>
                <div className="flex items-center gap-1">
                  <ArrowCircleDown size={28} weight="bold" color="#6AFFF3" />
                  <span>
                    {router?.wifiDownloadSpeed5G}{' '}
                    <span className="font-bold">Mbps</span>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowCircleUp size={28} weight="bold" color="#BF71FF" />
                  <span>
                    {router?.wifiUploadSpeed5G}{' '}
                    <span className="font-bold">Mbps</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-center font-bold">Cabo</p>
                <div className="flex items-center gap-1">
                  <ArrowCircleDown size={28} weight="bold" color="#6AFFF3" />
                  <span>
                    {router?.cableDownloadSpeed}{' '}
                    <span className="font-bold">Mbps</span>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowCircleUp size={28} weight="bold" color="#BF71FF" />
                  <span>
                    {router?.cableUploadSpeed}{' '}
                    <span className="font-bold">Mbps</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="font-bold flex items-center justify-center gap-2 text-center flex-block mt-4">
            Configurado por:{' '}
            <span className="font-normal">{router?.configuredBy}</span> em:{' '}
            <span className="font-normal">
              {router?.configuredAt
                ? format(new Date(router?.configuredAt), 'dd/MM/yyyy')
                : null}
            </span>
          </p>
        </div>
      ) : null}
    </div>
  )
}
