import {useState} from 'react'
import CustomContext from "./Context" 

const CustomProvider = ({children}) => {
    //상태정보
    const [globalState,setGlobalState] = useState("KOREA_GLOBAL")

    //값들 키 값으로 전달 children이 provider 영역으로 들어감
    return(
        <CustomContext.Provider 
            value={{globalState,setGlobalState}}>
            {children}
        </CustomContext.Provider>
    )
} 

export default CustomProvider