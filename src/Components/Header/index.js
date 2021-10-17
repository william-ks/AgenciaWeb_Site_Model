import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const HeaderS = styled.header`
    width: 100%;
    padding: 15px 2%;
    background-color: rgba(22, 23, 28, 0.4);
    position: fixed;
    top: 0;
    z-index: 999;

    &&:hover{
        transition: 0.5s;
        background-color: rgba(15, 15, 15, 0.9);
        border-bottom: 1px solid #0095ff;
    }

    &&.black{
        transition: 0.5s;
        background-color: rgba(15, 15, 15, 0.9);
        border-bottom: 1px solid #0095ff;
    }

    > .center{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo a{
        font-size: 1.6em;
        font-weight: 300;
        color: white;
        text-shadow: 1px 1px 2px black;
        font-style: italic;
    }

    .logo a span{
        color: #0095ff;
    }

    .menu{
        margin-top: 5px;
    }

    .desktop{
        display: block;
        
    }

    .desktop ul{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
    }

    .desktop ul li{
        margin: 0 30px;
    }

    .desktop ul li a{
        font-size: 1.2em;
        font-weight: 200;
    }

    .desktop ul li a:hover{
        color: #0095ff;
    }

    .mobile{
        width: 100%;
        display: none;
    }

    .mobile ul{
        display: none;
        width: 100%;
        text-align: center;
        position: absolute;
        left: 0;
        top: 75px;
        background-color: rgba(15, 15, 15, 0.9);
    }

    .mobile ul.visible{
        display: block !important;
    }

    .mobile ul li a{
        display: block;
        font-weight: 200;
        padding: 20px 0;
        border-bottom: 1px solid #0095ff;
        font-size: 1.3em;
    }

    .mobile .icon svg{
        font-size: 2em;
        color: white;
        font-weight: 200;
        cursor: pointer;
    }

    @media screen and (max-width: 819px)  {
        .desktop{
            display: none;
        }

        .mobile{
            display: block
        }
    }

`;




const Header = () => {

    function mobile(){
        const mobileMenu = document.querySelector('#mobileMenu');
        const header = document.querySelector('header');
        header.classList.toggle('black');
        mobileMenu.classList.toggle('visible');

    }

    return(
        <HeaderS>
            <div className="center">

                <div className="logo">
                    <a href="/">
                        Cyber.<span>Tech</span>
                    </a>
                </div>
                
                <div className="menu">
                    <nav className="desktop">
                        <ul>
                            <li>
                                <a href="#works">
                                    Serviços
                                </a>
                            </li>

                            <li>
                                <a href="#team">
                                    Equipe
                                </a>
                            </li>

                            <li>
                                <a href="#contact">
                                    Contato
                                </a>
                            </li>

                            
                        </ul>
                    </nav>

                    <nav  className="mobile">

                        <div className="icon" onClick={mobile}>
                            <FaBars />
                        </div>

                        <ul onClick={mobile} id="mobileMenu">
                            <li>
                                <a href="#works">
                                    Serviços
                                </a>
                            </li>

                            <li>
                                <a href="#team">
                                    Equipe
                                </a>
                            </li>

                            <li>
                                <a href="#contact">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </HeaderS>
    )
}

export default Header;