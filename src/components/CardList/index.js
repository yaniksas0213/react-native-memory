import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Modal from 'react-native-modal';
import { Button } from 'react-native';

import Card from '../Card';

const CardList = ({ cards, onFlip, rows, columns, win, resetGame }) => {
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
    <Grid>
      <Row>
        <Modal isVisible={win}>
          <Grid>
            <Col>
              <Button
                title="Play Again"
                onPress={() => resetGame()}
              />
            </Col>
          </Grid>
        </Modal>
      </Row>
      {rowsToRender}
    </Grid>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.label,
    }),
  ).isRequired,
  onFlip: PropTypes.func.isRequired,
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  win: PropTypes.bool.isRequired,
};

export default CardList;
