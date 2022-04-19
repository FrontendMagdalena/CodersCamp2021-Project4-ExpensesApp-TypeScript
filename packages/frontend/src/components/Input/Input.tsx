/*eslint no-unused-vars:*/
import {
    StyledInput,
    StyledLabel,
    StyledInputGroup,
    StyledInputGroupAttachment,
    StyledInputAttachment,
    StyledInputSelect,
} from './Input.style';
import {forwardRef, FC, ChangeEvent, ForwardedRef} from 'react';

export interface IInputProps {
    inputLabel?: string,
    type: string,
    placeholder?: string,
    icon?: string,
    name?: string,
    value?: string | number | null
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onSearchClick?: () => void,
}

interface IValueLabel {
    value: string,
    label: string
}

interface IInputSelect {
    inputLabel: string,
    placeholder?: string,
    value: IValueLabel,
    onChange: (data: IValueLabel) => void,
    options: { value: string, label: string, color?: string }[],
    isClearable?: boolean,
    onCreateOption?: (inputValue: []) => void,
}

interface IInputAttachment {
    inputLabel: string,
    type: string,
    placeholder?: string,
    icon?: string,
}

// eslint-disable-next-line react/display-name
//any on purpose because I couldn't make it works properly
export const Input: FC<any> = forwardRef(
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
                            <button onClick={onSearchClick}/>
                        ) : (
                            <button/>
                        )
                    ) : (
                        ''
                    )}
                </StyledInputGroup>
            </>
        );
    },
);
//any on purpose because I couldn't make it works properly
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

export const InputAttachment: FC<IInputAttachment> = ({type, placeholder, inputLabel, icon}) => {
    return (
        <>
            <StyledLabel htmlFor={inputLabel}>{inputLabel}</StyledLabel>
            <StyledInputGroupAttachment icon>
                <StyledInputAttachment
                    type={type}
                    placeholder={placeholder ? placeholder : ''}
                    id={inputLabel}
                />
                {icon ? <button/> : ''}
            </StyledInputGroupAttachment>
        </>
    );
};


