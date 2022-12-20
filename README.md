# Mafalda SFU webpage

To automatically adds new docs updates,
[add private key to the source repository](https://cpina.github.io/push-to-another-repository-docs/setup-using-ssh-deploy-keys.html#add-private-key-to-the-source-repository)
and config the
[cpina/github-action-push-to-another-repository](https://cpina.github.io/push-to-another-repository-docs/generic-example.html#generic-example)
action. As a reference, this is the deploy action for
[ROPE-client](https://github.com/Mafalda-SFU/ROPE-client):

```yaml
name: build documentation and publish

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: cpina/github-action-push-to-another-repository@v1.5.1
        env:
          SSH_DEPLOY_KEY: ${{ secrets.SSH_DEPLOY_KEY }}
        with:
          destination-github-username: Mafalda-SFU
          destination-repository-name: Mafalda-SFU.github.io
          source-directory: docs
          target-directory: docs/ROPE-client
          user-name: piranna
```
