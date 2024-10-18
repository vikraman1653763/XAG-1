// auth.js
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
<<<<<<< HEAD
  return !!token; 
=======
  return !!token; // Returns true if token exists, otherwise false
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
};


