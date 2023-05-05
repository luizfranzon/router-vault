import { Database, MagnifyingGlass, Link as LinkSVG } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { upperCase } from '../utils/upperCase'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TriggerAddRouterButton } from './TriggerAddRouterButton'
import Link from 'next/link'

export type Router = {
  id: string
  routerModel: string
  macAddress: string
  cableDownloadSpeed: number
  cableUploadSpeed: number
  wifiDownloadSpeed2G: number
  wifiUploadSpeed2G: number
  wifiDownloadSpeed5G: number
  wifiUploadSpeed5G: number
  configuredAt: string
  configuredBy: string
}

type HeaderProps = {
  setRouter: (router: Router) => void
  setShowCard: (showCard: boolean) => void
}

export function Header({ setRouter, setShowCard }: HeaderProps) {
  const [macAddress, setMacAddress] = useState('')

  function handleRouterSearch(event: FormEvent) {
    event.preventDefault()
    fetch(`/api/${macAddress}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setRouter(data)
          setShowCard(true)
        } else {
          setShowCard(false)
          notify()
        }
      })
  }

  const notify = () => toast('Roteador não encontrado!')

  return (
    <header className="relative flex flex-col items-center bg-very-dark-gray justify-center h-44">
      <h1 className="mt-12 flex gap-2 text-4xl text-light-blue font-extrabold">
        Router
        <span className="text-purple-1 gap-2 flex">
          Vault{' '}
          <a target="_blank" href={'/api/list'} rel="noreferrer">
            <Database size={36} weight="bold" />
          </a>
        </span>
        <TriggerAddRouterButton />
      </h1>
      <form
        onSubmit={handleRouterSearch}
        className="relative top-[60px] flex flex-col"
        action=""
      >
        <div className="flex items-center justify-center gap-2">
          <input
            className="bg-[#262626] transition-colors rounded-lg text-lg h-16 p-4 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
            type="text"
            placeholder="Endereço MAC"
            name="macAddress"
            id="mac-address"
            maxLength={17}
            onChange={(event) => setMacAddress(upperCase(event.target.value))}
            required
          />
          <button className="flex items-center justify-center gap-2 text-sm bg-[#1E6F9F] w-28 h-[90%] rounded-lg font-bold hover:bg-[#115379] transition-colors">
            Buscar <MagnifyingGlass size={20} weight="bold" />
          </button>
        </div>
        <Link
          title="Buscar equipamento pelo nome do cliente"
          href={'/financeiro'}
          className="underline mt-4 text-center flex items-center justify-center gap-1"
        >
          Pesquisar por cliente <LinkSVG size={18} color="#ffffff" />
        </Link>
      </form>
      <ToastContainer
        toastClassName={() =>
          'relative mt-3 flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-[#5e60ce]'
        }
        bodyClassName={() => 'mx-1 text-sm font-white font-bold block p-3'}
        position="bottom-right"
        autoClose={3000}
      />
    </header>
  )
}
