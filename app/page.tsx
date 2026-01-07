"use client"

import { useEffect, useState } from "react"

export default function LandingPage() {
  const [html, setHtml] = useState<string>("")

  useEffect(() => {
    fetch("/glp-clone.html")
      .then((res) => res.text())
      .then((data) => {
        const updatedHtml = data
          .replace('action="/checkout.html"', 'action="/checkout" target="_top"')
          .replace('action="/checkout"', 'action="/checkout" target="_top"')
          // Update all links to checkout to use /checkout and target _top
          .replace(/href="\/checkout\.html/g, 'href="/checkout" target="_top"')
          .replace(/window\.location\.href=url;/g, "window.top.location.href=url;")
          .replace(/var base='\/checkout\.html';/g, "var base='/checkout';")
        setHtml(updatedHtml)
      })
      .catch((err) => console.error("Error loading HTML:", err))
  }, [])

  if (!html) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return <iframe srcDoc={html} className="w-full h-screen border-0" title="GLP-1 Booster" />
}
