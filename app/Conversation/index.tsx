import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'motion/react'

export default function Conversation() {
  return (
    <ScrollArea className="w-18 h-full grid grid-cols-1 order-1">
      <div className="space-y-4 m-2">
        {Array.from({ length: 100 }).map((_, idx) => (
          <motion.div
            initial={{ x: -25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0.05 }}
            className="cursor-pointer"
          >
            <Avatar key={idx}>
              <AvatarImage src={`https://github.com/user${idx + 1}.png`} />
              <AvatarFallback>{`U${idx + 1}`}</AvatarFallback>
            </Avatar>
          </motion.div>
        ))}
      </div>
    </ScrollArea>
  )
}
