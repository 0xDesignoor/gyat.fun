import ClickCounter from "@/components/ClickCounter"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#E90B83]">
      <h1 className="text-8xl mb-8 text-center text-[#50E26A] [text-shadow:_-2px_-2px_0_#E90C83,_2px_-2px_0_#E90C83,_-2px_2px_0_#E90C83,_2px_2px_0_#E90C83,_6px_6px_0_#FFFFFF]">
        SLAP DAT GYAT
      </h1>
      <ClickCounter />
    </main>
  )
}

