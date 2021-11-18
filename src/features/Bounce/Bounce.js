import styled from "styled-components";
import {animated, useSpring} from "react-spring";

const Spring = styled(animated.div)`
`;

const Bounce = ({children}) => {
    const [styles, api] = useSpring(() => ({
        config: {
            clamp: true,
            velocity: 1
        },
        from: { translateY: 0 },
    }))

    return (
        <Spring style={styles}
            onMouseEnter={() => {
                api.start({
                    loop: {
                        reverse: true
                    },
                    to: { translateY: -10 },
                })
            }}
            onMouseLeave={() => {
                api.stop()
            }}
        >
            {children}
        </Spring>
    )
}

export default Bounce