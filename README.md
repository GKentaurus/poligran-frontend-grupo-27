# PoliGran - Frontend - Grupo27

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: Version 18.19.1 or higher (required for Angular 21.x)
- **npm**: Version 11.6.2 or higher (specified in package.json)

You can check your versions by running:
```bash
node --version
npm --version
```

## Installation

1. Clone the repository and navigate to the project directory:
```bash
cd poligran-frontend-grupo-27
```

2. Install all project dependencies:
```bash
npm install
```

This will install all the required dependencies listed in `package.json`, including:
- Angular framework packages (@angular/core, @angular/common, @angular/forms, etc.)
- Angular Material for UI components
- RxJS for reactive programming
- TypeScript for type-safe development
- Vitest for unit testing
- Angular CLI for development and build tools

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
