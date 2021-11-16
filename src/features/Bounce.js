import styled from "styled-components";
import {animated, useSpring} from "react-spring";

const Spring = styled(animated.div)`
`;

const Bounce = ({children}) => {
    const styles = useSpring({
        config: {
            loop: true,
            mass: 5,
            tension: 200
        },
    })

    return (
        <Spring style={styles} onMouseOver={() => {console.log(1)}}>
            {children}
        </Spring>
    )
}

export default Bounce