import { useEffect, useState } from 'react';

const Percentage = ({unit}) => {
    const [full, setFull] = useState(0);

    useEffect(()=>{
        setFull(100-unit);
    },[unit])

    return(
        <div>
            <svg width="20rem">
                <circle cx="50%" cy="50%" r="16%" fill='rgba(255, 255, 255, 0.2)'></circle>
                <circle cx="50%" cy="50%" r="16%" fill="transparent" stroke='var(--perGray)' strokeWidth="5%"></circle>
                <circle className={'donut'} cx="50%" cy="50%" r="16%" fill="transparent" strokeWidth="5%" strokeDashoffset='25%'></circle>
                <g>
                    <text y="50%" transform="translate(0, 3)" fill="#fff">
                        <tspan x="50%" textAnchor="middle">{unit}%</tspan>   
                    </text>
                </g>
            </svg>
            <style jsx>{`
                .donut {
                    stroke: var(--cardBlue);
                    stroke-dasharray: ${unit}% ${full}%;
                    animation: donut 3s;
                }

                @keyframes donut {
                    0% {
                        stroke-dasharray: 0% 100%;
                    }
                    100% {
                        stroke-dasharray: ${unit}% ${full}%;
                    }
                }
            `}</style>
        </div>
    );
}

export default Percentage;