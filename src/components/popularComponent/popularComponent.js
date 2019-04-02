import React from 'react';
import './popularComponent.css'

export default class Popular extends React.Component{
    render(){
        return(
            <div className='popular_section'>
                <h2 className='subtitle'>Popular</h2><br/>
                <div className='tilecontainer'>
                  <div className='columns is-mobile'>
                    <div className='column is-2 t1'>
                        <p className='tiletext'>Popular</p>
                    </div>
                    <div className='column is-3 t2'>
                        <p className='tiletext'>Popular</p>
                    </div>
                    <div className='column is-3 t3'>
                        <p className='tiletext'>Popular</p>
                    </div>
                    <div className='column is-4 t4'>
                        <p className='tiletext'>Popular</p>
                    </div>
                  </div>
                  <div className='columns  is-mobile'>
                    <div className='column is-3 t5'>
                        <p className='tiletext'>Popular</p>
                    </div>
                    <div className='column is-3 t6'>
                        <p className='tiletext'>Popular</p>
                    </div>
                    <div className='column is-4 t7'>
                        <p className='tiletext'>Popular</p>
                    </div>
                    <div className='column is-2 t8'>
                        <p className='tiletext'>Popular</p>
                    </div>
                  </div>
                  <br/><br/>                
                </div>
            </div>
            )
    }
}

