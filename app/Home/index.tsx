import Canary from '@/components/ui/logo'

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Canary className="fill-blue-400" width={256} height={256} />
      <h1 className="text-blue-400 text-8xl font-bold select-none tracking-[.1em]">
        canary
      </h1>
    </div>
  )
}
