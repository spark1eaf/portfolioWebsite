
const Body = ({className, text})=>{

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