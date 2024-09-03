import React from 'react';
import AdminList from './AdminList.jsx';

function CareerList() {
  return (
    <AdminList 
      title="Careers"
      endpoint="careers"
      addPath="/admin/careers/new"
      classes ="career-list"
    />
  );
}

export default CareerList;
