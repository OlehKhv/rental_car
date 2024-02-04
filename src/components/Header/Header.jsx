import { HeaderContainer, Navigation, StyledNavLink } from "./Header.styled";

export const Header = () => {
    return (
        <HeaderContainer>
            <Navigation>
                <StyledNavLink to="/">
                    {/* <IconWrapper>
                        <use href={`${sprite}#icon-logo`} />
                    </IconWrapper> */}
                    Home
                </StyledNavLink>
                <StyledNavLink to="catalog">
                    {/* <IconWrapper>
                        <use href={`${sprite}#icon-logo`} />
                    </IconWrapper> */}
                    Catalog
                </StyledNavLink>
                <StyledNavLink to="favorites">
                    {/* <IconWrapper>
                        <use href={`${sprite}#icon-logo`} />
                    </IconWrapper> */}
                    Favorites
                </StyledNavLink>
            </Navigation>
        </HeaderContainer>
    );
};
