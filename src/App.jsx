import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EffectHook from './effectHook.jsx'
function App() {
  const [domain, setDomain] = useState('naver.com');
  const domains = ['naver.com', 'gmail.com', 'kakao.com'];
  return (
    <EffectHook />
  )
}

export default App
