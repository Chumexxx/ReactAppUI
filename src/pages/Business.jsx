import {useState} from "react"
import styled from "styled-components"

const Business = () => {
    const [myNum, setMyNum] = useState(0);

    const increaseNum = () => {
        setMyNum(myNum + 1)
    }

    const decreaseNum = () => {
        setMyNum(myNum - 1)
    }

    return(
       <div>
        <br />
        <br />
        <br />
        <h1>React Hooks</h1>
        <hr />
        <Holder>

            <Button onClick={increaseNum}>Add</Button>
                <p>{myNum}</p>
            <Button onClick={decreaseNum}>Subtract</Button>
            
        </Holder>
       
       </div>
    )
}

export default Business



const Holder = styled.div`
display: flex;
justify-content: center;
align-items: center;
justify-content: space-evenly;

`
const Button = styled.div`
    width: 100px;
    height: 50px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`