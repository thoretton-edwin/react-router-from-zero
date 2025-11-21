# 1 - Create the project from scratch

It is a non-exhaustive list of steps I used to build this app without the react-router starter command.

## Install react router

- initialize your git repository, add a package.json file to your project 

        .touch .gitignore
        .touch package.json

- Add react router framework packages : 

        Npm install @react-router/node
        Npm install @react-router/serve
        Npm install -D @react-router/dev

- Add script to run the application on package.json 

        “dev”: “react-router-dev”

    > WARNING : React Router Vite plugin not found in Vite config

## Adding vite to the project

- Manual installation cf *https://vite.dev/guide/*

        npm install -D vite
        npm install  -d vite-tsconfig-paths 
* tsconfig-paths is used for resolution path in the vite config*

        touch vite.config.ts
        touch tsconfig.json

*We have to precise the moduleResolution to bundler to resolve module imports in node project*

    npm run dev :  React Router Vite plugin not found in Vite config

*@react-router/dev contains reactRouter() vite plugin to add to the vite.config.ts*

    npm run dev :  Could not find a root route module in the app directory as "app/root.tsx"

- Creates the folowing standard files cf *https://reactrouter.com/api/framework-conventions/root.tsx*

        mkdir app
        touch ./app/root.tsx

- Relaunch the app

        npm run dev :  Route config file not found at "app/routes.ts".

- Creates the folowing standard files cf *https://reactrouter.com/api/framework-conventions/routes.ts*

      touch ./app/routes.ts
      npm run dev : the file has errors, missing react-router package, it the client part it seems

- Seems to need the client part of the library : 

      Npm install react-router

      npm run dev :  JSX element implicitly has type any because no interface

      npm install -D @types/react

      npm run dev : Route config file not found at "app/routes.ts"


      npm run dev : ✘ [ERROR] Could not resolve "react-dom"

- PS : Adding .react-router/types/** to gitignore

      Npm install react-dom

      npm run dev : You made a GET request to "/" but did not provide a `loader` for route "pages/main"

- Adding index to route / to the component

## 2 - Adding now the frontend unit tests

- Follow the manual installation of vitest

        npm install -D vitest @testing-library/jest-dom @testing-library/react @testing-library/user-event jsdom

        npm run dev : Error: React Router Vite plugin can't detect preamble. Something is wrong.

- React Router doesn't work in Vitest's environment, so we'll disable it when we run Vitest

*vite.config*

        export default defineConfig({
            plugins: [tsconfigPaths(), !process.env.VITEST && reactRouter()],
            test: {
                globals: true,
                setupFiles: './test-setup.ts',
                environment: "jsdom"
            }
        })

- Adding types in tsconfig :

        @types/react
        @types/react-dom
        @types/react-router
        @types/node
        @types/react

3 - Adding the e2e tests

- I used the scaffold command for playwright 

      npm init playwright@latest
