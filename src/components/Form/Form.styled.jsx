import styled from "styled-components";

export const CatalogForm = styled.form`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`;

export const FieldInput = styled.div`
    display: flex;
`;

export const LabelSelect = styled.label`
    color: #8a8a89;
`;

export const LabelInput = styled.label`
    display: flex;
    flex-direction: column;
    color: #8a8a89;
`;

export const InputFrom = styled.input`
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    border-radius: 14px 0 0 14px;
    width: 160px;
    height: 48px;
    background-color: #f7f7fb;
    padding: 14px 24px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11111;
    color: #121417;
    &::placeholder {
        font-weight: 500;
        font-size: 18px;
        line-height: 1.11111;
        color: #121417;
    }
`;

export const InputTo = styled.input`
    border-radius: 0 14px 14px 0;
    width: 160px;
    height: 48px;
    background-color: #f7f7fb;
    padding: 14px 24px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11111;
    color: #121417;
    margin-right: 18px;
    &::placeholder {
        font-weight: 500;
        font-size: 18px;
        line-height: 1.11111;
        color: #121417;
    }
`;

export const SearchButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    width: 136px;
    height: 48px;
    background-color: #3470ff;
    border: none;
    &:is(:hover, :focus) {
        background-color: #0b44cd;
    }
`;

export const SearchBtnSpan = styled.span`
    font-weight: 600;
    font-size: 14px;
    line-height: 1.42857;
    color: #fff;
`;
