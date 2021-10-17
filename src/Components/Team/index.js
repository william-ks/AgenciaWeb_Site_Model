import styled from "styled-components";
import Tittle from "../Tittle";
import bg from "./bg.jpg";
import couple from "./couple.jpg"
import hacker from "./bla.jfif";

const Styled = styled.section`
    width: 100%;


    h3{
        text-align: center;
        color: white;
        font-weight: 200;
        font-size: 2em;
        text-shadow: 1px 1px 2px black;
    }
`;

const MidPage = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;

    > .center{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
`;

const BotPage = styled.div`
    padding-top: 60px;
    width: 100%;

    .line.dark{
        background-color: white !important;
    }
`;

const Content = styled.div`
    width: 100%;
    padding: 50px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 750px){
        flex-direction: column;
    }

    .singleTeam{
        width: 280px;
        height: 300px;
        background-color: rgb(5 26 40);
        border-radius: 25px;
        margin: 10px;
        text-align: center;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0 5px 10px #000000a9;
        transition: 0.5s;
    }

    .singleTeam.dark{
        border: 1px solid #0095ff40;
        box-shadow: 0 10px 20px #0095ff40;
    }

    .singleTeam:hover{
        transition: 0.5s;
        transform: scale(1.06);
        z-index: 1;
    }

    @media screen and (min-width: 760px){
        .singleTeam.me:hover > .imgTeam{
            transition: 0.5s;
            background-image: url(${hacker});
        }
    }

    

    .imgTeam{
        transition: 0.5s;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-image: url(${couple});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        margin-bottom: 25px;
    }

    .singleTeam h4{
        font-weight: 100;
        font-size: 1.5em;
        text-shadow: 1px 1px 2px #0095ff;
    }

    .singleTeam p{
        color: rgb(230 230 230);
        font-size: 0.7em;
        font-weight: 100;
        font-style: italic;
        margin: 15px 0;
    }

    @media screen and (max-width: 750px){
        .singleTeam{
            margin: 20px 0;
        }
    }
`;

const Team = () => {
    return(
        <Styled>
            <MidPage>
                <div className="center">
                    <h3>A equipe que vai transformar a sua vida!</h3>
                </div>
            </MidPage>

            <BotPage  id="team">
                <div className="center">
                    <Tittle>Equipe</Tittle>

                    <Content>
                        <div className="singleTeam">
                            <div className="imgTeam"></div>
                            <h4>Gabriel Magno</h4>
                            <p>Design</p>
                        </div>

                        <div className="singleTeam me">
                            <div className="imgTeam"></div>
                            <h4>William Krisley</h4>
                            <p>Desenvolvedor Front-end</p>
                        </div>

                        <div className="singleTeam">
                            <div className="imgTeam"></div>
                            <h4>Guilherme Chaves</h4>
                            <p>Desenvolvedor Back-end</p>
                        </div>
                    </Content>
                </div>
            </BotPage>
        </Styled>
    )
}

export default Team;