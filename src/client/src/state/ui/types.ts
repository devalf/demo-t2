export type Payload = {
    search: string;
};

export enum Actions {
    setUI = 'SET_UI'
}

export type SetUI = {
    type: Actions.setUI;
    payload: Payload;
};

export type State = {
    search: string;
};
