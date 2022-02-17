import { Action } from "@ngrx/store";
import { Person } from "./app.model";

export const ADD_KNOWN_PERSON: string = 'ADD_KNOWN_PERSON';
export const MOVE_TO_UNKNOWN: string = 'MOVE_TO_UNKNOWN';
export const MOVE_TO_KNOWN: string = 'MOVE_TO_KNOWN';

export class AddKnownPersonAction implements Action {
    public readonly type = ADD_KNOWN_PERSON;

    public constructor(public person: Person) { }
}

export class MoveToUnknown implements Action {
    public readonly type = MOVE_TO_UNKNOWN;

    public constructor(public person: Person) { }
}

export class MoveToknown implements Action {
    public readonly type = MOVE_TO_KNOWN;

    public constructor(public person: Person) { }
}

export type AppActions = AddKnownPersonAction | MoveToUnknown | MoveToknown;