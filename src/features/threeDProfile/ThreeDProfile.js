import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'

import styled from "styled-components";

const ModelContainer = styled.div`
    //height: 600px
`;

export function Model({name, id, ...props}) {
    const natDex = ('00' + id).slice(-3)
    const { scene } = useGLTF(`/models/${natDex}-${name}.gltf`)
    return <primitive object={scene} {...props} />
}

export default function wThreeDProfile({name, id}) {
    return (
        <ModelContainer className="model">
            <Canvas
                camera={{
                    fov: 80,
                    near: 0.1,
                    far: 1000,
                    position: [0, 5, 5],
                }}
            >
                <Suspense fallback={null}>
                    <Model name={name} id={id} />
                    <OrbitControls />
                    <Environment preset="studio" background />
                </Suspense>
            </Canvas>
        </ModelContainer>
    )
}