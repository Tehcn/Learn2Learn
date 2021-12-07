class MemoryError extends Error {
    constructor(err: Error) {
        super();
        console.error(err);
    }
}

export { MemoryError };
export default MemoryError;