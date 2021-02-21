# rollup-typescript-docz-library

Remember to change from `package.json`

```json
{
  "name": "",
  "version": "",
  "description": "",
  "author": "",
  "license": ""
}
```

in order to publish update `doczrc.js`

```js
export default {
  typescript: true,
  dest: '/build',
  base: '/rollup-typescript-docz-library',
};
```

## Scripts

`"build"` -> build the package library
`"docz:dev"` -> run decz in dev mode
`"docz:build"` -> build documentation docs
`"docz:serve"` -> build documentation docs and serve
`"test"` -> execute test
`"commit"` -> execute commitizen for convetional commmits
`"deploy:docs"` -> execute `npm run docz:build` and publish it to github pages.
