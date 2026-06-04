import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Post from './Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h3>Hi Welcome to WEB102!</h3>
      <p>Here are some posts:</p>
      <p>💛</p>
      <Post name="Marques Bronwlee" description="A passionate developer" numLikes={10}></Post>
      <Post name="Samantha Smith" description="Loves to code and share knowledge" numLikes={20}></Post>
      <Post name="Alex Johnson" description="Full-stack developer and tech enthusiast" numLikes={15}></Post>
    </div>
)};

export default App
