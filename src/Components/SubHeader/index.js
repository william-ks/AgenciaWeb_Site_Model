import styled from "styled-components";
import Header from "../Header/index";
import banner from "./vector.jpg";

const Styled = styled.section`
    width: 100%;
    height: 100vh;
    max-height: 100%;
    background-image: url(${banner});
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .banner{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
`;

const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 4%; 
    padding-top: 150px;

    .subBox{
        width: 100%;
        max-width: 400px;
        margin-top: -100px;
        list-style-type: none;
        text-align: center;
        border: 3px solid white;
        border-radius: 20px 10px;
        color: white;
        padding: 5px 100px;
        box-shadow: 0 5px 10px rgba(0,0,0,0.4);
    }

    .subBox li{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        margin: 10px 0;
        text-shadow: 1px 1px 1px black;
    }

    .subBox li span{
        padding-right: 5px;
        color: #0095ff;
        font-size: 1.4em;
    }

    button{
        margin-top: 80px;       
        cursor: pointer;
        background-color: #0095ff;
        border-radius: 15px 10px;
        border-bottom: 6px solid #01477a;
        box-shadow: 3px 5px 7px black;
    }

    button a{
        height: 55px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5em;
        font-weight: 200;
        text-decoration: none;
        color: white;
        padding: 5px 20px;
    }

    button:hover{
        transition: 0.3s;
        background-color: #136fb1;
        border-bottom: 6px solid #023052;
        transform:scale(1.05)
    }

    button a span{
        text-shadow: 1px 1px 1px black;
    }

`;

const SubHeader = () => {
    return(
        <Styled>
            <div className="banner">
                <Header />

                <Box>
                    <ul className="subBox">
                        <li><span>+</span> Segurança</li>
                        <li><span>+</span> Clientes</li>
                        <li><span>+</span> Lucro</li>
                    </ul>
                    <button>
                        <a href="#contact">
                            <span>Entrar em Contato</span>
                        </a>
                    </button>
                </Box>
            </div>
        </Styled>
    )
}

export default SubHeader;