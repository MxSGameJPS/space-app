import styled from "styled-components"
import BotaoTag from "./BotaoTag"
import tags from "./tags.json"

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    font-weight: 400;
    margin: 0;    
`

const ContainerTags = styled.div`
    display: inline-flex;
    align-items: flex-start;    
    gap: 24px;   
`

const ContainerTag = styled.div`
    display: flex;    
    gap: 24px;
    align-items: center; 
    margin-top: 16px;
`

const Tags = () => {
    return (
        <ContainerTag>
        <TagTitulo>Busque por tags:</TagTitulo>
        <ContainerTags>
        {tags.map(tag => <BotaoTag key={tag.id}>{tag.titulo}</BotaoTag>)}            
        </ContainerTags>
        </ContainerTag>
    )

}

export default Tags