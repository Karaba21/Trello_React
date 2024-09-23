import React, { useState } from "react";
import 'bulma/css/bulma.min.css';

const Board = () => {
    const [columns, setColumns] = useState([
        { id: 1, title: 'To Do', cards: [] },
        { id: 2, title: 'In Progress', cards: [] },
        { id: 3, title: 'Done', cards: [] },
    ]);

    const addCard = (columnId, newCard) => {
        setColumns(columns.map(columns => {
            if (column.id === columnId) {
                return {
                    ...column,
                    cards: [...column.cards, { id: Date.now(), ...newCard}]
                };
            }
            return column;
        }));
    };

    const updatedCard = (columnId, cardId, updateCard) => {
        setColumns(columns.map(column => {
            if (column.id === columnId) {
              return {
                ...column,
                cards: column.cards.map(card => 
                  card.id === cardId ? { ...card, ...updatedCard } : card
                )
              };
            }
            return column;
          }));
    };

    const deleteCard = (columnId, cardId) => {
        setColumns(columns.map(column => {
          if (column.id === columnId) {
            return {
              ...column,
              cards: column.cards.filter(card => card.id !== cardId)
            };
          }
          return column;
        }));
    };

    return (
        <div className="container">
          <h1 className="title is-1 has-text-centered">Trello-like Board</h1>
          <div className="columns is-multiline">
            {columns.map(column => (
              <Column
                key={column.id}
                {...column}
                onAddCard={addCard}
                onUpdateCard={updateCard}
                onDeleteCard={deleteCard}
              />
            ))}
          </div>
        </div>
    );

};

export default Board;