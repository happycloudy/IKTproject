import React from 'react';
import StudyInfo from "./GraduateList";

const Graduate = (props) => {
    const bodyStyle = {
        height: '100%',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        background: "transparent"
    }


    return (
        <div style={bodyStyle}>
            <StudyInfo text={props.text} image={props.image}/>
        </div>
    );
};

export default Graduate;