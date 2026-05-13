export const setSearchQuery = value => ({
    type:'SET_QUERY',
    payload:value
});

export const setFilterLang = filter => ({
    type:'SET_FILTER_L',
    payload:filter
});

export const setFilterCity = filter => ({
    type:'SET_FILTER_C',
    payload:filter
});