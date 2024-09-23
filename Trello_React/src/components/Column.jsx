import React from "react";
import { Droppable } from '@atlaskit/dnd';
import Card from './Card';
import 'bulma/css/bulma.min.css';

const Column = ({ id, title, description, assignedTo, onUpdate, onDelete }) => {
    const [newCardTitle, setNewCardTitle] = useState('');

  const handleAddCard = () => {
    if (newCardTitle.trim() === '') return;
    onAddCard(id, { title: newCardTitle, description: '', assignedTo: '' });
    setNewCardTitle('');
    };

    return (
        <div className="column is-one-third">
          <div className="box">
            <h2 className="title is-4">{title}</h2>
            {cards.map(card => (
              <Card
                key={card.id}
                {...card}
                onUpdate={(cardId, updatedCard) => onUpdateCard(id, cardId, updatedCard)}
                onDelete={(cardId) => onDeleteCard(id, cardId)}
              />
            ))}
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="New card title"
                  value={newCardTitle}
                  onChange={(e) => setNewCardTitle(e.target.value)}
                />
              </div>
            </div>
            <button className="button is-primary" onClick={handleAddCard}>
              Add Card
            </button>
          </div>
        </div>
      );
};

