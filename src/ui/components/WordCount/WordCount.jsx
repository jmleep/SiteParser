import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import styles from './WordCount.css';

const WordCount = ({ wordList }) => {
    return (
        <React.Fragment>
            {wordList.length > 0 && <Chip label={`${wordList.length} words found`} style={{ marginBottom: '3px' }} />}
            <Paper>
                <div className={styles.table}>
                    {wordList.length > 0 ?
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Word</TableCell>
                                    <TableCell align="left">Occurences</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {wordList.map(({word, count}) => (
                                    <TableRow key={word}>
                                        <TableCell component="th" scope="row">{word}</TableCell>
                                        <TableCell align="left">{count}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    : <ErrorView text="No images found.." />
                    }
                </div>
            </Paper>
        </React.Fragment>
    );
}

export default WordCount;
