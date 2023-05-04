import React from 'react';


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
        <div className="row align-items-center">
          <div className="col-md-2">
            <p>{status}</p>
          </div>
          <div className="col-md-6">
            <p>{description}</p>
          </div>
          <div className="col-md-2">
            <label htmlFor={`priority-${description}`}>Priority:</label>
            <input
              id={`priority-${description}`}
              type="checkbox"
              checked={priority}
              onChange={handlePriorityChange}
            />
          </div>
          <div className="col-md-2">
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