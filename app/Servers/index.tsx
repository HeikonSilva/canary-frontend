import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'motion/react'

export default function Servers() {
  return (
    <div className="h-full w-full flex flex-row">
      <ScrollArea className="w-18 h-full">
        <div className="space-y-4 m-2">
          {Array.from({ length: 20 }).map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -25, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: 0.1 * idx } }}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              <Avatar className="pointer-events-none select-none">
                <AvatarImage src={`https://github.com/user${idx + 1}.png`} />
                <AvatarFallback>{`U${idx + 1}`}</AvatarFallback>
              </Avatar>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
      <div className="border-zinc-200 border-t-2 border-l-2 rounded-tl-lg w-full h-full flex flex-row">
        <div className="rounded-tl-lg w-72 h-full border-zinc-200 border-r-2">
          <div className="w-full p-2 border-zinc-200 border-b-2">
            <h1 className="text-lg font-semibold">Server Name</h1>
          </div>
          <ScrollArea className="h-[calc(100%-3.25rem)] w-full">
            <div className="space-y-4 m-4">
              {Array.from({ length: 10 }).map((_, pidx) => {
                const parentDelay = pidx * (0.1 + 5 * 0.1) // 0.1s for parent + 5 children * 0.2s each
                return (
                  <motion.div
                    initial={{ x: -40, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: { delay: parentDelay },
                    }}
                    className="space-y-2"
                    key={pidx}
                  >
                    <h2 className="text-sm font-semibold">Categoria</h2>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: { delay: parentDelay + 0.1 + 0.1 * idx },
                        }}
                        key={idx}
                        className="w-full rounded-lg hover:bg-accent py-2 px-2 flex flex-row gap-2 transition-colors"
                      >
                        <h1>Canal</h1>
                      </motion.div>
                    ))}
                  </motion.div>
                )
              })}
            </div>
          </ScrollArea>
        </div>
        <div className="h-full w-full flex flex-col">
          <div className="w-full space-x-2 p-2 border-zinc-200 border-b-2">
            <h1 className="text-lg font-semibold">Canal</h1>
          </div>
          <div className="flex flex-row h-full w-full overflow-y-scroll">
            <div className="h-full w-full flex flex-col">
              <ScrollArea className="w-full overflow-y-scroll flex-1">
                <div className="space-y-4">
                  {Array.from({ length: 15 }).map((_, idx) => (
                    <motion.div
                      initial={{ x: -40, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: 0.1 * idx },
                      }}
                      className="flex flex-row hover:bg-accent p-2 gap-2 transition-colors"
                      key={idx}
                    >
                      <div>
                        <Avatar className="size-8">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>{`Msg${idx + 1}`}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex flex-row gap-2 items-center">
                          <h1 className="font-semibold">Nome</h1>
                          <h1 className="text-sm">12:00</h1>
                        </div>
                        <h2>Mensagem</h2>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
              <div className="w-full flex-none">
                <div className="m-4 shadow-lg">
                  <Input
                    type="text"
                    id="msgContent"
                    className="h-full"
                    placeholder="Conversar em #canal"
                  />
                </div>
              </div>
            </div>
            <div className="h-full w-72 border-zinc-200 border-l-2">
              <ScrollArea className="h-full w-full">
                <div className="space-y-4 m-4">
                  <div className="space-y-2">
                    <h2 className="text-sm font-semibold">Disponível - 5</h2>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <div
                        key={idx}
                        className="w-full items-center rounded-lg hover:bg-accent py-2 px-2 flex flex-row gap-2 transition-colors"
                      >
                        <Avatar className="size-8">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>{`Msg${idx + 1}`}</AvatarFallback>
                        </Avatar>
                        <h1>Membro</h1>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-sm font-semibold">Offline - 10</h2>
                    {Array.from({ length: 10 }).map((_, idx) => (
                      <div
                        key={idx}
                        className="w-full items-center rounded-lg hover:bg-accent py-2 px-2 flex flex-row gap-2 transition-colors"
                      >
                        <Avatar className="size-8">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>{`Msg${idx + 1}`}</AvatarFallback>
                        </Avatar>
                        <h1>Membro</h1>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
