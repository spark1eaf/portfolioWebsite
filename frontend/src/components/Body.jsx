
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
            <img src="" alt="" />
        </div>
    )
}

export default Body;