# win-get-active-window
Is a windows rebuild of:
[https://github.com/octalmage/active-window](https://github.com/octalmage/active-window)


## Installing
```
$ npm install win-get-active-window
```

## Usage
```javascript
const getActiveWindow = require("win-get-active-window")

console.log(await getActiveWindow())
/* returns an object:
{
  app: string
  title: string
}
*/
```

## License
[MIT](LICENSE.md)