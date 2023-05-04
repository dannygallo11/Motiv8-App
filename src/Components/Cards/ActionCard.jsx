import React, { useState } from 'react';
import ActionItem from '../CardItems/ActionItem';
// import './ActionItem.css';

const ActionCard = () => {
  const [actionItems, setActionItems] = useState([
    { id: 1, status: 'In progress', description: 'Finish React project', priority: true },
    { id: 2, status: 'Not started', description: 'Buy groceries', priority: false },
    { id: 3, status: 'Completed', description: 'Go for a run', priority: false },
  ]);

  const handleDelete = (id) => {
    setActionItems(actionItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      {actionItems.map((item) => (
        <ActionItem
          key={item.id}
          status={item.status}
          description={item.description}
          priority={item.priority}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
};

export default ActionCard;