import * as AppActions from "./app.actions";
import { Person } from "../app.model";
import { createReducer, on } from "@ngrx/store";


export interface State {
    knownpeople: Person[],
    unknownpeople: Person[],
    selectedPerson: Person,
};

export const initialState: State = {
    knownpeople: [],
    unknownpeople: [],
    selectedPerson: null,
}

export const appReducer = createReducer(
    initialState,
    on(AppActions.addKnownPersonAction, (state, action) => ({
        ...state,
        knownpeople: [...state.knownpeople, action.payload],
    })),
    on(AppActions.addUnKnownPeoplenAction, (state, action) => ({
        ...state,
        unknownpeople: [...action.payload, ...state.unknownpeople],
    })),
    on(AppActions.moveToUnknown, (state, action) => ({
        ...state,
        knownpeople: [...state.knownpeople.filter((value: Person) => { return value.name != action.payload.name })],
        unknownpeople: [...state.unknownpeople, action.payload],
    })),
    on(AppActions.moveToKnown, (state, action) => ({
        ...state,
        unknownpeople: [...state.unknownpeople.filter((value: Person) => { return value.name != action.payload.name })],
        knownpeople: [...state.knownpeople, action.payload],
    })),
    on(AppActions.selectPerson, (state, action) => ({
        ...state,
        selectedPerson: action.payload
    })),
    on(AppActions.unselectPerson, state => ({
        ...state,
        selectedPerson: null
    })),
);
