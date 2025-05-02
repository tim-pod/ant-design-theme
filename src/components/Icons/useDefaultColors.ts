import colors from '../../theme/colors';

const useDefaultColors = () => {
  return {
    filled: {
      color: colors.neutrals[400],
    },
    outline: {
      color: colors.neutrals[800],
    },
  };
};

export default useDefaultColors;
