import React, {useState} from 'react';
export const RenderingView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>RENDERING - Rendering - PBR, HDRI, real-time preview</h2><p>PBR</p></div>
};
export default RenderingView;
