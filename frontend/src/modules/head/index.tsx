import React, {useState} from 'react';
export const HeadView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>HEAD - Head - gem settings, prongs, bezel, halo</h2><p>prong</p></div>
};
export default HeadView;
