import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'

const Home = () => {

  const adjustScreenScale = () => {
    let screenScale = null;
    let screenPosition = [0, -6.3, -43];
    let rotation = [0.1,4.7,0]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    }
    else {
      screenScale = [1,1,1]
    }
    return [screenScale, screenPosition, rotation]
  }

  const [screenScale, screenPosition, rotation] = adjustScreenScale();

  return (
    <section className='w-full h-screen relative'>
      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight intensity={2} position={[1,1,1]}/>    {/* gives the effect of a distant source light e.g: Sun light*/}
          <ambientLight intensity={0.5}/>                         {/* intensifies white light and doesnot take shadows into account, basically increase brightness of objects */}   
          {/* <pointLight />  emits light in all directions from a single point*/}
          {/* <spotLight /> emits light in single direction in shape of a cone*/}
          <hemisphereLight skyColor="#b1e1ff" groundColor={"#000000"} intensity={1} />                      {/*illuminates the scene with a gradient */}   
          
          <Sky/>
          <Island
            scale={screenScale}
            position={screenPosition}
            rotation={rotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
