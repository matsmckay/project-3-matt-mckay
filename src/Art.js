import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Art = ({ title, imagePath, alt }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className="imgFlex">
            <div className="artInfo">
                <button onClick={() => setShowInfo(!showInfo)} className="btn" >{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
                {
                    showInfo && <h2>{title}</h2>
                }
                <img
                    src={imagePath}
                    alt={alt}
                    width="25%"
                />
            </div>
        </article>
    )
}

export default Art;