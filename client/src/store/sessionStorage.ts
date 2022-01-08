
export function saveState<State>(state: State, key: string) {
    try {
        const serialized = JSON.stringify(state);
        sessionStorage.setItem(key, serialized);
    }
    catch {

    }
}

export function clearState(key: string) {
    sessionStorage.removeItem(key);
}

export function getState<State>(key: string): State | undefined {
    try {
        const serialized = sessionStorage.getItem(key);
        if (!serialized) {
            return undefined;
        }
        const state = JSON.parse(serialized);
        return state as State;
    }
    catch {
        return undefined;
    }
}