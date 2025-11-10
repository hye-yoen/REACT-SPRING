import { useState,useEffect,useContext } from "react"
import CustomContext from "./Context"

const Son_01= ({user,onChangeName}) => {

    const [name,setName] = useState(user)

    const {globalState,setGlobalState} = useContext(CustomContext)

    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handelClick = () => {
        onChangeName(name)
    }
    const handleChange2 = (e2) => {
        setGlobalState(e2.target.value)
    }
    const handelClick2 = () => {
        onChangeName(globalState)
    }
    return(
        <>
            <h3>SON_01 Component</h3>
            전역변수 : {globalState} <br/>
            전역변수 변경하기 : <input onChange={handleChange2} type="text" value={globalState}/>
            <button onClick={handelClick2}>전역변수 변경하기</button><br/>
            자식 상태값 : {name} <br/>
            변경하기 : <input onChange={handleChange} className="input" type="text" value={name} />
            <button onClick={handelClick}>부모상태값 변경하기</button>
        </>
    )
}

export default Son_01