import { forwardRef } from "react";

interface Props{
    className:string,
    title:string
}

    const SectionTitle = forwardRef<HTMLHeadingElement, Props>(({className, title}, ref) => {
        return( 
            <h1 ref={ref} className={className}>{title}</h1>
        )
    });

export default SectionTitle;