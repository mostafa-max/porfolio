"use client"
import React from 'react'
import {motion} from "motion/react"
function Particles() {
  return (

       <div className="absolute inset-0 pointer-events-none z-10">
       {[...Array(40)].map((_, i) => (
         <motion.div
           key={i}
           initial={{
             y: Math.random() * 100,
             x: Math.random() * 100,
             opacity: 0,
           }}
           animate={{
             y: ['0%', '100vh'],
             x: [0, Math.random() * 100 - 50],
             opacity: [0, 0.8, 0],
           }}
           transition={{
             duration: 5 + Math.random() * 5,
             repeat: Infinity,
             delay: Math.random() * 3,
           }}
           className="absolute h-1 w-1 rounded-full bg-secondary"
           style={{
             left: `${Math.random() * 100}%`,
           }}
         />
       ))}
     </div>
  )
}

export default Particles