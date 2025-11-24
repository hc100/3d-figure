import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Scene } from './Scene'
import './index.css'

function App() {
  return (
    <>
      <div className="overlay">
        <div className="footer">
          Interactive 3D Experience<br />
          Drag to Rotate • Scroll to Zoom
        </div>
      </div>

      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#111']} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

      <div className="loader" style={{ display: 'none' }}>Loading...</div>
    </>
  )
}

export default App
