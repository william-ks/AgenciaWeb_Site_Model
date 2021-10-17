import styled from "styled-components";
import Tittle from "../Tittle";
import lojaVirtual from "./lojavirtual.svg";
import site from './site.svg';
import pwa from './pwa.svg';

const Styled = styled.section`
    width: 100%;
    padding: 60px 0 55px 0;

    a {
        text-decoration: none;
    }

    .box-wrapper{
        margin-top: 45px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    .box-single{
        margin: 10px;
        width: 307px;
        height: 330px;
        background-color: rgb(5 26 40);
        border-radius: 20px;
        box-shadow: 0 5px 10px #000000a6;
        transition: 0.5s;
    }

    .box-single:hover{
        transform: scale(1.04);
        z-index: 1;
    }

    .box-single.dark{
        box-shadow: 0 10px 20px #0095ff40;
        border: 1px solid #0095ff40;
    }

    .imgTittle{
        width:100%;
    }

    .imgTittle img{
        width: 100%;
        border-radius: 18px 18px 0 0;
    }

    h3{
        padding: 40px 2%;
        color: white;
        font-weight: 100;
        text-align: center;
        font-size: 1em;
    }

    @media screen and (max-width: 1040px){
        .box-wrapper{
            flex-direction: column;
            justify-content: center;
        }

        .box-single{
            margin: 30px 0;
        }

    }
    
`;

const Works = () => {

    return(
        <Styled id="works">
            <div className="center">

                <Tittle>Serviços</Tittle>

                <div className="box-wrapper">

                    <a href="/" className="box-single">
                        <div className="imgTittle"><img src={lojaVirtual} alt="nothing" /></div>
                        <h3>Criação de Lojas Virtuais e E-commerce</h3>
                    </a>

                    <a href="/" className="box-single">
                        <div className="imgTittle"><img src={site} alt="nothing" /></div>
                        <h3>Criação Blogs, Landing Pages, Sites Institucionais, Site de Afiliado</h3>
                    </a>

                    <a href="/" className="box-single">
                        <div className="imgTittle"><img src={pwa} alt="nothing" /></div>
                        <h3>Criação de Sites que podem ser instalados como aplicativo</h3>
                    </a>

                </div>

            </div>
        </Styled>
    )
}

export default Works;