import React from 'react'
import HobbyBox from './HobbyBox'
import {hobbyData} from '../hobbyData'
const Hobby = () => {
  return ( 
    <div className="hobby">
      <div className="content-wrapper hobby__content">
        {
          hobbyData.map(hobby => <HobbyBox icon={hobby.icon} title={hobby.title} />)
        }
      </div>
    </div>
   );
}
 
export default Hobby;