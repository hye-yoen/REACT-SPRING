import React, { useState } from "react";
import axios from "axios";

const Post = () => {
  //컴포넌트 변수 저장 관리
    const [id , setId] = useState();
    const [writer , setWriter] = useState();
    const [text , setText] = useState();
    const [regdate, setRegDate] = useState();
    const [message,setMessage] = useState({});
  
    const postHandler = (e) => {
      
      axios
      .post(
        `http://localhost:8080/memo/post`,                          //URL
        {"id":id,"text":text,"writer":writer,"regdate":regdate},    //PARAM 서버로 보낼 데이터(json)
        {headers: {'Content-Type': 'application/json'}}             //CONTENT_TYPE 헤더 설정
      )
      .then(response => {
        console.log(response.data); //요청 성공시 실행
      })
      .catch(error => {
        console.error('error.response.data', error.response.data);
        setMessage(error.response.data) //오류 메시지를 React state로 저장
      });
        
    };
  return (
    <div>
      <div>
        <h2>메모 POST</h2>
      </div>
      <div>
        <label htmlFor="">ID : </label> <span className="id">{message.id}</span><br/>
        <input name="id" type="text" onChange={(e)=>{setId(e.target.value)}}/> 
        {/* e.target.value == 사용자가 입력한 값 */}
      </div>
      <div>
        <label htmlFor="">WRITER : </label> <span className="id">{message.writer}</span><br/>
        <input name="writer" type="text" onChange={(e)=>{setWriter(e.target.value)}}/>
      </div>
      <div>
        <label htmlFor="">TEXT : </label> <span className="id">{message.text}</span><br/>
        <textarea name="" onChange={(e)=>{setText(e.target.value)}}></textarea>
      </div>
      <div>
      <label htmlFor="">REGDATE : </label> <span className="id">{message.regdate}</span><br/>
        <input type="datetime-local" onChange={(e)=>{setRegDate(e.target.value)}} />
      </div>
      <div>
        <button onClick={postHandler}>전송</button>
      </div>
    </div>
  );
};

export default Post;
