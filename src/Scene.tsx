import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Stage, OrbitControls, Float, Stars } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'

function Model(props: any) {
    const { scene } = useGLTF('/3d-model.glb')
    return <primitive object={scene} {...props} />
}

export function Scene() {
    const controlsRef = useRef<any>(null)

    useFrame(() => {
        if (controlsRef.current) {
            // Add subtle camera movement or other per-frame logic here if needed
            // controlsRef.current.update() // OrbitControls updates automatically
        }
    })

    return (
        <>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <Float
                speed={2}
                rotationIntensity={0.5}
                floatIntensity={0.5}
            >
                <Stage
                    environment="city"
                    intensity={0.5}
                    shadows
                    adjustCamera={false}
                >
                    <Model scale={1} />
                </Stage>
            </Float>

            <OrbitControls
                ref={controlsRef}
                autoRotate
                autoRotateSpeed={1.0}
                enablePan={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 1.5}
                makeDefault
            />

            <EffectComposer>
                <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.6} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
        </>
    )
}
