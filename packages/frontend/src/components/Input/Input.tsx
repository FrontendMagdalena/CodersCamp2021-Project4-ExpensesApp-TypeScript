/*eslint no-unused-vars:*/
import PropTypes from 'prop-types';
import {
  StyledInput,
  StyledLabel,
  StyledInputGroup,
  StyledInputGroupAttachment,
  StyledInputAttachment,
  StyledInputSelect,
} from './Input.style';
import {forwardRef, FC, ChangeEvent} from 'react';

interface IProps {
    inputLabel?: string,
      type: string,
      placeholder?: string,
      icon?: string,
      name?: string,
      value: string,
      onChange: (e: ChangeEvent<HTMLInputElement>) => void,
      onSearchClick?: () => void,
}

// eslint-disable-next-line react/display-name
export const Input: FC<IProps> = forwardRef(
  (
    {
      name,
      type,
      placeholder,
      inputLabel,
      icon,
      value,
      onChange,
      onSearchClick,
      ...rest
    },
    ref,
  ) => {
    return (
      <>
        <StyledLabel htmlFor={inputLabel}>{inputLabel}</StyledLabel>
        <StyledInputGroup icon>
          <StyledInput
            name={name}
            type={type}
            placeholder={placeholder ? placeholder : ''}
            id={inputLabel}
            value={value}
            onChange={onChange}
            ref={ref}
            {...rest}
          />
          {icon ? (
            type === 'search' ? (
              <button onClick={onSearchClick}></button>
            ) : (
              <button></button>
            )
          ) : (
            ''
          )}
        </StyledInputGroup>
      </>
    );
  },
);

// Input.propTypes = {
//   inputLabel: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
//   icon: PropTypes.string,
//   name: PropTypes.string,
//   value: PropTypes.string,
//   onChange: PropTypes.func,
//   onSearchClick: PropTypes.func,
// };

// TODO REMOVE ANY
export const InputSelect: FC<any> = ({
  placeholder,
  inputLabel,
  value,
  onChange,
  options,
  isClearable,
  onCreateOption,
}) => {
  return (
    <>
      <StyledLabel htmlFor={inputLabel}>{inputLabel}</StyledLabel>
      <StyledInputSelect
        placeholder={placeholder ? placeholder : ''}
        id={inputLabel}
        value={value}
        onChange={onChange}
        options={options}
        isClearable={isClearable}
        onCreateOption={onCreateOption}
      />
    </>
  );
};

InputSelect.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
  options: PropTypes.array,
  isClearable: PropTypes.bool,
  onCreateOption: PropTypes.func,
};
// TODO REMOVE ANY
export const InputAttachment: FC<any> = ({ type, placeholder, inputLabel, icon }) => {
  return (
    <>
      <StyledLabel htmlFor={inputLabel}>{inputLabel}</StyledLabel>
      <StyledInputGroupAttachment icon>
        <StyledInputAttachment
          type={type}
          placeholder={placeholder ? placeholder : ''}
          id={inputLabel}
        />
        {icon ? <button></button> : ''}
      </StyledInputGroupAttachment>
    </>
  );
};

InputAttachment.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
};
