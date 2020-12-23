# JSON Prettify Lambda

This small function allows to pass any JSON data and prettify based on URL query params:

```
curl -s 'https://api.github.com/users/calbertts' | \
  curl -s -X POST -H "Content-Type: text/plain" --data-binary @- https://jsonprettify.vercel.app/api/server?indent=0
```

## Parameters

**indent**: Amount of spaces for indentation, 2 by default if the param is not specified

