import styled from 'styled-components';

const CardWrapper = styled.div`
    border: 1px solid ${(props) => (props.borderColor ? props.borderColor : '#37474f')};
    height: ${(props) => (props.height ? props.height : '70')}px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px 0px #888888;
`;

const Card = (props) => {
    return (
        <CardWrapper height={props.height} borderColor={props.borderColor}>
            {props.children}
        </CardWrapper>
    );
};

export default Card;
