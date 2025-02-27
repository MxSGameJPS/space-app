import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";

const GaleriaConteiner = styled.div`
    display: flex;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`;



const Galeria = ({fotos = []}) => {
    return (
        <>
            <Tags/> 
            <GaleriaConteiner>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ul>
                    {fotos.map(foto =><li>{foto.titulo}</li> ) }
                    </ul>
                </SecaoFluida>
                <Populares/>    

            </GaleriaConteiner>
        </>
        );
}

export default Galeria;