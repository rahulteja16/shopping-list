import styled from 'styled-components';
import Categories from '../Categories/Categories';

const ShoppingWrapper = styled.div`
    display: flex;
    flex-flow: row;
    height: 90vh;
`;

const SpacingWrapper = styled.div`
    display: flex;
    flex: ${(props) => (props.flex ? props.flex : 1)};
`;

const Shopping = () => {
    return (
        <ShoppingWrapper>
            <SpacingWrapper flex={1}>
                <Categories />
            </SpacingWrapper>
            <SpacingWrapper flex={2}>Right</SpacingWrapper>
        </ShoppingWrapper>
    );
};

export default Shopping;
