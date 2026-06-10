import { useEffect } from 'react'

export function BackgroundGlow() {
  return <div className="background-layer" aria-hidden="true" />
}

export function CursorEffect() {
  useEffect(() => {
    const root = document.documentElement
    const target = { x: -100, y: -100 }
    const glow = { x: -100, y: -100 }
    let visible = false
    let rafId = 0

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const loop = () => {
      glow.x = lerp(glow.x, target.x, 0.09)
      glow.y = lerp(glow.y, target.y, 0.09)

      root.style.setProperty('--cursor-x', `${target.x}px`)
      root.style.setProperty('--cursor-y', `${target.y}px`)
      root.style.setProperty('--cursor-gx', `${glow.x}px`)
      root.style.setProperty('--cursor-gy', `${glow.y}px`)
      root.style.setProperty('--cursor-on', visible ? '1' : '0')

      rafId = requestAnimationFrame(loop)
    }

    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return

    const move = (event: MouseEvent) => {
      target.x = event.clientX
      target.y = event.clientY
      visible = true
    }

    const leave = () => {
      visible = false
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    rafId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <div className="cursor-stack" aria-hidden="true">
      <div className="cursor-glow-blob" />
      <div className="cursor-core" />
    </div>
  )
}
