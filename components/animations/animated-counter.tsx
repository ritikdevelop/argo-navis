"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  end: number
  className?: string
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  prefix?: string
  suffix?: string
  decimals?: number
}

export default function AnimatedCounter({
  end,
  className,
  delay = 0,
  duration = 2,
  threshold = 0.1,
  once = true,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const countRef = useRef<number>(0)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
          setCount(0)
          countRef.current = 0
        }
      },
      {
        threshold,
        rootMargin: "0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [once, threshold])

  useEffect(() => {
    if (!isVisible) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp + delay * 1000
      }

      const elapsed = timestamp - startTimestamp

      if (elapsed < 0) {
        animationRef.current = requestAnimationFrame(step)
        return
      }

      const progress = Math.min(elapsed / (duration * 1000), 1)
      // Use easeOutQuart for a nice deceleration effect
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      countRef.current = easeProgress * end
      setCount(countRef.current)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step)
      }
    }

    animationRef.current = requestAnimationFrame(step)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible, end, duration, delay])

  return (
    <div ref={ref} className={cn(className)}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </div>
  )
}
