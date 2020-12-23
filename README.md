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
# Given a JSON file
curl -s 'https://api.github.com/users/calbertts' > jsondata
{
  "login": "calbertts",
  "id": 1326651,
  "node_id": "MDQ6VXNlcjEzMjY2NTE=",
  "avatar_url": "https://avatars0.githubusercontent.com/u/1326651?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/calbertts",
  "html_url": "https://github.com/calbertts",
  "followers_url": "https://api.github.com/users/calbertts/followers",
  "following_url": "https://api.github.com/users/calbertts/following{/other_user}",
  "gists_url": "https://api.github.com/users/calbertts/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/calbertts/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/calbertts/subscriptions",
  "organizations_url": "https://api.github.com/users/calbertts/orgs",
  "repos_url": "https://api.github.com/users/calbertts/repos",
  "events_url": "https://api.github.com/users/calbertts/events{/privacy}",
  "received_events_url": "https://api.github.com/users/calbertts/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Carlos Castaño",
  "company": "ASER Information Technology",
  "blog": "http://www.calbertts.com",
  "location": "Madrid",
  "email": null,
  "hireable": true,
  "bio": "FullStack Developer",
  "twitter_username": "calbertts",
  "public_repos": 45,
  "public_gists": 17,
  "followers": 21,
  "following": 26,
  "created_at": "2012-01-13T03:39:27Z",
  "updated_at": "2020-12-23T13:36:40Z"
}

# We want to format this output with no newlines
cat jsondata | curl -s -X POST -H "Content-Type: text/plain" --data-binary @- https://jsonprettify.vercel.app/api/server?indent=0

# Output will be
{"login":"calbertts","id":1326651,"node_id":"MDQ6VXNlcjEzMjY2NTE=","avatar_url":"https://avatars0.githubusercontent.com/u/1326651?v=4","gravatar_id":"","url":"https://api.github.com/users/calbertts","html_url":"https://github.com/calbertts","followers_url":"https://api.github.com/users/calbertts/followers","following_url":"https://api.github.com/users/calbertts/following{/other_user}","gists_url":"https://api.github.com/users/calbertts/gists{/gist_id}","starred_url":"https://api.github.com/users/calbertts/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/calbertts/subscriptions","organizations_url":"https://api.github.com/users/calbertts/orgs","repos_url":"https://api.github.com/users/calbertts/repos","events_url":"https://api.github.com/users/calbertts/events{/privacy}","received_events_url":"https://api.github.com/users/calbertts/received_events","type":"User","site_admin":false,"name":"Carlos Castaño","company":"ASER Information Technology","blog":"http://www.calbertts.com","location":"Madrid","email":null,"hireable":true,"bio":"FullStack Developer","twitter_username":"calbertts","public_repos":45,"public_gists":17,"followers":21,"following":26,"created_at":"2012-01-13T03:39:27Z","updated_at":"2020-12-23T13:36:40Z"}
```
