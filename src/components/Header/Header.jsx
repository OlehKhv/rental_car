import { HeaderContainer, Navigation, StyledNavLink } from "./Header.styled";

export const Header = () => {
    return (
        <HeaderContainer>
            <Navigation>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="catalog">Catalog</StyledNavLink>
                <StyledNavLink to="favorites">Favorites</StyledNavLink>
            </Navigation>
        </HeaderContainer>
    );
};
