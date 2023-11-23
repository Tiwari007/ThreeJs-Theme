import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'

const Home = () => {
  return (
    <section className="w-full h-screen relative">
        <Canvas 
            className='w-full h-screen bg-transparent'
            camera={{ near: 0.1, far: 1000 }}
        >
            {/* for loading purpose if canvas takes time to load it shows the loader */}
            <Suspense fallback={<Loader />}>
                {/* create all type lights and select the one we want. We'll figure out next time. */}
                <directionalLight />
                <ambientLight />
                <pointLight />
                <spotLight />
                <hemisphereLight />

                {/* Let's add an object */}
                {/* for object goto sketchflow website and choose what you like. */}

            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home