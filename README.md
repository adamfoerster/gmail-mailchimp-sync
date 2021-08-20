# Trio Test

## Layout positioning

The prototype shows the layout off-center, somewhat close to the top, but that looks like a limitation in figma that prevents vertical alignment rather than a design decision. So I made it centered in the screen.

## Folder organization

Usualy I organize the project in the way recommended in the Angular Docs (domain based, with folders for every module plus `core` and `shared` modules) as oposed to a type based structure (with `components` and `services` folders). But since this is such a small project I believe even that would be an overkill and could be considered overengineering.

## CSS Variables

Even though I chose to use SCSS I used CSS Variables to store values. I did that because CSS Variables are avaliable in every major browser and allow me to change them live. I still used SCSS because I believe it's easier to follow it's structure with nested elements, better reflecting the html structure. That being said I tried to keep both html and css nesting to a minimum.

# GmailMailchimpSync

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
