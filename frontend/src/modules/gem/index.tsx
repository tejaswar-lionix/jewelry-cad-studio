import React, {useState} from 'react';
export const GemView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>GEM - Gem - cut, carat, clarity, color, placem</h2><p>round</p></div>
};
export default GemView;
