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
                        <p class='tiletext'>Popular</p>
                    </div>
                    <div className='column is-3 t2'>
                        <p class='tiletext'>Popular</p>
                    </div>
                    <div className='column is-3 t3'>
                        <p class='tiletext'>Popular</p>
                    </div>
                    <div className='column is-4 t4'>
                        <p class='tiletext'>Popular</p>
                    </div>
                  </div>
                  <div className='columns'>
                    <div className='column is-3 t5'>
                        <p class='tiletext'>Popular</p>
                    </div>
                    <div className='column is-3 t6'>
                        <p class='tiletext'>Popular</p>
                    </div>
                    <div className='column is-4 t7'>
                        <p class='tiletext'>Popular</p>
                    </div>
                    <div className='column is-2 t8'>
                        <p class='tiletext'>Popular</p>
                    </div>
                  </div>
                  <br/><br/>                
                </div>
            </div>
            )
    }
}

