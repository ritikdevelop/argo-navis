"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  wordByWord?: boolean
}

export default function RevealText({
  text,
  className,
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  wordByWord = false,
}: RevealTextProps) {
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

  if (wordByWord) {
    const words = text.split(" ").filter((word) => word.length > 0)
    return (
      <div ref={ref} className={cn(className, "overflow-hidden")}>
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block mr-[0.35em]" // Add consistent spacing between words
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(50%)",
              transition: `opacity ${duration}s ease-out ${delay + index * 0.1}s, transform ${duration}s ease-out ${
                delay + index * 0.1
              }s`,
            }}
          >
            {word}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cn(className, "overflow-hidden")}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {text}
    </div>
  )
}
