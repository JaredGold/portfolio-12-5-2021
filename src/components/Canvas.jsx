import React, { useRef, useEffect } from 'react'

const Canvas = () => {
  
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    ctx.fillStyle="#4444FF"
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }, [])
  
  return <canvas ref={canvasRef} />

}

export default Canvas