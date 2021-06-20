import React from 'react';

const Diplomas = (props) => {


    return (
        <>
            <hr/>
            {
                props.diplomas.map(diploma=>{
                    if(!diploma.DiplomaPDF){
                       return (
                           <>
                               <div key={diploma.id}>
                                   {diploma.Theme}
                               </div>
                               <hr/>
                           </>
                       )
                    }
                    return (
                        <>
                            <a href={`http://localhost:1337${diploma.DiplomaPDF.url}`} key={diploma.id}>
                                {diploma.Theme}
                            </a>
                            <hr/>
                        </>
                    )
                })
            }
        </>
    );
}

export default Diplomas;