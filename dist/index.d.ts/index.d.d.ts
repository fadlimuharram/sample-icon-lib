import React, { HTMLInputTypeAttribute } from 'react';
import { SingleValue } from 'react-select';

interface ButtonProps {
    type?: 'primary' | 'secondary' | 'plain';
    variant?: 'positive' | 'negative' | 'neutral';
    loading?: boolean;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    icon?: React.ReactNode;
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;

declare type CheckboxOptionType = {
    name: string;
    value: string;
    children?: React.ReactNode;
};
declare type CheckboxProps = {
    name?: string;
    label?: string;
    labelClass?: string;
    option?: CheckboxOptionType;
    description?: string;
    defaultValue?: boolean;
    value?: boolean;
    disabled?: boolean;
    onClick?: React.ChangeEventHandler<HTMLInputElement>;
    required?: boolean;
};
declare const Checkbox: React.FC<CheckboxProps>;

declare type CheckboxGroupProps = {
    name?: string;
    label?: string;
    labelClass?: string;
    options: CheckboxOptionType[];
    description?: string;
    defaultValues?: {
        [key: string]: string;
    };
    disabled?: boolean;
    required?: boolean;
    error?: string;
};
declare const CheckboxGroup: React.FC<CheckboxGroupProps>;

declare type ChipProps = {
    text: string;
    color?: 'green' | 'orange' | 'grey';
    prefix?: string;
};
declare const Chip: React.FC<ChipProps>;

declare type RadioOptionType = {
    name: string;
    value: string;
    children?: React.ReactNode;
};
declare type RadioProps = {
    option: RadioOptionType;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const Radio: React.FC<RadioProps>;

declare type RadioGroupProps = {
    label?: string;
    labelClass?: string;
    options: RadioOptionType[];
    defaultValue?: string;
    disabled?: boolean;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    resetText?: string;
};
declare const RadioGroup: React.FC<RadioGroupProps>;

declare type SelectOption = {
    value: string;
    label: string;
};
declare type SelectItemProps = {
    name: string;
    className?: string;
    label?: string;
    options?: SelectOption[];
    placeholder?: string;
    labelClass?: string;
    onChange?: (opt: SingleValue<SelectOption>) => void;
    value?: SelectOption;
    defaultValue?: SelectOption;
    searchable?: boolean;
    clearable?: boolean;
    required?: boolean;
    error?: string;
};
declare const SelectItem: React.FC<SelectItemProps>;

declare type SelectInputProps = {
    name: string;
    className?: string;
    label?: string;
    labelClass?: string;
    options?: SelectOption[];
    placeholder?: string;
    inputPlaceholder?: string;
    onSelectChange?: (opt: SingleValue<SelectOption>) => void;
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectDefaultValue?: SelectOption;
    selectValue?: SelectOption;
    inputDefaultValue?: string;
    inputValue?: string;
    inputType?: HTMLInputTypeAttribute;
    inputMin?: number;
    inputMax?: number;
    searchable?: boolean;
    required?: boolean;
    disabled?: boolean;
    disabledSelect?: boolean;
    reverse?: boolean;
    error?: string;
};
declare const SelectInput: React.FC<SelectInputProps>;

declare type SwitchOptionType = {
    name: string;
    children?: React.ReactNode;
};
declare type SwitchProps = {
    label?: string;
    name?: string;
    option: SwitchOptionType;
    labelClass?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    error?: string;
};
declare const Switch: React.FC<SwitchProps>;

declare type TableRowItem = {
    [key: string]: string | React.ReactNode;
};
declare type HeaderItem = {
    title: string;
    name: string;
    key: string;
    width: number;
    show_title: boolean;
    show_on_hover: boolean;
};
declare type TableStructure = {
    header: HeaderItem[];
};
declare type TableProps = {
    structure: TableStructure;
    loading?: boolean;
    rows: TableRowItem[];
    clickableRow?: boolean;
    size?: 'default' | 'small';
    onClick?: (row: TableRowItem) => void;
    emptyText?: string;
};

declare const Table: React.FC<TableProps>;

declare type TextAreaProps = {
    name?: string;
    label?: string;
    placeholder?: string;
    labelClass?: string;
    description?: string;
    defaultValue?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
    error?: string;
};
declare const TextArea: React.FC<TextAreaProps>;

declare type TextFieldProps = {
    name?: string;
    label?: string;
    placeholder?: string;
    className?: string;
    labelClass?: string;
    description?: string;
    defaultValue?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: HTMLInputTypeAttribute;
    min?: number;
    max?: number;
    required?: boolean;
    error?: string;
};
declare const TextField: React.FC<TextFieldProps>;

export { Button, Checkbox, CheckboxGroup, Chip, Radio, RadioGroup, SelectInput, SelectItem, Switch, Table, TextArea, TextField };
