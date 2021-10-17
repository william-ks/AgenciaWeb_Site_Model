import styled from "styled-components";

const Styled = styled.footer`
    width: 100%;
    padding: 20px 0;
    background-color: rgb(0 9 14);
    
    &&.dark{
        background-color: rgb(5 26 40); 
    }

    > .center{
        text-align:center;
        color: white;
    }

    h3 {
        font-weight: 200;
    }

    a {
        text-decoration: none;
        color: #0095ff;
        text-shadow: 1px 2px 2px black;
    }
`;

const Footer = () => {


    return(
        <Styled>
            <div className="center">
                <h3>
                    Site Desenvolvido por <a href="">@William_Krisley</a>
                </h3>
            </div>
        </Styled>
    )
}

export default Footer;