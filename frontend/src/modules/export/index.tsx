import React, {useState} from 'react';
export const ExportView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>EXPORT - Export - STL, DXF, 3MF, PDF, G-code</h2><p>STL</p></div>
};
export default ExportView;
