lint:
	node ./node_modules/eslint/bin/eslint.js .

test-coverage:
	node ./node_modules/vitest/vitest.mjs --run --coverage