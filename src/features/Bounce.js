import styled from "styled-components";
import {animated, useSpring} from "react-spring";

const Spring = styled(animated.div)`
`;

const Bounce = ({children}) => {
    const [styles, api] = useSpring(() => ({
        config: {
            mass: 5,
            tension: 200,
        },
        loop: false,
        from: { translateY: 0 },
    }))

    return (
        <Spring style={styles}
            onMouseEnter={() => {
                api.start({
                    to: { translateY: -10 },
                    loop: {
                        reverse: true
                    }
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