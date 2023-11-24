import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import Loader from '../components/Loader'
import { Island } from '../models/Island'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let screenRotation = [0.1, 2.5, 0];

    if(window.innerWidth < 768){
      screenScale = [40, 40, 40];
    }
    else
    {
      screenScale = [55, 55, 55];
    }

    return [ screenScale, screenPosition, screenRotation];
  }

  const [ islandScale, islandPosition, islandRotation ] = adjustIslandScreenSize(); 

  return (
    <section className="w-full h-screen relative">
        <Canvas 
            className={`w-full h-screen bg-transparent ${isRotating} ? 'cursor-grabbing' : 'cursor-grab'`}
            camera={{ near: 0.1, far: 1000 }}
        >
            {/* for loading purpose if canvas takes time to load it shows the loader */}
            <Suspense fallback={<Loader />}>
                {/* create all type lights and select the one we want. We'll figure out next time. */}
                <directionalLight position={[1,1,1]} intensity={2} />
                <ambientLight intensity={0.5} />

                {/* we don't need point light as it points in all direction */}
                {/* <pointLight />  */}
                {/* we don't need point light as it points in one direction */}
                {/* <spotLight /> */}

                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

                {/* Let's add an object */}
                {/* for object goto sketchflow website and choose what you like. */}
                <Island 
                  position = {islandPosition}
                  scale = {islandScale}  
                  rotation = {islandRotation}
                  isRotating
                  setIsRotating
                />

            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home