import styled from 'styled-components';

const PrimaryWrapper = styled.h3`
    color: ${(props) => (props.color ? props.color : '#455a64')};
    text-transform: uppercase;
    letter-spacing: 0.8px;
`;

const PrimaryText = (props) => {
    return <PrimaryWrapper>{props.children}</PrimaryWrapper>;
};

export default PrimaryText;
