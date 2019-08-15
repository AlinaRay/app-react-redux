const ACTION_TYPE_START_LOADING = 'START_LOADING';
const ACTION_TYPE_FINISH_LOADING = 'FINISH_LOADING';

export const createStartLoadingAction = () => {
    return {
        type: ACTION_TYPE_START_LOADING,
    };
};

export const createFinishLoadingAction = () => {
    return {
        type: ACTION_TYPE_FINISH_LOADING,
    };
};

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case ACTION_TYPE_START_LOADING:
            return true;
        case ACTION_TYPE_FINISH_LOADING:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;