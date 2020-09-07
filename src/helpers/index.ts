/**
 * function for generate unique id.
 * @returns unique id. Example: 'f56cba26'
 */
export const genereateID = () => `f${(~~(Math.random() * 1e8)).toString(16)}`;