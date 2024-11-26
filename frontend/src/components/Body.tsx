import React, { memo } from "react";

interface Props{
    className:string,
    text:string
}
const Body = memo(({className, text}:Props)=>{

    return(
        <div className={className}>
            <p>
                {text.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br/><br/>
                    </React.Fragment>
                ))}
            </p>
        </div>
    );
});

export default Body;