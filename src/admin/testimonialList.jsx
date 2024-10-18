import React from 'react';
import AdminList from './AdminList.jsx';

function TestimonialList() {
  return (
    <AdminList 
      title="Testimonials"
      endpoint="testimonials"
      addPath="/admin/testimonials/new"
      classes ="testimonial-list"
    />
  );
}

export default TestimonialList;
