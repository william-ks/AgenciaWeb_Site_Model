import styled from "styled-components";

const Styled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
        text-align: center;
        font-size: 2.7em;
        font-weight: 300;
        text-shadow: 1px 2px 2px #0095ff;
        padding: 0 10px;
    }

    .line{
        width: 100%;
        height: 2px;
        background-color: black;
        box-shadow: 0 2px 4px #0095ff;
        /* border-top: 2px solid black; */
    }
`;

const Tittle = (props) => {
    return(
        <Styled>
            <div className="line"></div>
            <h2>{props.children}</h2>
            <div className="line"></div>
        </Styled>
    )
}

export default Tittle