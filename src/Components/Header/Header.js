import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background-color: #37474f;
    height: 60px;
    color: #eceff1;
    font-size: 26px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 10px 6px #888888;
    gap: 20px 20px;
`;

const Header = () => {
    return <HeaderWrapper>Shopping List</HeaderWrapper>;
};

export default Header;
