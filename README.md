## IPIFY
Module For Easy Streamlined Access Of The IPIFY IPv4 Service

### Install
```
npm i @mindlessxd/ipify
```

### Examples

#### IPv4
```javascript
const ipify = require('@mindlessxd/ipify');

(async () => {
    try {
        let ip = await ipify()
        console.log(ip)
    } catch (error) {
        console.log(error)
    }
})();
````