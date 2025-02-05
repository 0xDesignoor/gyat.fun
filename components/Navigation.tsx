"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [buttonText, setButtonText] = useState("DONATE")

  const handleDonateClick = async () => {
    const address = "3ygrp5qWa2jUZKQMoSrbxV1tXNZpCGQLBE9s7QGgsbL5"
    await navigator.clipboard.writeText(address)
    setButtonText("ADDRESS COPIED")

    // Reset button text after 2 seconds
    setTimeout(() => {
      setButtonText("DONATE")
    }, 2000)
  }

  return (
    <nav className="w-full bg-white  py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-5xl pt-1 text-[#E90B83]">
        GYAT.FUN
      </Link>

      <div className="flex items-center gap-4">
        <Link
          href="https://x.com/designoor_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:opacity-70 transition-opacity"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/X-LRInXFsXRcnpk0nhqI5kIlN4YmIqtY.png"
            alt="X (Twitter)"
            width={40}
            height={40}
          />
        </Link>

        <Button onClick={handleDonateClick} className="text-2xl h-10 bg-[#E90B83] text-white hover:bg-[#E90B83]/90 rounded-full pt-3 px-4">
          {buttonText}
        </Button>
      </div>
    </nav>
  )
}

