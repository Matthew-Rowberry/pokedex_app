import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
  margin: 0 auto;
  width: fit-content;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
`

const MenuItem = styled(NavLink)`
    min-width: 200px;
`

const Menu = () => {
    return (
        <Navigation>
            <MenuItem to="/pokemon">Pokemon</MenuItem>
            <MenuItem to="/item">Item</MenuItem>
        </Navigation>
    )
}

export default Menu;