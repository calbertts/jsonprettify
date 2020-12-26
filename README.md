# JSON Prettify Lambda

This small function allows to pass any JSON data and prettify based on URL query params:

```
curl -s 'https://api.github.com/users/calbertts' | \
  curl -s -X POST -H "Content-Type: text/plain" --data-binary @- https://jsonprettify.vercel.app/api/server?indent=0
```

## Parameters

**indent**: Amount of spaces for indentation, 2 by default if the param is not specified


## Example: 

```
# Given a JSON data
curl -sS https://www.metaweather.com/api/location/search/?query=Madrid
# [{"title":"Madrid","location_type":"City","woeid":766273,"latt_long":"40.420300,-3.705770"}]

# We want to format this output with 2 indentation spaces
curl -sS https://www.metaweather.com/api/location/search/?query=Madrid | \
curl -s -X POST -H "Content-Type: text/plain" --data-binary @- https://jsonprettify.vercel.app/api/server

# Output will be
# [
#   {
#     "title": "Madrid",
#     "location_type": "City",
#     "woeid": 766273,
#     "latt_long": "40.420300,-3.705770"
#   }
# ]
```
