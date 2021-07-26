# Angular-Reactive-Form

This project shows a full runing way on how reactive form can be created and used throughout the application.

#### Quality comes with Quanity.
So let's create form to get more quality.

The form will endup looking, not exactly, but somehow like below.

![](images/FormToCreate.jpeg)

#### Assuming you have installed Angular 8 or above on your system

## Installation Guide
First thing first, create a project called my-app using following command.

```
ng new my-app
```

After that, create a component called form for reactive forms using following command.

```
ng generate component form
```

Then over-write all the code of app.component.html with following line.

```
<app-form></app-form>
```

Run the server to see is it working fine or not using following command.

```
ng server --open
```

A web page will open and show _form is working_. If not then go and debug your application.

## bootstrap setup

Now, install bootstrap in your project using following command.

```
npm install bootstrap@next
```
Here next means the lastest version. In my case it was v5. You can explicitly install any version you like.
To configure bootstrap, angular-cli.json file (in many updated angular version this file named as angular.json) and update scripts and styles.

```
"styles":  [
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "src/styles.css"
           ],
"scripts": [
            "node_modules/bootstrap/dist/js/bootstrap.js"
           ]
```

Now everything's ready and you good to go unless you have to add dropdown menu in your application. In our case we have to. So popper.js is required. Install it using following command.

```
npm install popper.js --save
```

The application should starte showing the html file of form-component.
