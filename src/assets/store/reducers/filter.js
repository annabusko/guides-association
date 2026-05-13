const initialState = {
    searchQuery: '',
    filterLang: { value: [""] },
    filterCity: { value: [""] }
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_QUERY':
            return {
                ...state,
                searchQuery: action.payload

            };
        case 'SET_FILTER_L':
            return {
                ...state,
                filterLang: action.payload
            };
        case 'SET_FILTER_C':
            return {
                ...state,
                filterCity: action.payload
            };
        default:
            return state;
    }

}