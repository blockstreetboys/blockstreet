import CodeMirror from 'codemirror';

CodeMirror.defineMode("solidity", function(/* config, parserConfig */) {
	const types = [
		'address',
		'bool',
		'string',
		'var',
		'int',
		'int8', 'int16', 'int24', 'int32',
		'int40', 'int48', 'int56', 'int64',
		'int72', 'int80', 'int88', 'int96',
		'int104', 'int112', 'int120', 'int128',
		'int136', 'int144', 'int152', 'int160',
		'int168', 'int176', 'int184', 'int192',
		'int200', 'int208', 'int216', 'int224',
		'int232', 'int240', 'int248', 'int256',
		'uint',
		'uint8', 'uint16', 'uint24', 'uint32',
		'uint40', 'uint48', 'uint56', 'uint64',
		'uint72', 'uint80', 'uint88', 'uint96',
		'uint104', 'uint112', 'uint120', 'uint128',
		'uint136', 'uint144', 'uint152', 'uint160',
		'uint168', 'uint176', 'uint184', 'uint192',
		'uint200', 'uint208', 'uint216', 'uint224',
		'uint232', 'uint240', 'uint248', 'uint256',
		'byte',
		'bytes',
		'bytes1', 'bytes2', 'bytes3', 'bytes4',
		'bytes5', 'bytes6', 'bytes7', 'bytes8',
		'bytes9', 'bytes10', 'bytes11', 'bytes12',
		'bytes13', 'bytes14', 'bytes15', 'bytes16',
		'bytes17', 'bytes18', 'bytes19', 'bytes20',
		'bytes21', 'bytes22', 'bytes23', 'bytes24',
		'bytes25', 'bytes26', 'bytes27', 'bytes28',
		'bytes29', 'bytes30', 'bytes31', 'bytes32',
		'wei',
		'szabo',
		'finney',
		'ether',
		'seconds',
		'minutes',
		'hours',
		'days',
		'weeks',
		'years',
	];
	const keywords = [
		'anonymous',
		'as',
		'constant',
		'else',
		'event',
		'external',
		'for',
		'from',
		'if',
		'import',
		'indexed',
		'internal',
		'memory',
		'new',
		'payable',
		'pragma',
		'private',
		'public',
		'pure',
		'require',
		'return',
		'returns',
		'storage',
		'this',
		'view',
		'while',
	];
	const typesPattern = new RegExp("(" + types.join('|') + ")\\b");
	const keywordsPattern = new RegExp("(" + keywords.join('|') + ")\\b");

	return {
		startState: function() {
			return {
				blockDeclaration: false,
				variableDeclaration: false,
				structVariableDeclaration: false,
				insideComment: false,
			};
		},
		copyState: function(s) {
			return {
				blockDeclaration: s.blockDeclaration,
				variableDeclaration: s.variableDeclaration,
				structVariableDeclaration: s.structVariableDeclaration,
				insideComment: s.insideComment,
			};
		},
		token: function(stream, state) {
			if(stream.match(/\/\*/)) {
				state.insideComment = true;
				return "comment";
			}
			if(state.insideComment) {
				if(stream.match(/.*?\*\//)) {
					state.insideComment = false;
				} else {
					stream.next();
				}
				return "comment";
			}
			if(stream.match(/\/\/.*/)) {
				return "comment";
			}

			if(stream.match(/"(?:[^\\]|\\.)*?(?:"|$)/) || stream.match(/'(?:[^\\]|\\.)*?(?:'|$)/)) {
				return "string";
			}

			if(stream.peek() == ".") {
				state.property = true;
				stream.next();
				return null;
			}

			if(state.structVariableDeclaration && stream.match(/[\w$]+\s*:/)) {
				stream.backUp(1);
				return "property";
			}

			if(stream.match(/\(\s*{/)) {
				state.structVariableDeclaration = true;
				return null;
			}
			if(stream.match(/}\s*\)/)) {
				state.structVariableDeclaration = false;
				return null;
			}

			if(state.property) {
				state.property = false;
				if(stream.eatWhile(/[a-zA-Z$_][\w$]*/)) {
					return "property";
				} else {
					stream.next();
				}
			}

			if(stream.match(typesPattern)) {
				if(!state.mappingDeclaration) {
					state.variableDeclaration = true;
				}
				return "type";
			}

			if(stream.match(keywordsPattern)) {
				return "keyword";
			}

			if(stream.match(/mapping\b/)) {
				state.mappingDeclaration = true;
				return "keyword";
			}

			if(stream.match(/(contract|modifier|function|library|struct|enum)\b/)) { // include `enum`
				state.blockDeclaration = true;
				return "keyword";
			}

			if(state.variableDeclaration) {
				if(/[^A-Za-z0-9_$ ]/.test(stream.peek())) {
					state.variableDeclaration = false;
				} else {
					stream.next();
					return "variable";
				}
			}

			// try to highlight user defined types
			if(stream.match(/[A-Z][a-z_$]*[\w$]*\s*/)) {
				if(stream.peek() == "(") { // ignore function/event call
					return "variable";
				}
				if(!state.mappingDeclaration) {
					state.variableDeclaration = true;
				}
				return "variable-3";
			}

			if(state.mappingDeclaration && stream.peek() == ")") {
				stream.next();
				state.mappingDeclaration = false;
				state.mappingName = true;
				return null;
			}

			if(state.mappingName) {
				if(/[^A-Za-z0-9_$ ]/.test(stream.peek())) {
					state.mappingName = false;
				} else {
					stream.next();
					return "variable";
				}
			}

			if(stream.match(/true|false/)) {
				return "atom";
			}

			if(state.blockDeclaration) {
				if(stream.match(/.+?(?=({|\())/)) {
					state.blockDeclaration = false;
					return "variable";
				}
			}

			if(stream.match(/[a-zA-Z_$][\w$]*/)) {
				return "variable";
			}

			if(stream.match(/0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i)) {
				return "number";
			}

			stream.next();
			return null;
		},
	};
});
