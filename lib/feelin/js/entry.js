import { evaluate, unaryTest, parseExpression, parseUnaryTests, SyntaxError } from 'feelin';

export * from 'feelin';

// The JSON boundary of the Ruby wrapper: everything below takes its context as a JSON string and answers
// with one, so no value is marshalled between Ruby and V8 element by element, and no script is compiled
// per call — a call is a function call, whatever the data.

// feelin keeps its own syntax error reporting private, and parseExpression / parseUnaryTests answer with a
// tree that has error nodes in it instead of throwing. Same messages and positions as evaluate() gives.
function syntaxError(input, node) {
  const parent = node.parent;

  let message, position = { from: node.from, to: node.to };

  if (node.from !== node.to) {
    message = `Unrecognized token in <${parent.name}>`;
  } else {
    let next = null;

    for (let current = node; current && !next; current = current.parent) {
      next = current.nextSibling;
    }

    if (next) {
      message = `Unrecognized token <${next.name}> in <${parent.name}>`;
      position = { from: next.from, to: next.to };
    } else {
      message = `Incomplete <${(parent.enterUnfinishedNodesBefore(node.to) || parent).name}>`;
    }
  }

  return new SyntaxError(message, { input: input.slice(position.from, position.to), position });
}

// The lezer tree as plain data, every node of it, tokens included: `type` is the grammar's name for the
// node, `from` / `to` its span in the input (in UTF-16 code units, as JavaScript counts), `text` that span.
function toAst(tree, input) {
  const build = (node) => {
    if (node.type.isError) {
      throw syntaxError(input, node);
    }

    const children = [];

    for (let child = node.firstChild; child; child = child.nextSibling) {
      children.push(build(child));
    }

    return { type: node.name, from: node.from, to: node.to, text: input.slice(node.from, node.to), children };
  };

  return build(tree.topNode);
}

// A FEEL date, time or duration is a luxon object, and what luxon gives it in JSON is not FEEL's form (a
// date becomes a date-time at midnight, a time gets a date of 1900-01-01 and the zone of the machine). So
// it is replaced by FEEL's own string of it — what `string(value)` answers, ISO 8601. JSON.stringify hands
// a replacer the value AFTER its toJSON, hence the look at the holder.
function replacer(key, value) {
  const raw = this[key];

  if (raw && (raw.isLuxonDateTime || raw.isLuxonDuration)) {
    return evaluate('string(v)', { v: raw }).value;
  }

  return value;
}

const toJson = (value) => JSON.stringify(value === undefined ? null : value, replacer);

// Custom functions, by name. Each forwards to the global the Ruby side attached under that name; the
// `(...args)` forwarder is deliberate: feelin reads a function's source to learn its parameters, so a bare
// reference to the (native) attached global would be seen as taking no arguments.
const functions = {};
let hasFunctions = false;

function readContext(contextJson) {
  const context = (contextJson == null ? null : JSON.parse(contextJson)) || {};

  return hasFunctions ? Object.assign(context, functions) : context;
}

export const json = {
  evaluate: (expression, contextJson) => toJson(evaluate(expression, readContext(contextJson)).value),
  unaryTest: (expression, contextJson) => toJson(unaryTest(expression, readContext(contextJson)).value),
  parseExpression: (expression, contextJson) => JSON.stringify(toAst(parseExpression(expression, readContext(contextJson)), expression)),
  parseUnaryTests: (expression, contextJson) => JSON.stringify(toAst(parseUnaryTests(expression, readContext(contextJson)), expression)),
  addFunction: (name) => {
    functions[name] = function(...args) { return globalThis[name](...args); };
    hasFunctions = true;
  }
};
