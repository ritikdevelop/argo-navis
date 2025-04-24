"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SlideInProps {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  distance?: number
}

export default function SlideIn({
  children,
  className,
  direction = "left",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  distance = 100,
}: SlideInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
    }
  }, [once, threshold])

  // Define transform based on direction
  let initialTransform = ""
  if (direction === "left") initialTransform = `translateX(${distance}px)`
  if (direction === "right") initialTransform = `translateX(-${distance}px)`
  if (direction === "up") initialTransform = `translateY(${distance}px)`
  if (direction === "down") initialTransform = `translateY(-${distance}px)`

  return (
    <div
      ref={ref}
      className={cn(className, "overflow-hidden")}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : initialTransform,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
