import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import ErrorView from '../ErrorView/ErrorView';
import styles from './WordCountTable.css';

/**
 * The WordCountTable returns a material-ui table which contains all of the
 * words parsed by the service and returned in the body of the searched for website.
 *
 * The words are iterated over and set as rows in the table with their name and their
 * count as column entries.
 */
const WordCountTable = ({ words }) => (
  <React.Fragment>
    {words.length > 0 && (
      <Chip
        data-testid="chip"
        label={`${words.length} words found`}
        style={{ marginBottom: '3px', tableLayout: 'auto' }}
      />
    )}
    <Paper>
      <div className={styles.table}>
        {words.length > 0 ? (
          <div data-testid="table">
            <Table style={{ width: '500px' }}>
              <TableHead>
                <TableRow>
                  <TableCell>Word</TableCell>
                  <TableCell align="left">Occurences</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {words.map(({ word, count }) => (
                  <TableRow key={word}>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ whiteSpace: 'normal', wordWrap: 'break-word', maxWidth: '250px' }}
                    >
                      {word}
                    </TableCell>
                    <TableCell align="left">{count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <ErrorView data-testid="error" text="No images found.." />
        )}
      </div>
    </Paper>
  </React.Fragment>
);

WordCountTable.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({ word: PropTypes.string.isRequired, count: PropTypes.number.isRequired })
  ).isRequired
};

export default WordCountTable;
