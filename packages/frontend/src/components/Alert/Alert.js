import PropTypes from 'prop-types';
import { PrimaryButton } from '../Button/Button';
import { StyledAlert, StyledTitle, StyledText } from './Alert.styles';

export default function Alert({ category, onSetShowAlert }) {
  return (
    <StyledAlert>
      <StyledTitle>ALERT</StyledTitle>
      <StyledText>
        Przekroczyłeś limit wydatków w kategorii {category}.
      </StyledText>

      <div onClick={onSetShowAlert}>
        <PrimaryButton className='xxx' text="Potwierdź" isActive={true} alert={true}/>
      </div>
      
    </StyledAlert>
  );
}

Alert.propTypes = {
  category: PropTypes.string.isRequired,
  onSetShowAlert: PropTypes.func,
};
