import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 20px;
`;

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
    padding: 8px 16px;
    color: #ffffff;
    font-weight: 600;
    font-size: 32px;
    line-height: 1.42857;
    text-shadow:
        0 0 5px #3470ff,
        0 0 10px #3470ff,
        0 0 20px #3470ff,
        0 0 40px #3470ff,
        0 0 80px #3470ff;
    transition:
        color 0.3s,
        text-shadow 0.3s;

    &:hover,
    &:focus,
    &.active {
        color: #3470ff;
        text-shadow:
            0 0 5px #3470ff,
            0 0 10px #3470ff,
            0 0 20px #3470ff,
            0 0 40px #3470ff,
            0 0 80px #3470ff;
    }
`;

export const IconWrapper = styled.svg`
    margin-right: 12px;
    width: 32px;
    height: 32px;
    fill: #3470ff;
    display: inline-block;
`;

export const Span = styled.span`
    display: flex;
    align-items: center;
`;
