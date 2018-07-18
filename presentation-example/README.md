## Presentation Examples/Solutions

### Rest/GraphQL Queries for the following
* A list of names from every group that Bruce S belonged to (assuming you know his email)
``` graphql
query {
  user(email: "imarocker@email.com") {
    groups {
      members {
        name
      }
    }
  }
}
```
``` rest
http://localhost:4000/groupNames/imarocker@email.com
```

* A list of names of all of the groups and the members that belong to them
``` graphql
query {
  users {
    groups {
      name
      members {
        name
        email
      }
    }
  }
}
```
``` rest
http://localhost:4000/groupMembers
```