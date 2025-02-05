import {createRequire} from 'module';
const require = createRequire(import.meta.url);
export const READJSON = (path) => require(path);