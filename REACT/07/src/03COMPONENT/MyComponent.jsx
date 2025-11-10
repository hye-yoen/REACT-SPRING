import {useState,useEffect} from "react"

const MyComponent = () => {
    //State
    // let count = 0
    const [count,setCount] = useState(1) //count 초기값 == 0 //Setter 
    //handler
    const handleClick = () => {
        // count ++ 
        setCount(count + 1) //비동기 함수
        // console.log(count) 
    }
    //최초 1회 실행(1회만 랜더링 이후 처리 Hook)
    useEffect(()=>{
        console.log("init setting")
    },[])
    //const state가 변경될때마다 실행
    useEffect(()=>{ 
        console.log("count state changed..",count);
    },[count]) //[] => 감시할 상태 변수
    return (
        <>
            <h2> MyComponent ..</h2>
            <button onClick={handleClick}>Btn Count : {count}</button>
        </>
    )
}

export default MyComponent