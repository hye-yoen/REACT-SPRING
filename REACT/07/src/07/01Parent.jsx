import {useState,useEffect,useContext} from "react"
import Son_01 from "./01Son"
import CustomContext from "./Context"

const Parent_01 = () => {

    const [name,setName] = useState("홍길동")

    const {globalState,setGlobalState} = useContext(CustomContext)

    const handleChangeName = (name) => {
        setName(name)
    }

    return(
        <div>
            <h2>ParentComponent_01 </h2>
            부모 상태값 : {name}<br/>
            공유변수 : {globalState}<br/>
            <hr/>

            <Son_01 
                user={name}
                onChangeName={handleChangeName}
                />
        </div>
    )
}

export default Parent_01