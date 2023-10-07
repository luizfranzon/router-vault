import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import { PlusCircle, X } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

const notify = (message: string) => toast(message)

function upperCase(str: any) {
  return str.toUpperCase().trim()
}

export function TriggerAddRouterButton() {
  const [open, setOpen] = useState(false)

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    axios
      .post('api/add', {
        routerModel: data.routerModel,
        macAddress: upperCase(data.macAddress),
        cableDownloadSpeed: data.cableDownloadSpeed,
        cableUploadSpeed: data.cableUploadSpeed,
        wifiDownloadSpeed2G: data.wifiDownloadSpeed2G,
        wifiUploadSpeed2G: data.wifiUploadSpeed2G,
        wifiDownloadSpeed5G: data.wifiDownloadSpeed5G,
        wifiUploadSpeed5G: data.wifiUploadSpeed5G,
        configuredBy: data.configuredBy,
      })
      .then((response) => {
        if (response.data.created === true) {
          notify(response.data.message)
          setOpen(false)
        }
        console.log(response)
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        }
      })
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="bg-[#1e6f9f] hover:bg-[#115379] transition-colors p-2 rounded-md fixed top-4 right-4">
          <PlusCircle width="bold" size={38} color="white" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content
          onInteractOutside={(event) => event?.preventDefault()}
          className="fixed top-10 right-1/2 translate-x-2/4 bg-[#1a1a1a] py-7 max-w-2xl w-full rounded-md shadow-md"
        >
          <form
            action="/api/add"
            method="POST"
            className="flex relative flex-col items-center py-7"
            onSubmit={handleFormSubmit}
            id="routerForm"
          >
            <X
              size={40}
              className="absolute -top-4 right-4 cursor-pointer p-1"
              onClick={() => setOpen(false)}
            />
            <p className="font-bold -mt-2 text-2xl">
              Adicionar um novo equipamento
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <label className="ml-1" htmlFor="routerModel">
                  Modelo:
                </label>
                <input
                  className="bg-[#262626] transition-colors rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  name="routerModel"
                  id="routerModel"
                  placeholder="Mercusys AC12G"
                  list="routers"
                  required
                />
                <datalist id="routers">
                  <option value="Mercusys AC12G">Mercusys AC12G</option>
                  <option value="FW323FAC">FW323FAC</option>
                  <option value="Huawei-G8145V5-V2">Huawei-G8145V5-V2</option>
                  <option value="Intelbras-121AC">Intelbras-121AC</option>
                  <option value="Intelbras-RG1200">Intelbras-RG1200</option>
                  <option value="Unee-MP-X421RQ-F">Unee-MP-X421RQ-F</option>
                </datalist>
              </div>

              <div className="flex flex-col gap-1">
                <label className="ml-1" htmlFor="macAddress">
                  MAC:
                </label>
                <input
                  className="bg-[#262626] transition-colors rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
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
                <label className="ml-1" htmlFor="wifiDownloadSpeed2G">
                  <span className="text-[#6AFFF3] font-bold">Download</span>{' '}
                  (Wi-Fi 2G):
                </label>
                <input
                  className="bg-[#262626] transition-colors rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  type="number"
                  name="wifiDownloadSpeed2G"
                  id="wifiDownloadSpeed2G"
                  placeholder="000"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="ml-1" htmlFor="wifiUploadSpeed2G">
                  <span className="text-[#BF71FF] font-bold">Upload</span>{' '}
                  (Wi-Fi 2G):
                </label>
                <input
                  className="bg-[#262626] transition-colors rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
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
                  <span className="text-[#6AFFF3] font-bold">Download</span>{' '}
                  (Wi-Fi 5G):
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
                  <span className="text-[#BF71FF] font-bold">Upload</span>{' '}
                  (Wi-Fi 5G):
                </label>
                <input
                  className="bg-[#262626] transition-colors rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
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
                <label className="ml-1" htmlFor="cableDownloadSpeed">
                  <span className="text-[#6AFFF3] font-bold">Download</span>{' '}
                  (Cabo):
                </label>
                <input
                  className="bg-[#262626] transition-colors rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  type="number"
                  name="cableDownloadSpeed"
                  id="cableDownloadSpeed"
                  placeholder="000"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="ml-1" htmlFor="cableUploadSpeed">
                  <span className="text-[#BF71FF] font-bold">Upload</span>{' '}
                  (Cabo):
                </label>
                <input
                  className="bg-[#262626] transition-colors rounded-lg text-lg p-2 border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  type="number"
                  name="cableUploadSpeed"
                  id="cableUploadSpeed"
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
                  className="bg-[#262626] transition-colors rounded-lg text-lg w-[270px] p-[10px] border-2 border-very-dark-gray focus:outline-none focus:border-purple-1"
                  name="configuredBy"
                  id="configuredBy"
                  placeholder="Luiz"
                  required
                >
                  <option value="Luiz">Luiz</option>
                  <option value="Erick">Erick</option>
                  <option value="Luis Felipe">Luis Felipe</option>
                  <option value="Everton">Everton</option>
                </select>
              </div>
              <button className="flex items-center justify-center gap-2 text-sm bg-[#1E6F9F] w-40 h-[50px] rounded-lg font-bold hover:bg-[#115379] transition-colors">
                Salvar
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
