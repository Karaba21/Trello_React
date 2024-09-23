import React, { useState } from "react";
import 'bulma/css/bulma.min.css';

const Card = ({ id, title, description, assignedTo, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);
    const [editDescription, setEditDescription] = useState(description);
    const [editAssignedTo, setAssignedTo] = useState(assignedTo);

    const handleSave = () => {
        onUpdate(id, {title: editTitle, description: editDescription, assignedTo: editAssignedTo});
        setIsEditing(false);
    }

    if (isEditing){
        return (
            <div className="card mb-3">
        <div className="card-content">
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Assigned To</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={editAssignedTo}
                onChange={(e) => setEditAssignedTo(e.target.value)}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary" onClick={handleSave}>Save</button>
            </div>
            <div className="control">
              <button className="button" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
        );
    }
};

export default Card;