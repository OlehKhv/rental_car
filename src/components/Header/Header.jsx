import {
    HeaderContainer,
    IconWrapper,
    Navigation,
    Span,
    StyledNavLink,
} from "./Header.styled";
import sprite from "../../assets/images/sprite.svg";

export const Header = () => {
    return (
        <HeaderContainer>
            <Navigation>
                <StyledNavLink to="/">
                    <Span>
                        <IconWrapper>
                            <use href={`${sprite}#icon-logo`} />
                        </IconWrapper>
                        Home
                    </Span>
                </StyledNavLink>
                <StyledNavLink to="catalog">Catalog</StyledNavLink>
                <StyledNavLink to="favorites">Favorites</StyledNavLink>
            </Navigation>
        </HeaderContainer>
    );
};
