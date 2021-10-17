import styled from "styled-components";
import Tittle from "../Tittle";
import bg from "./bg.jpg";

const Image = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;

    > h2{
        margin: auto;
        text-align: center;
        color: white;
        font-weight: 200;
        font-size: 2em;
        text-shadow: 1px 1px 2px black;
    }

`;

const Styled = styled.section`
    width: 100%;
    padding: 60px 0 15px 0;

    form{
        margin: 50px auto;
        width: 100%;
        max-width: 450px;
    }

    form.dark{
        background-color: transparent;
    }

    input[type="text"],
    input[type="email"]{
        width: 100%;
        padding: 0 13px;
        height: 45px;
        line-height: 45px;
        margin: 15px 0;
        border-radius: 25px;

        background-color: rgb(5 26 40);
        box-shadow: 2px 7px 8px #00000050;
        color: white;
        border: 1px solid transparent;
    }

    form.dark input[type="text"],
    form.dark input[type="email"],
    form.dark textarea{
        border: 1px solid #0095ff40;
        box-shadow: 2px 7px 8px #0095ff40;
    }

    input[type="text"]:focus,
    input[type="email"]:focus,
    textarea:focus{
        border: 1px solid #0095ff;
        box-shadow: 2px 7px 8px #00000080;
    }

    form.dark input[type="text"]:focus,
    form.dark input[type="email"]:focus,
    form.dark textarea:focus{
        border: 1px solid #0095ff;
        box-shadow: 0 4px 12px #0095ffe0;
    }

    textarea{
        margin: 15px 0;
        width: 100%;
        height: 200px;
        padding: 13px;
        border-radius: 25px;
        resize: none;
        border: 1px solid transparent;

        background-color: rgb(5 26 40);
        box-shadow: 2px 7px 8px #00000050;
        color: white;
    }

    input[type="submit"]{  
        display: block;
        margin: 10px auto 0 auto;

        cursor: pointer;
        background-color: #0095ff;
        border-radius: 15px 10px;
        border-bottom: 6px solid #01477a;
        box-shadow: 2px 7px 8px #00000050;

        height: 55px;
        line-height: 55px;
        font-size: 1.4em;
        font-weight: 200;
        text-decoration: none;
        color: white;
        padding: 0 35px;
    }

    form.dark input[type="submit"]{
        box-shadow: 2px 7px 8px #00000080;
    }

    input[type="submit"]:hover{
        transition: 0.3s;
        background-color: #136fb1;
        border-bottom: 6px solid #023052;
        transform:scale(1.05)
    }
`;

const Contact = () => {


    return(
        <div>
            <Image>
                <h2>Venha logo ter seu próprio Website !</h2>
            </Image>
            

            <Styled  id="contact">
                <div className="center">
                    <Tittle>Contato</Tittle>

                    <form>
                        <input type="text" autocomplete="off" name="nome" placeholder="Nome..." required/>
                        <input type="email" autocomplete="off" name="email" placeholder="E-mail..." required/>
                        <textarea placeholder="Mensagem..."></textarea>

                        <input type="submit" value="Enviar" name="acao" />

                    </form>
                </div>
            </Styled>
        </div>

        
    )
}

export default Contact;