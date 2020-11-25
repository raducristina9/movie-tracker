import React from 'react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { CheckIcon,AddIcon } from '@chakra-ui/icons';
import { STATUS } from '../utils';
import { HISTORY } from '../connectors/api';

export default function HistoryButton({ movie, status, update }) {
    const toggleHistory = () => {
      update({
        ...movie,
        history: movie.HISTORY === HISTORY.WATCHED ? HISTORY.REMOVED : HISTORY.WATCHED,
      });
    };
  
    const isHistoryActive = movie.history === HISTORY.WATCHED; // we don't care if watchlist is REMOVED or undefined, both means it's not listed
    const label = isHistoryActive ? 'Remove from history' : 'Add to history';
    return (
    <Tooltip label={label}>
       <IconButton
            aria-label={isHistoryActive ? 'Remove from history' : 'Add to history'}
            icon={isHistoryActive ? <CheckIcon /> : <AddIcon />}
            colorScheme="teal"
            variant={isHistoryActive ? 'solid' : 'outline'}
            isLoading={status === STATUS.PENDING}
            onClick={toggleHistory}
          />
    </Tooltip>
  );
}
