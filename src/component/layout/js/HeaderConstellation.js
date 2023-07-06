import * as React from 'react';
import '../scss/headerConstellation.scss';

export default function HeaderConstellation() {
  return (
    <div className='ConstellationSearch'>
        <input type="text" className='form-control' placeholder='Search'/>
    </div>
  );
}