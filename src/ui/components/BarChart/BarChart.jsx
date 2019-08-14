import React from 'react';
import PropTypes from 'prop-types';
import { HorizontalBar } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

const BarChart = ({ words = [] }) => {
  const top10Words = words.slice(0, 10);
  const data = {
    labels: top10Words.map(word => word.word),
    datasets: [
      {
        label: 'Count',
        backgroundColor: 'rgba(24,68,128,0.6)',
        borderColor: 'rgba(12,34,64,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(24,68,128,0.9)',
        hoverBorderColor: 'rgba(12,34,64,1)',
        data: top10Words.map(word => word.count)
      }
    ]
  };

  return (
    <div>
      {words.length > 0 && (
        <Chip
          label={`${words.length} words found`}
          style={{ marginBottom: '3px', tableLayout: 'auto' }}
        />
      )}
      <Paper>
        <HorizontalBar
          data={data}
          width={500}
          options={{ title: { display: true, text: 'Top 10 Words' } }}
          height={500}
        />
      </Paper>
    </div>
  );
};

BarChart.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({ word: PropTypes.string, count: PropTypes.number }))
    .isRequired
};

export default BarChart;
