import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'

import styled from "styled-components";

const ModelContainer = styled.div`
    //height: 600px
`;

export function Model(props) {
    const { scene } = useGLTF('/models/testPika.glb')
    return <primitive object={scene} {...props} />
}

export default function ThreeDProfile() {
    return (
        <ModelContainer className="model">
            <Canvas
                camera={{
                    fov: 80,
                    near: 0.1,
                    far: 100,
                    position: [0, 5, 5],
                }}
            >
                <Suspense fallback={null}>
                    <Model />
                    <OrbitControls />
                    <Environment preset="studio" background />
                </Suspense>
            </Canvas>
        </ModelContainer>
    )
}