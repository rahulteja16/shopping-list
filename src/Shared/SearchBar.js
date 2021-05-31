import styled from 'styled-components';

const SearchWrapper = styled.input`
    height: 30px;
    border-radius: 8px;
    border: 1px solid #37474f;
    padding-left: 10px;
    font-size: 16px;
`;

const SearchBar = (props) => {
    return <SearchWrapper placeholder="Search" />;
};

export default SearchBar;
