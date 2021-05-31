import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PrimaryText from '../../Shared/PrimaryText';
import SearchBar from '../../Shared/SearchBar';
import SizedBox from '../../Shared/SizedBox';
import CategoryList from './CategoryList';

const CategoriesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 2%;
`;

const Categories = () => {
    const state = useSelector((state) => state.shopReducer);
    console.log(state);

    return (
        <CategoriesWrapper>
            <SizedBox axis="height" size="10"></SizedBox>
            <PrimaryText>Categories</PrimaryText>
            <SearchBar />
            <SizedBox axis="height" size="20"></SizedBox>
            <CategoryList list={state.categories} />
        </CategoriesWrapper>
    );
};

export default Categories;
