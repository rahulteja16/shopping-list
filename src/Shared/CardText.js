import styled from 'styled-components';

const CardTextWrapper = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #37474f;
    letter-spacing: 0.5px;
`;

const CardText = (props) => {
    return <CardTextWrapper>{props.children}</CardTextWrapper>;
};

export default CardText;
