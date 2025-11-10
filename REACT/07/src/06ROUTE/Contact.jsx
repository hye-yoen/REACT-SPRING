import { Link ,useParams} from "react-router-dom";

const Contact= () => {
    const {name,age} = useParams();
    console.log(name,age);
    return(
        <>
            <h1>Contact PAGE</h1>
            <Link to="/">Home</Link>
            <div>살려줘.....</div>
            <div> 와 진짜 죽겠다... </div>
            <div>와.. 이거 진짜 아니예요.. 정말 아님</div>
        </>
    ) 
}

export default Contact;