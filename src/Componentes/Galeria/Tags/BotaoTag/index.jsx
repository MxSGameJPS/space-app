import styled from "styled-components";

const BotaoEstilizado = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 8px;
    gap: 10px;
    border-radius: 10px;
    background: rgba(217, 217, 217, 0.3);
    color: #fff;
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    cursor: pointer;
    line-height: normal; 
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`;

const BotaoTag = ({children, ativo = false}) => {
    return (
        <BotaoEstilizado $ativo={ativo}>
            {children}
        </BotaoEstilizado>
    )
}


export default BotaoTag