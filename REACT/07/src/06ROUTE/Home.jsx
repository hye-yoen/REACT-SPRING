import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <>
            <h1>Home PAGE</h1>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about?name=toma&age=100">About_1</Link> </li>
                <li> <Link to="/about?name=yami&age=50">About_2</Link> </li>
                <li> <Link to="/contact/lee/22">Contact</Link> </li>
            </ul>
            <div>인형 냄새가... 쉰내나요... 버티기 힘들어요.. </div>
            <div>왠만한건 다 버티겠는데.. 윽...</div>
            <div> 살려줘.... </div>
        </>
        
    ) 
}

export default Home;