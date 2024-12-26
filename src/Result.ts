export type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };
export type AsyncResult<T, E> = Promise<Result<T, E>>;

export function ok<T, E>(value: T): Result<T, E> {
    return { ok: true, value };
}

export function err<T, E>(error: E): Result<T, E> {
    return { ok: false, error };
}

// Helper to streamline async chaining without needing to manually check results
export async function asyncChain<T, E>(
    fn: () => AsyncResult<T, E>
): AsyncResult<T, E> {
    const result = await fn()
    return result.ok ? result : err(result.error)
}