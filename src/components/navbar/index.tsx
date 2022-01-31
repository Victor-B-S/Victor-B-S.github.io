import * as S from "./styled";

const Navbar = () => {
    return (
        <S.Wrapper>
            <ul>
                <li>Dropdown para escolher entre português e inglês</li>
                <li>Certificados</li>
                <li>Trabalhos</li>
                <li>Contato</li>
            </ul>
        </S.Wrapper>
    )
}

export default Navbar;