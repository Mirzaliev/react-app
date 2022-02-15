import tokens, { CSSTokenMap } from "./token-names";

type Tokens =  typeof tokens;

const name = process.env._PACKAGE_NAME_ as string;
const version = process.env._PACKAGE_VERSION_ as string;

function token<T extends keyof Tokens>
(path: T, fallback?: string): CSSTokenMap[T] {


  let cssVariable: Tokens[keyof Tokens] = tokens[path];

  if(process.env.production !== 'production' && !cssVariable) {

    console.error(`Unknown token id at path: ${path} for ${name}@${version}`);
    cssVariable = tokens['utility.UNSAFE_util.MISSING_TOKEN'];

  }

  const tokenCall = fallback ? `var(${cssVariable}, ${fallback})` : `var(${cssVariable})`;

  return tokenCall as CSSTokenMap[T];
}

export default token;
