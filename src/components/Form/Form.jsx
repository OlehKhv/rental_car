import Select from "react-select";
import {
    CatalogForm,
    InputFrom,
    InputTo,
    LabelSelect,
    SearchBtnSpan,
    SearchButton,
} from "./Form.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMakes } from "../../redux/catalog/selectors";
import { getAdverts } from "../../redux/catalog/thunks";

export const Form = () => {
    const dispatch = useDispatch();

    const makes = useSelector(selectMakes);
    const stylesSelectMakes = {
        control: (styles) => ({
            ...styles,
            display: "flex",
            alignContent: "center",
            backgroundColor: "#f7f7fb",
            width: 224,
            height: 48,
            borderRadius: 14,
            padding: "14px 14px 14px 18px",
        }),
        option: (styles) => ({ ...styles, color: "red" }),
        input: (styles) => ({ ...styles }),
        placeholder: (styles) => ({ ...styles }),
        singleValue: (styles) => ({ ...styles }),
    };
    const stylesSelectPrice = {
        control: (styles) => ({
            ...styles,
            display: "flex",
            alignContent: "center",
            backgroundColor: "#f7f7fb",
            width: 125,
            height: 48,
            borderRadius: 14,
            padding: "14px 14px 14px 18px",
        }),
        option: (styles) => ({ ...styles, color: "red" }),
        input: (styles) => ({ ...styles }),
        placeholder: (styles) => ({ ...styles }),
        singleValue: (styles) => ({ ...styles }),
    };

    const optionsMakes = makes.map((car) => {
        return { value: car, label: car };
    });
    const optionPrice = [
        { value: 10, label: 10 },
        { value: 20, label: 20 },
        { value: 30, label: 30 },
        { value: 40, label: 40 },
        { value: 50, label: 50 },
        { value: 60, label: 60 },
        { value: 70, label: 70 },
        { value: 80, label: 80 },
    ];

    const handleChange = (selectedOption, { action }) => {
        if (action === "clear") {
            dispatch(getAdverts({ page: 1, limit: 12 }));
            return;
        }
        const { value } = selectedOption;
        dispatch(getAdverts({ make: value }));
    };

    return (
        <CatalogForm>
            <LabelSelect>
                Car brand
                <Select
                    options={optionsMakes}
                    styles={stylesSelectMakes}
                    placeholder="Enter the text"
                    isClearable={true}
                    onChange={handleChange}
                />
            </LabelSelect>
            <LabelSelect>
                Price/ 1 hour
                <Select
                    options={optionPrice}
                    styles={stylesSelectPrice}
                    placeholder="To $"
                />
            </LabelSelect>
            <LabelSelect>
                Car mileage / km
                <InputFrom placeholder="From" />
            </LabelSelect>
            <InputTo placeholder="To" />
            <SearchButton>
                <SearchBtnSpan>Search</SearchBtnSpan>
            </SearchButton>
        </CatalogForm>
    );
};
