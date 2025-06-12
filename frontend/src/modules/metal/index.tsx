import React, {useState} from 'react';
export const MetalView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>METAL - Metal - gold, platinum, silver, alloy, f</h2><p>14k</p></div>
};
export default MetalView;
