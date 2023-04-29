import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2 text-2xl">
      <h1>Página não encontrada, volte para o inicio.</h1>
      <Link className="text-blue-500 underline" href="/">
        Voltar para o inicio
      </Link>
    </div>
  )
}
