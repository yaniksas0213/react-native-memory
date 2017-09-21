import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Card from '../Card';

const CardList = ({ cards }) => {
  const cardsDuplicated = [...cards, ...cards];
  const columns = Math.ceil(Math.sqrt(cardsDuplicated.length));
  const rows = cardsDuplicated.length / columns;
  cardsDuplicated.sort(() => (Math.round(Math.random())));

  const randomColumns = () => {
    const columnsToRender = [];
    for (let c = 0; c < columns; c++) {
      columnsToRender.push(
        <Col key={c}>
          <Card>{cardsDuplicated.pop().image}</Card>
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
};

export default CardList;
