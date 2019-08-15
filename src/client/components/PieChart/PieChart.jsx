import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import ErrorView from '../ErrorView/ErrorView';

const PieChart = ({ words = [] }) => {
  const colors = [
    '#0C2240',
    '#0C6980',
    '#264D60',
    '#00A8A8',
    '#70C4C0',
    '#798DA0',
    '#C4DBE0',
    '#3f51b5',
    '#2EB5E0',
    '#697ef4'
  ];

  const top10Words = words.slice(0, 10);
  const data = {
    labels: top10Words.map(word => word.word),
    datasets: [
      {
        data: top10Words.map(word => word.count),
        backgroundColor: colors,
        hoverBackgroundColor: colors
      }
    ]
  };

  return (
    <div>
      {words.length > 0 && (
        <Chip
          data-testid="chip"
          label={`${words.length} words found`}
          style={{ marginBottom: '3px', tableLayout: 'auto' }}
        />
      )}
      <Paper>
        {words.length > 0 ? (
          <div data-testid="pie">
            <Pie
              data={data}
              options={{ title: { display: true, text: 'Top 10 Words' } }}
              width={500}
              height={500}
            />
          </div>
        ) : (
          <ErrorView text="No words found.." />
        )}
      </Paper>
    </div>
  );
};

PieChart.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({ word: PropTypes.string, count: PropTypes.number }))
};

PieChart.defaultProps = {
  words: []
};

export default PieChart;
