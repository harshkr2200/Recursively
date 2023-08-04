import React, { useState, useEffect, useRef } from "react";
import "../Style/Sliderbar.scss";

const FileName = (props) => {
    const [openParentIndices, setOpenParentIndices] = useState([]);
    const mainRef = useRef(null);

    const handleParentClick = (index, event) => {
        event.stopPropagation(); // Stop click event propagation

        if (openParentIndices.includes(index)) {
            // If the parent is already open, remove it from the array to close it
            setOpenParentIndices(openParentIndices.filter((item) => item !== index));
        } else {
            // If the parent is closed, add it to the array to open it
            setOpenParentIndices([...openParentIndices, index]);
        }
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!mainRef.current.contains(event.target)) {
                setOpenParentIndices([]);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <div ref={mainRef} className="child">
            {props.data.map((item, index) => (
                <div
                    className={`card ${openParentIndices.includes(index) ? "parent" : ""
                        }`}
                    key={index}
                >
                    <h2
                        onClick={(event) => handleParentClick(index, event)}
                        className={item.children?.length ? "parent" : "child"}
                    >
                        {item.name}
                        {
                            item.children?.length // Check if there are children
                                ? openParentIndices.includes(index)
                                    ? " - "
                                    : "+"
                                : "" // Show minus icon if no children
                        }
                    </h2>
                    {openParentIndices.includes(index) && item.children?.length && (
                        <FileName data={item.children} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default FileName;
