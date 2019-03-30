import React from 'react';
import './popularComponent.css'


export default class Popular extends React.Component{
    render(){
        return(
            <div>
                <h2 className='subtitle'>Popular</h2><br/>
                <div className='tilecontainer'>
                  <div className='columns'>
                    <div className='column is-2 t1'>
                    </div>
                    <div className='column is-3 t2'>
                    </div>
                    <div className='column is-3 t3'>
                    </div>
                    <div className='column is-4 t4'>
                    </div>
                  </div>
                  <div className='columns'>
                    <div className='column is-3 t5'>
                    </div>
                    <div className='column is-3 t6'>
                    </div>
                    <div className='column is-4 t7'>
                    </div>
                    <div className='column is-2 t8'>
                    </div>
                  </div>
                  <br/><br/>                
                </div>
            </div>
            )
    }
}

