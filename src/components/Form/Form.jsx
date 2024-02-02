import { CatalogForm } from "./Form.styled";

export const Form = () => {
    return (
        <CatalogForm>
            <label htmlFor="">Car brand</label>
            <select />
            <label htmlFor="">Price/ 1 hour</label>
            <select />
            <label htmlFor="">Car mileage / km</label>
            <input />
            <input />
            <button>Search</button>
        </CatalogForm>
    );
};
