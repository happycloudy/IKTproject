import React from 'react';

const Diplomas = (props) => {


    return (
        <>
            <hr/>
            {
                props.diplomas.map(diploma=>{
                    if(!diploma.DiplomaPDF){
                       return (
                           <div key={diploma.id}>
                               <div>
                                   {diploma.Theme}
                               </div>
                               <hr/>
                           </div>
                       )
                    }
                    return (
                        <div key={diploma.id}>
                            <a href={`http://localhost:1337${diploma.DiplomaPDF.url}`} key={diploma.id}>
                                {diploma.Theme}
                            </a>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Diplomas;