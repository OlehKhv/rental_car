export const handleGetAdvertsFulfilled = (state, { payload }) => {
    if (state.page > 1) {
        state.adverts.push(...payload);
        return;
    }

    state.adverts = payload;
};

export const handleGetMakesFulfilled = (state, { payload }) => {
    state.makes = payload;
};

export const handleGetAllAdvertsFulfilled = (state, { payload }) => {
    state.totalPages = Math.ceil(payload.length / state.limit);
};
