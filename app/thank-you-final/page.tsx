"use client"

import { useEffect, useState } from "react"

export default function ThankYouFinalPage() {
  const [html, setHtml] = useState<string>("")

  useEffect(() => {
    fetch("/thank-you-final.html")
      .then((res) => res.text())
      .then((data) => {
        const updatedHtml = data.replace(/window\.location\.href/g, "window.top.location.href")
        setHtml(updatedHtml)
      })
      .catch((err) => console.error("Error loading HTML:", err))
  }, [])

  if (!html) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0f172a]">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    )
  }

  return <iframe srcDoc={html} className="w-full h-screen border-0" title="Thank You Final" />
}
