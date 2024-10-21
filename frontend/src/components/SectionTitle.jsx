import { forwardRef } from "react";

const SectionTitle = ({className, title}, ref) => {
    return( 
        <h1 ref={ref} className={className}>{title}</h1>
    )
}

export default forwardRef(SectionTitle);