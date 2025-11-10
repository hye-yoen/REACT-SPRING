//01
function handlerClick_01(){
    console.log("clicked_01...")
}
export function Component_Event_01(){
    return (
        <>
        <h2>Component_Event_01...</h2>
        <button onClick={handlerClick_01}>CLICK_ME</button>
        </>
    )
}

export function Component_Event_02(){
    //State

    //Handler
    function handlerClick_02(){
    console.log("clicked_02...")
    }

    return (
        <>
        <h2>Component_Event_02...</h2>
        <button onClick={handlerClick_02}>CLICK_ME</button>
        </>
    )
}

export function Component_Event_03(){
    //State

    //Handler
    function handlerKeyDown(event){
        console.log("clicked_03...",event.target.value)
    }

    return (
        <>
        <h2>Component_Event_03...</h2>
        <input type="text" onKeyDown={handlerKeyDown} />
        </>
    )
}