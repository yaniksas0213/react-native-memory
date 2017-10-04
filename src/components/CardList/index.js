import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Card from '../Card';

const CardList = ({ cards, onFlip, rows, columns }) => {
  let cardIndex = 0;

  const randomColumns = () => {
    const columnsToRender = [];
    for (let c = 0; c < columns; c++) {
      const card = cards[cardIndex];
      cardIndex++;
      columnsToRender.push(
        <Col key={c}>
          <Card onFlip={onFlip} card={card}>{card.image}</Card>
        </Col>,
      );
    }
    return columnsToRender;
  };

  const rowsToRender = [];
  for (let i = 0; i < rows; i++) {
    rowsToRender.push(
      <Row key={i}>{randomColumns()}</Row>,
    );
  }

  return (
    <Grid>{rowsToRender}</Grid>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.label,
    }),
  ).isRequired,
  onFlip: PropTypes.func.isRequired,
};

export default CardList;
