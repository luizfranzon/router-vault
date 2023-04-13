import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import { PlusCircle } from 'phosphor-react'
import { FormEvent } from 'react'
import { toast } from 'react-toastify'

export function TriggerAddRouterButton() {
  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    axios.post('api/add', {
      routerModel: data.routerModel,
      macAddress: data.macAddress,
      cableDownloadSpeed: data.cableDownloadSpeed,
      cableUploadSpeed: data.cableUploadSpeed,
      wifiDownloadSpeed2G: data.wifiDownloadSpeed2G,
      wifiUploadSpeed2G: data.wifiUploadSpeed2G,
      wifiDownloadSpeed5G: data.wifiDownloadSpeed5G,
      wifiUploadSpeed5G: data.wifiUploadSpeed5G,
      receivePower: data.receivePower,
      transmitPower: data.transmitPower,
      configuredBy: data.configuredBy,
    })
    notify()
    window.location.reload()
  }

  const notify = () => toast('Roteador adicionado com sucesso!')

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg-[#1e6f9f] hover:bg-[#115379] transition-colors p-2 rounded-md fixed top-4 right-4">
          <PlusCircle width="bold" size={38} color="white" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed top-10 right-1/2 translate-x-2/4 bg-[#1a1a1a] py-7 max-w-2xl w-full rounded-md shadow-md">
          <form
            action="/api/add"
            method="POST"
            className="flex flex-col items-center py-7"
            onSubmit={handleFormSubmit}
          >
            <p className="font-bold text-xl">Adicionar novo equipamento</p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <label className="ml-1" htmlFor="routerModel">
                  Modelo:
                </label>
                <select
                  className="bg-[#262626] rounded-lg text-lg w-[270px] p-[10px] border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  name="routerModel"
                  id="routerModel"
                  placeholder="Selecione um valor"
                  required
                >
                  <option>Selecione um valor</option>
                  <option value="Mercusys AC12G">Mercusys AC12G</option>
                  <option value="FW323FAC">FW323FAC</option>
                  <option value="Huawei-G8145V5-V2">Huawei-G8145V5-V2</option>
                  <option value="Intelbras-121AC">Intelbras-121AC</option>
                  <option value="Intelbras-RG1200">Intelbras-RG1200</option>
                  <option value="Unee-MP-X421RQ-F">Unee-MP-X421RQ-F</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="ml-1" htmlFor="macAddress">
                  MAC:
                </label>
                <input
                  className="bg-[#262626] rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  type="text"
                  name="macAddress"
                  id="macAddress"
                  placeholder="001B44113AB7"
                  required
                />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <label className="ml-1" htmlFor="cableDownloadSpeed">
                  Download (Cabo):
                </label>
                <input
                  className="bg-[#262626] rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  type="number"
                  name="cableDownloadSpeed"
                  id="cableDownloadSpeed"
                  placeholder="000"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="ml-1" htmlFor="cableUploadSpeed">
                  Upload (Cabo):
                </label>
                <input
                  className="bg-[#262626] rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  type="number"
                  name="cableUploadSpeed"
                  id="cableUploadSpeed"
                  placeholder="000"
                  required
                />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <label className="ml-1" htmlFor="wifiDownloadSpeed2G">
                  Download (Wifi 2G):
                </label>
                <input
                  className="bg-[#262626] rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  type="number"
                  name="wifiDownloadSpeed2G"
                  id="wifiDownloadSpeed2G"
                  placeholder="000"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="ml-1" htmlFor="wifiUploadSpeed2G">
                  Upload (Wifi 2G):
                </label>
                <input
                  className="bg-[#262626] rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  type="number"
                  name="wifiUploadSpeed2G"
                  id="wifiUploadSpeed2G"
                  placeholder="000"
                  required
                />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <label className="ml-1" htmlFor="wifiDownloadSpeed5G">
                  Download (Wifi 5G):
                </label>
                <input
                  className="bg-[#262626] rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  type="number"
                  name="wifiDownloadSpeed5G"
                  id="wifiDownloadSpeed5G"
                  placeholder="000"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="ml-1" htmlFor="wifiUploadSpeed5G">
                  Upload (Wifi 5G):
                </label>
                <input
                  className="bg-[#262626] rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  type="number"
                  name="wifiUploadSpeed5G"
                  id="wifiUploadSpeed5G"
                  placeholder="000"
                  required
                />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <label className="ml-1" htmlFor="receivePower">
                  Rx:
                </label>
                <input
                  className="bg-[#262626] rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  type="number"
                  name="receivePower"
                  id="receivePower"
                  placeholder="000"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="ml-1" htmlFor="transmitPower">
                  Tx:
                </label>
                <input
                  className="bg-[#262626] rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  type="number"
                  name="transmitPower"
                  id="transmitPower"
                  placeholder="000"
                  required
                />
              </div>
            </div>
            <div className="mt-4 justify-between items-end w-full flex px-[58px]">
              <div className="flex flex-col gap-1 ">
                <label className="ml-1" htmlFor="configuredBy">
                  Configurado por:
                </label>
                <select
                  className="bg-[#262626] rounded-lg text-lg w-[270px] p-[10px] border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  name="configuredBy"
                  id="configuredBy"
                  placeholder="Luiz"
                  required
                >
                  <option value="Luiz">Luiz</option>
                  <option value="Fabrício">Fabrício</option>
                  <option value="Fabrício">Felipe</option>
                </select>
              </div>
              <button className="flex items-center justify-center gap-2 text-sm bg-[#1E6F9F] w-28 h-[50px] rounded-lg font-bold hover:bg-[#115379] transition-colors">
                Salvar
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
