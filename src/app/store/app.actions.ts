import { createAction, props } from "@ngrx/store";
import { Person } from "../app.model";

export const ADD_KNOWN_PERSON: string = 'ADD_KNOWN_PERSON';
export const ADD_UNKNOWN_PEOPLE: string = 'ADD_UNKNOWN_PEOPLE';
export const MOVE_TO_UNKNOWN: string = 'MOVE_TO_UNKNOWN';
export const MOVE_TO_KNOWN: string = 'MOVE_TO_KNOWN';

export const addKnownPersonAction = createAction(ADD_KNOWN_PERSON, props<{ payload: Person }>());
export const addUnKnownPeoplenAction = createAction(ADD_UNKNOWN_PEOPLE, props<{ payload: Person[] }>());
export const moveToKnown = createAction(MOVE_TO_KNOWN, props<{ payload: Person }>());
export const moveToUnknown = createAction(MOVE_TO_UNKNOWN, props<{ payload: Person }>());
export const selectPerson = createAction('SELECT', props<{ payload: Person }>());
export const unselectPerson = createAction('UNSELECT');