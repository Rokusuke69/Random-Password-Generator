import React, { useState, useCallback, useEffect } from 'react'
import '../index.css'

const PasswordGenerator = () => {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [strength, setStrength] = useState('')
  const [copyMessage, setCopyMessage] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  const symbols = '!@#$%^&*()_-+={}[]|/?.<,>~:`;"'

  const generateRandomNumber = useCallback(() => {
    return Math.floor(Math.random() * 10)
  }, [])

  const generateLowerCase = useCallback(() => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }, [])

  const generateUpperCase = useCallback(() => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }, [])

  const generateSymbol = useCallback(() => {
    const randNum = Math.floor(Math.random() * symbols.length)
    return symbols.charAt(randNum)
  }, [symbols])

  const shufflePassword = useCallback((array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array.join('')
  }, [])

  const calculateStrength = useCallback((pass) => {
    if (pass.length === 0) return ''

    let score = 0
    if (pass.length >= 8) score++
    if (pass.length >= 12) score++
    if (/[A-Z]/.test(pass)) score++
    if (/[a-z]/.test(pass)) score++
    if (/[0-9]/.test(pass)) score++
    if (/[^A-Za-z0-9]/.test(pass)) score++

    if (score >= 5) return 'strong'
    if (score >= 3) return 'medium'
    return 'weak'
  }, [])

  const generatePassword = useCallback(() => {
    const checkCount = [includeUppercase, includeLowercase, includeNumbers, includeSymbols].filter(Boolean).length
    
    if (checkCount === 0) {
      setPassword('')
      setStrength('')
      return
    }

    let funcArr = []
    if (includeUppercase) funcArr.push(generateUpperCase)
    if (includeLowercase) funcArr.push(generateLowerCase)
    if (includeNumbers) funcArr.push(generateRandomNumber)
    if (includeSymbols) funcArr.push(generateSymbol)

    let newPassword = ''

    // Compulsory addition
    for (let i = 0; i < funcArr.length; i++) {
      newPassword += funcArr[i]()
    }

    // Remaining addition
    for (let i = 0; i < passwordLength - funcArr.length; i++) {
      let ranIndex = Math.floor(Math.random() * funcArr.length)
      newPassword += funcArr[ranIndex]()
    }

    // Shuffle the password
    newPassword = shufflePassword(Array.from(newPassword))
    setPassword(newPassword)
    setStrength(calculateStrength(newPassword))
  }, [
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    generateUpperCase,
    generateLowerCase,
    generateRandomNumber,
    generateSymbol,
    shufflePassword,
    calculateStrength
  ])

  const copyToClipboard = async () => {
    if (!password) return

    try {
      await navigator.clipboard.writeText(password)
      setCopyMessage('Copied!')
      setIsCopied(true)
      setTimeout(() => {
        setCopyMessage('')
        setIsCopied(false)
      }, 2000)
    } catch (err) {
      setCopyMessage('Failed to copy')
      setTimeout(() => setCopyMessage(''), 2000)
    }
  }

  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  const getStrengthColor = () => {
    switch (strength) {
      case 'strong': return '#10b981'
      case 'medium': return '#f59e0b'
      case 'weak': return '#ef4444'
      default: return '#6b7280'
    }
  }

  const getStrengthText = () => {
    switch (strength) {
      case 'strong': return 'Strong'
      case 'medium': return 'Medium'
      case 'weak': return 'Weak'
      default: return 'None'
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Secure Password Generator</h1>
        <p className="subtitle">Create strong, random passwords</p>
      </div>

      <div className="password-display">
        <div className="display-wrapper">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Your password will appear here"
            className="password-input"
          />
          <button 
            className={`copy-btn ${isCopied ? 'copied' : ''}`}
            onClick={copyToClipboard}
            disabled={!password}
          >
            <img src="/assets/copy.svg" alt="Copy" width="20" height="20" />
            {copyMessage && <span className="copy-tooltip">{copyMessage}</span>}
          </button>
        </div>
      </div>

      <div className="controls">
        <div className="length-control">
          <div className="length-header">
            <label>Password Length</label>
            <span className="length-value">{passwordLength}</span>
          </div>
          <input
            type="range"
            min="4"
            max="32"
            value={passwordLength}
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
            className="length-slider"
          />
        </div>

        <div className="options-grid">
          <div className="option">
            <input
              type="checkbox"
              id="uppercase"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            <label htmlFor="uppercase">Uppercase Letters (A-Z)</label>
          </div>
          
          <div className="option">
            <input
              type="checkbox"
              id="lowercase"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
            <label htmlFor="lowercase">Lowercase Letters (a-z)</label>
          </div>
          
          <div className="option">
            <input
              type="checkbox"
              id="numbers"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <label htmlFor="numbers">Numbers (0-9)</label>
          </div>
          
          <div className="option">
            <input
              type="checkbox"
              id="symbols"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            <label htmlFor="symbols">Symbols (!@#$%)</label>
          </div>
        </div>

        <div className="strength-meter">
          <div className="strength-header">
            <span>Password Strength</span>
            <span 
              className="strength-value"
              style={{ color: getStrengthColor() }}
            >
              {getStrengthText()}
            </span>
          </div>
          <div className="strength-bar">
            <div 
              className="strength-fill"
              style={{
                width: strength === 'strong' ? '100%' : strength === 'medium' ? '66%' : strength === 'weak' ? '33%' : '0%',
                backgroundColor: getStrengthColor()
              }}
            />
          </div>
        </div>

        <button 
          className="generate-btn"
          onClick={generatePassword}
        >
          🔄 Generate New Password
        </button>
      </div>
    </div>
  )
}

export default PasswordGenerator