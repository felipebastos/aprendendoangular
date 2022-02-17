import * as AppActions from "./app.actions";
import { Person } from "./app.model";


export interface State {
    knownpeople: Person[],
    unknownpeople: Person[],
};

export const initialState: State = {
    knownpeople: [],
    unknownpeople: [],
}

export function appReducer(state = initialState, action: AppActions.AppActions) {
    switch (action.type) {
        case AppActions.ADD_KNOWN_PERSON:
            return {
                ...state,
                knownpeople: [...state.knownpeople, action.person],
            };
        case AppActions.MOVE_TO_UNKNOWN:
            return {
                ...state,
                knownpeople: [...state.knownpeople.filter((value: Person) => { return value.name != action.person.name })],
                unknownpeople: [...state.unknownpeople, action.person],
            };
        case AppActions.MOVE_TO_KNOWN:
            return {
                ...state,
                unknownpeople: [...state.unknownpeople.filter((value: Person) => { return value.name != action.person.name })],
                knownpeople: [...state.knownpeople, action.person],
            }
        default:
            return state;
    }
}