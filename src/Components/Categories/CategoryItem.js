import styled from 'styled-components';
import CardText from '../../Shared/CardText';

const CategoryItemWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
`;

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    margin-top: -5px;
    padding-left: 2%;
    padding-right: 2%;
`;

const ImageBox = styled.img`
    height: 40px;
    width: 40px;
`;

const CategoryItem = (props) => {
    return (
        <CategoryItemWrapper>
            <ImageWrapper>
                <ImageBox src={props.icon} alt={props.label} />
            </ImageWrapper>
            <CardText>{props.label}</CardText>
        </CategoryItemWrapper>
    );
};

export default CategoryItem;
