# Case Canvas

## How to Run

The application uses [Docker](https://www.docker.com/) to ensure a consistant developer experience.

Install Docker Desktop and while the software is running you can run the following command in any terminal from the root of the project.

note: the first time running will take a bit of time as the project installs all packages. Subsequent startups will use a cache and be much quicker

```
docker compose up
```

When finished working you can use the following command to stop the container

```
docker compose down
```

## Style Guide

For consistant code styling across the project the TypeScript variant: [ts-standard](https://github.com/standard/ts-standard) of [StandardJS](https://standardjs.com/) is being which is a highly opinionated but no-config linter/formatter

### Check
```
npm run lint
```


### Auto Fix
```
npm run lint-fix
```


## Packages (package.json)

When package.json has been updated or a new package added to the project run this command to sort everything alphabetically for easier future navigation

```
npm run sort-packages
```

## Keeping packages up to date

Check the latest version for each dependency

note: updating a package to latest/specific version is an individual step

```
npm run check-packages
```