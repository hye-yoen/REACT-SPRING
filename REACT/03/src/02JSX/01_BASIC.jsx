// 01 기본 JSX 요소 생성
export const Element1 = () => {return <h2>Hello World -1 </h2>}
// 02 Function 예약어
export function Element2(){
    return <h2>Hellowordl -2</h2>
} 
// 03 인자값 받는 요소 생성(props)
export function Element3(props){
    console.log("EL3's props : ",props);
    if(props.auth === "ROLE_ADMIN"){
        return <h2>관리자님 환영, Name = {props.name} </h2>
    }
    else if(props.auth === "ROLE_USER"){
        return <h2>유저 환영 , Name = {props.name} </h2>
    }
}
// 04 인자값 받는 요소 생성(props)
//{auth,name} = props
export function Element4({auth,name}){
    console.log("EL3's props : ",auth, name);
    if(auth === "ROLE_ADMIN"){
        return <h2>관리자님 환영, Name = {name} </h2>
    }
    else if(auth === "ROLE_USER"){
        return <h2>유저 환영 , Name = {name} </h2>
    }
}
//05 반복문 사용하기
export const Element5 = (props)=> {
    console.log("EL5's props : ",props);
    const list = props.list; 
    return (
    <ul>
       {list.map((item,idx)=>{return <li key={idx}>{item}</li>})}
    </ul>
    )
}
//06 기본 컴포넌트 EXPORT
const DefaultComponent1 = () => {return <h2>DefaultComponent1</h2>} 
const DefaultComponent2 = () => {return <h2>DefaultComponent2</h2>} 

export default{
    DefaultComponent1,
    DefaultComponent2
}