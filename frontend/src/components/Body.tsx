
interface Props{
    className:string,
    text:string
}
const Body = ({className, text}:Props)=>{

    return(
        <div className={className}>
            <p>
                {text.split('\n').map((line) => (
                    <>
                        {line}
                        <br/><br/>
                    </>
                ))}
            </p>
        </div>
    )
}

export default Body;