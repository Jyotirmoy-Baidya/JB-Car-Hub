import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: String;
    btnType?: 'button' | 'submit';
    //Question marks means it is optional
    containerStyles?: String;
    rightIcon?: string;
    textStyles?: string;
    isDisable?: boolean
    //Mouse event handler with html button element
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}


export interface OptionProps {
    title: string,
    value: string
}

export interface CustomFilterProps<T> {
    options: OptionProps[];
    setFilter: (selected: T) => void;
}

export interface SearchBarProps {
    setManufacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;
}

export interface SearchManufacturerProps {
    selected: String;
    setSelected: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface carDetailsProps {
    isOpen: boolean;
    closeModel: () => void;
    car: CarProps;
}

export interface FilterProps {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface showMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
}