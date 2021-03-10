# ss-code-injections

## Installation
```bash
yarn
```

## Development
1. 
```bash
yarn dev
```

2. open Squarespace account and add the following code injection line:
```html
<script type="module" src="http://127.0.0.1:8080/dist/index.js"></script>
```

## Production
```bash
yarn build
```

upload build to some cdn and inject it into the site using 'script' tag