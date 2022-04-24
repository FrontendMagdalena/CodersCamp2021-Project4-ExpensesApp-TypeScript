import { PrimaryButton } from '../Button/Button';
import { StyledAlert, StyledTitle, StyledText } from './Alert.styles';

interface IAlert {
    category: string,
    onSetShowAlert: () => void,
};

export default function Alert({ category, onSetShowAlert }: IAlert) {
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
