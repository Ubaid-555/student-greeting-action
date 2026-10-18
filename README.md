# Student Greeting Action

Custom JavaScript action by Ubaidullah Zubair, SAP 51650, SE 7-2.

Inputs: `name`, `greeting`. Output: `message`.

Uses `@actions/core` and `@actions/github`. The committed `dist/index.js` bundles dependencies using `@vercel/ncc`; consumers do not install packages at workflow runtime.

Build: install dependencies and run `ncc build index.js -o dist --license licenses.txt`.

Release: `v1.0.0`. Main activity: https://github.com/Ubaid-555/github-actions-lab
