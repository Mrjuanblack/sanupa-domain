export type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };
export type AsyncResult<T, E> = Promise<Result<T, E>>;

export function ok<T, E>(value: T): Result<T, E> {
  return { ok: true, value };
}

export function err<T, E>(error: E): Result<T, E> {
  return { ok: false, error };
}

export async function asyncResult<T, E>(
    generator: () => AsyncGenerator<Result<T, E>, T, T>
  ): AsyncResult<T, E> {
    const iterator = generator();
  
    while (true) {
      const { value, done } = await iterator.next();
  
      if (done) {
        return ok(value); // Final value returned by the generator
      }
  
      if (!value.ok) {
        return value; // Propagate the error
      }
    }
  }