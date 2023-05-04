import React from 'react';
import "./ActionItem.css";


const ActionItem = ({ status, description, priority, onDelete }) => {
  const handlePriorityChange = (event) => {
    // handle priority change logic
  };

  const handleDelete = () => {
    // handle delete logic
    onDelete();
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="action-item">
          <div className="status">
            <p>{status}</p>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="priority">
            <label htmlFor={`priority-${description}`}>Priority:</label>
            <input
              id={`priority-${description}`}
              type="checkbox"
              checked={priority}
              onChange={handlePriorityChange}
            />
          </div>
          <div className="delete-button">
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionItem;