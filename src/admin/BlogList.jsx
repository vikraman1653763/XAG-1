import React from 'react';
import AdminList from './AdminList.jsx';

function BlogList() {
  return (
    <AdminList 
      title="Blogs"
      endpoint="blogs"
      addPath="/admin/blogs/new"
      classes ="blog-list"
    />
  );
}

export default BlogList;
