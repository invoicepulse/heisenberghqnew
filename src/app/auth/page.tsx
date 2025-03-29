'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

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

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
  })
  const [quote, setQuote] = useState('')
  const [loginAttempts, setLoginAttempts] = useState(4)
  const [errorMessage, setErrorMessage] = useState('')
  
  // Array of Breaking Bad quotes
  const quotes = [
    "I am the one who knocks!",
    "Say my name.",
    "I am the danger.",
    "Yeah, science!",
    "I've done things that I can't come back from.",
    "I did it for me. I liked it. I was good at it.",
    "The chemistry must be respected.",
    "Tread lightly.",
    "I'm in the empire business.",
    "No half measures."
  ]
  
  // Set random quote
  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // For login form
    if (isLogin && (!formData.email || !formData.password)) {
      alert('Yo, you need to fill in all fields, bitch!')
      return
    }
    
    // For signup form
    if (!isLogin && (!formData.email || !formData.password || !formData.username || !formData.confirmPassword)) {
      alert('It\'s basic chemistry - all fields must be filled!')
      return
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('The purity is off! Passwords do not match.')
      return
    }

    // For login form - handle login attempts
    if (isLogin) {
      // In a real app, this would be an API call to validate credentials
      // For demo purposes, we're simulating failed login attempts
      if (loginAttempts > 0) {
        setLoginAttempts(prev => prev - 1)
        setErrorMessage(`Please enter correct credentials. ${loginAttempts > 1 ? `${loginAttempts - 1} tries left.` : 'This is your LAST chance.'}`)
        
        // If no attempts left or successful login (signup form)
        if (loginAttempts === 1) {
          setTimeout(() => {
            alert("You've exhausted your attempts. The DEA is onto you now.")
            // In a real app, you might lock the account or implement a cooldown period
          }, 500)
        }
        return
      }
    }

    // If all validations pass or it's the signup form, redirect to app
    window.location.href = 'https://app.heisenberghq.com'
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error message when user types
    if (errorMessage) {
      setErrorMessage('')
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#002142] via-[#00345C] to-[#00477C] py-20 overflow-hidden relative">
      {/* Background crystals */}
      <BlueCrystal size={40} top="10%" left="5%" delay={0.2} />
      <BlueCrystal size={60} top="70%" left="8%" delay={0.5} />
      <BlueCrystal size={80} top="30%" left="85%" delay={0.8} />
      <BlueCrystal size={35} top="85%" left="80%" delay={1.1} />
      <BlueCrystal size={50} top="15%" left="40%" delay={1.4} />
      <BlueCrystal size={30} top="60%" left="60%" delay={1.7} />
      
      {/* Animated yellow smoke effect - changed to blue */}
      <div className="absolute inset-0 bg-[radial-gradient(#0CBFE9_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full mx-4 z-10"
      >
        {/* Animated Breaking Bad quote */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 text-center"
        >
          <div className="bg-black/50 backdrop-blur-sm p-3 rounded-lg shadow-lg inline-block">
            <p className="text-cyan-400 font-bold text-lg italic">&quot;{quote}&quot;</p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white/90 backdrop-blur-md shadow-2xl rounded-lg border-2 border-blue-200 overflow-hidden"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {/* Header - Changed from yellow to blue gradient */}
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
              {isLogin ? 'Enter The Lab' : 'Join The Empire'}
              </motion.h1>
              <p className="text-blue-100 mt-1 font-medium">
              {isLogin ? 'Get back to cooking projects' : '99.1% pure project management awaits'}
            </p>
            </div>
          </div>
          
          <div className="p-8">
          {/* Auth Type Switcher */}
            <div className="flex mb-8 bg-blue-900/10 p-1 rounded-lg border border-blue-200">
            <button
              onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  isLogin ? 'bg-[#0CBFE9] text-white shadow-sm' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Enter Lab
            </button>
            <button
              onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  !isLogin ? 'bg-[#0CBFE9] text-white shadow-sm' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              New Cook
            </button>
          </div>

            <AnimatePresence mode="wait">
              <motion.form 
                key={isLogin ? 'login' : 'signup'}
                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Error message for login attempts */}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md text-sm"
                  >
                    {errorMessage}
                  </motion.div>
                )}
                
                {!isLogin && (
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Lab Alias
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="What should we call you? (Not for the DEA)"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your secure contact method"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Secret Formula
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Keep it secret, keep it safe"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                      Confirm Secret Formula
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Measure twice, cook once"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                )}

                {isLogin && (
                  <div className="text-right">
                    <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                      Better Call Saul? Forgot password?
                    </Link>
                  </div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                >
                  {isLogin ? 'Let\'s Cook... Projects!' : 'Start Your Empire'}
                </motion.button>
              </motion.form>
            </AnimatePresence>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>{isLogin ? 'No lab access yet?' : 'Already part of the operation?'}</p>
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-blue-600 hover:text-blue-500 mt-1"
              >
                {isLogin ? 'Join Heisenberg\'s Team' : 'Return to Your Lab'}
              </button>
            </div>

            {/* Chemistry flask icon - Changed yellow to blue */}
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
                &quot;{isLogin ? 'I am the one who logs in.' : 'Apply yourself, and join us.'}&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}
