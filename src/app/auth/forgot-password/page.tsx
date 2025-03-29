'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

// Component for animated blue crystal
const BlueCrystal = ({ size, top, left, delay }: { size: number, top: string, left: string, delay: number }) => (
  <motion.div
    className="absolute z-0 opacity-70"
    style={{ top, left }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 0.7, 
      scale: 1,
      rotate: [0, 10, -10, 5, 0],
    }}
    transition={{ 
      duration: 2,
      delay,
      rotate: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }}
  >
    <div 
      style={{ 
        width: size, 
        height: size * 1.5,
        backgroundColor: '#0CBFE9',
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        filter: "drop-shadow(0 0 10px rgba(0, 195, 255, 0.8))"
      }} 
    />
  </motion.div>
);

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      alert('Enter your email, yo!')
      return
    }
    
    // Show success message
    setSubmitted(true)
    
    // In a real app, you would call an API to send the reset email
    console.log('Password reset requested for:', email)
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#002142] via-[#00345C] to-[#00477C] py-20 overflow-hidden relative">
      {/* Background crystals */}
      <BlueCrystal size={40} top="10%" left="5%" delay={0.2} />
      <BlueCrystal size={60} top="70%" left="8%" delay={0.5} />
      <BlueCrystal size={35} top="85%" left="80%" delay={1.1} />
      
      {/* Animated blue pattern effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#0CBFE9_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full mx-4 z-10"
      >
        <motion.div 
          className="bg-white/90 backdrop-blur-md shadow-2xl rounded-lg border-2 border-blue-200 overflow-hidden"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0A4DA6] to-[#0CBFE9] p-4 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,rgba(12,191,233,0.1),rgba(12,191,233,0.1)_10px,rgba(10,77,166,0.1)_10px,rgba(10,77,166,0.1)_20px)] opacity-30"></div>
            <div className="text-center relative">
              <motion.h1 
                className="text-3xl font-bold text-white"
                animate={{ 
                  textShadow: ["0 0 8px rgba(255,255,255,0)", "0 0 16px rgba(255,255,255,0.5)", "0 0 8px rgba(255,255,255,0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Recovery Formula
              </motion.h1>
              <p className="text-blue-100 mt-1 font-medium">
                Better Call Saul for password recovery
              </p>
            </div>
          </div>
          
          <div className="p-8">
            {!submitted ? (
              <motion.form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <p className="text-gray-600">
                    Enter your email and we&apos;ll send you instructions to reset your secret formula.
                  </p>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="The one you used to join our operation"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                >
                  Reset Secret Formula
                </motion.button>
                
                <div className="mt-6 text-center">
                  <button 
                    onClick={() => router.push('/auth')}
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Back to the Lab
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-6"
              >
                <motion.div 
                  className="flex justify-center mb-6"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Chemical Reaction Started
                </h3>
                <p className="text-gray-600 mb-6">
                  Soon, you will receive an email to reset the password. Check your inbox.
                </p>
                <button 
                  onClick={() => router.push('/auth')}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Return to the Lab
                </button>
              </motion.div>
            )}

            {/* Chemistry flask icon */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <motion.div 
                className="flex justify-center mb-3"
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <div className="w-10 h-12 relative">
                  <div className="absolute w-6 h-6 bg-blue-500 rounded-full left-1/2 bottom-0 transform -translate-x-1/2"></div>
                  <div className="absolute w-8 h-2 bg-blue-500 rounded-full left-1/2 top-0 transform -translate-x-1/2"></div>
                  <div className="absolute w-2 h-8 bg-blue-500 left-1/2 top-0 transform -translate-x-1/2"></div>
                  <div className="absolute w-4 h-4 bg-cyan-400 rounded-full left-1/2 bottom-1 transform -translate-x-1/2 animate-pulse"></div>
                </div>
              </motion.div>
              <p className="text-xs text-gray-500 italic">
                &quot;Memory is like chemistry - sometimes we need a catalyst.&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
} 