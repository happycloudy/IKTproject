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
                               <div className='text-black-80'>
                                   {`${diploma.Author} - ${diploma.Theme}`}
                               </div>
                               <hr/>
                           </div>
                       )
                    }


                    return (
                        <div key={diploma.id}>
                            <a
                                className='text-black-80'
                                style={{textDecoration: 'underline'}}
                                href={`http://localhost:1337${diploma.DiplomaPDF.url}`}
                                key={diploma.id}
                            >
                                {`${diploma.Author} - ${diploma.Theme}`}
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