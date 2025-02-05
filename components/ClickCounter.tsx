"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function ClickCounter() {
  const [isPressed, setIsPressed] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetchCount()
  }, [])

  async function fetchCount() {
    const { data, error } = await supabase.from("clicks").select("count").single()

    if (error) {
      console.error("Error fetching count:", error)
    } else if (data) {
      setCount(data.count)
    }
  }

  async function incrementCount() {
    const { data, error } = await supabase
      .from("clicks")
      .update({ count: count + 1 })
      .eq("id", 1)
      .select()

    if (error) {
      console.error("Error incrementing count:", error)
    } else if (data && data.length > 0) {
      setCount(data[0].count)
    }
  }

  const handleClick = () => {
    incrementCount()
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-64 h-64 cursor-hand"
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onClick={handleClick}
      >
        <div
          className={`transition-transform duration-100 ${
            isPressed ? "scale-95 rotate-2 skew-x-[-2deg] skew-y-[-2deg]" : ""
          }`}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gyat-rikWkJRiisLF0c4syAW69BQeOncdko.png"
            alt="Clickable Image"
            width={256}
            height={256}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <p className="text-8xl mt-4 text-white">{count}</p>
    </div>
  )
}

