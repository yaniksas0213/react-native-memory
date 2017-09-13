import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Card from '../Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});

const CardList = ({ cards }) => {
  const columns = 4;
  const cardsDuplicated = [...cards, ...cards];
  const rows = cardsDuplicated.length / columns;
  cardsDuplicated.sort(() => (Math.round(Math.random())));

  const randomColumns = () => {
    const columnsToRender = [];
    for (let c = 0; c < columns; c++) {
      columnsToRender.push(
        <Col key={c}>
          <Card>{cardsDuplicated.pop().label}</Card>
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
    <View style={styles.container}>
      <Grid>
        {rowsToRender}
      </Grid>
    </View>
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
