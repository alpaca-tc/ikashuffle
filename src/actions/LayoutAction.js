const { SHUFFLE_WEAPONS } = require('../constants/Constants');

function shuffleWeapons() {
  return (dispatch, state) => {
    let interval =setInterval(() => {
      dispatch({
        type: SHUFFLE_WEAPONS,
        length: 6
      });
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
    }, 4000);
  };
}

module.exports = {
  shuffleWeapons
};
