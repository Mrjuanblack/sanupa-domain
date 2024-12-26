export type RequestResult<T> = {
    ok: true;
    value: T;
} | {
    ok: false;
    message: string;
    code: string;
};
