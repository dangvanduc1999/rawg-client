import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import GamesRendered from './GamesRendered';
import Loading from './Loading';
import withInfiniteScroll from './HOCs/withInfiniteScroll';
import HeaderGenres from './HeaderGenres';

const propTypes = {
  loading: PropTypes.bool.isRequired,
  games: PropTypes.array,
  fetchGames: PropTypes.func.isRequired
};

const defaultProps = {};

const Games = ({ loading, games, fetchGames }) => {
  useEffect(() => {
    fetchGames('/games', 'GET');
  }, [fetchGames]);

  return (
    <div style={{ margin: '2rem 0 12rem 0' }}>
      <HeaderGenres />
      <GamesRendered games={games} />
      <Loading
        loading={loading}
        style={{ marginTop: '2rem' }}
        className="u-text-center"
      />
    </div>
  );
};

Games.propTypes = propTypes;
Games.defaultProps = defaultProps;

export default withInfiniteScroll(Games, 400);
