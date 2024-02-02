export const handleFetchAllFulfilled = (state, { payload }) => {
    state.items = payload;
};
