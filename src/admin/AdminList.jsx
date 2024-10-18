import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TiArrowLeftThick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import { serverUrl } from '../constant';
function AdminList({ title, endpoint, addPath,classes }) {
  const [items, setItems] = useState([]);
const [error, setError] = useState(null);
const [message,setMessage]=useState(null);
const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${serverUrl}/api/${endpoint}`);
        const data = await response.json();
        if (response.ok) {
          setItems(data);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError('Failed to fetch data');
      }
    };

    fetchItems();
  }, [endpoint]);

  const token = localStorage.getItem('token');


  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
if(confirmed){

  try {
    const response = await fetch(`${serverUrl}/api/${endpoint}/${id}`, {
      method: 'DELETE',
      headers:{
      
      "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    if (response.status === 403){
      navigate('/login');
    }
    if (response.ok) {
      setItems(items.filter(item => item.id !== id));
      setMessage(data.message);
      setTimeout(() =>setMessage(null), 5000);
    } else {
      setError(data.error);
      setTimeout(() =>setError(null), 5000);
      
    }
  } catch (err) {
    setError('Failed to delete item');
    setTimeout(() =>setError(null), 5000);
    
  }
}
};
const handleBack = () => {
  navigate('/admin');
};
const formatToIST = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN').replace(/\//g, '-');
  };
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-IN');
  };


  return (
<div className={`admin-list-container ${classes}`}>
<button type="button" onClick={handleBack} className="back-button"> <TiArrowLeftThick /> Back
</button>

<h2>{title}

      <Link to={addPath} className="add-button">
        <FaPlus /> Add New
      </Link>
</h2>
{error && <div className="alert alert-danger">{error}</div>}
{message && <div className="alert alert-danger">{message}</div>}
<table className="admin-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.title || item.name}</td>
              <td>{formatToIST(item.date)}</td>
              <td>{formatTime(item.date)}</td>
              <td>
                <button onClick={() => handleDelete(item.id)} className="delete-button">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminList;
