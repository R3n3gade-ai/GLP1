"use client"

export default function Checkout() {
  return (
    <iframe
      src="/checkout.html"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    />
  )
}
