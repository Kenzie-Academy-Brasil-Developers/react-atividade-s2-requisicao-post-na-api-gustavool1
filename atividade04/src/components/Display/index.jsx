import Message from "../../Motion/Messages"
const Display = ({ errorUser }) =>{
    return(
        <>
         {errorUser ? (
             <Message>
                 <p className='green'>Requisição completa</p>
            </Message>
         )
        :(
            <Message>
                <p className='red'>Requisição falhou !</p>
            </Message>
        )}
        </>
    )
}

export default Display