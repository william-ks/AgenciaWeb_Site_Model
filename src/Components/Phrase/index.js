import styled from "styled-components";

const Styled = styled.section`
    width: 100%;
    height: 90px;
    max-height: 90px;
    line-height: 90px;
    word-wrap: break-word;
    
    text-align: center;

    .Phrase{
        background-color: #0095ff;
    }

    h2{
        color: white;
        font-weight: 200;
        font-size: 1.7em;
        text-shadow: 1px 2px 4px black;
        font-style: italic;
    }

    @media screen and (max-width: 550px) {
        h2{
            font-size: 1em;
        }
    }
`;

const Phrase = (props) => {
    return(
        <Styled>
            <div className="Phrase">
                <div className="center">
                    <h2>
                        {props.children}
                    </h2>
                </div>
            </div>
        </Styled>
    )
}

export default Phrase;