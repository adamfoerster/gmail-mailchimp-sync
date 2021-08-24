# Trio Test

## Folder organization

Usualy I organize the project in the way recommended in the Angular Docs (domain based, with folders for every module plus `core` and `shared` modules) as oposed to a type based structure (with `components` and `services` folders). But since this is such a small project I believe even that would be an overkill and could be considered overengineering.

## State managment

I have worked with Redux (NGRX) in Angular in the past but I find that simply using BehaviorSubjects is often preferable, specially in a small project.

I tried to make the components as uncoupled as possible from the state so that it can be loaded in another project as a module with little effort. 

The way I set it up, the state of the module would be controlled by the `State Service` using Behavior Subjects. This service is consumed by the `sync page component` and from there is passed via props down the component tree (this way the components lower down are `dumb components`).

## CSS Variables

Even though I chose to use SCSS I used CSS Variables to store values. I did that because `CSS Variables` are avaliable in every major browser and allow me to change them live with the browser's inspector. I still used `SCSS` because I believe it to be easier to grok the structure with nested elements, better reflecting the html structure. That being said I tried to keep both html and css nesting to a minimum as a style choice.

# GmailMailchimpSync

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

