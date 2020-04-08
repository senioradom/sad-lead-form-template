# SAD Lead Form Template

## Download
Download the distribution (`dist/`) folder.

**NPM**
```
npm install sad-lead-form-template
```

**Github**  
https://github.com/senioradom/sad-lead-form-template/tree/master/dist

## Library content

```
dist/
├── index.html
├── css
│   ├── sad-lead-form.css
│   └── sad-lead-form-optional.css
└── js
    └── sad-lead-form-app.js
```

## Integration
```
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Formulaire</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- ------------------
     1 . CSS
    ------------------- -->
    <!-- [required] : This is a required stylesheet with no styling whatsoever.
         It's only here to make the application work
         hide/show elements, display error messages....
     -->
    <link rel="stylesheet" href="css/sad-lead-form.css">

    <!-- [optional] : This is an optional stylesheet for whoever wants a "plug and play"  type of form.
         It makes the form nicer to look at.
         Do not include it if you want to fully customize the application to your needs.
    -->
    <link rel="stylesheet" href="css/sad-lead-form-optional.css">

</head>
<body>

<!-- ------------------
 2 . HTML element
------------------- -->
<!-- HTML node in which to insert the form  -->
<div id="sad-lead-form"></div>

<!-- ------------------
 4 . JAVASCRIPT
------------------- -->
<!-- 
Library inclusion :
This adds a window (global) object : window.sad.leadFormModelInstance
-->
<script src="js/sad-lead-form-app.js"></script>

<script>
    // --------------------
    // 5 . Callback function
    // --------------------
    // Callback function that will be called once the form is valid and submitted
    const callBackFunction = () => {
        // We can access the generated model to be submitted (POSTed) to the API as :
        // A JS object
        const formResultAsAJSObject = window.sad.leadFormModelInstance.getFormAsObject();
        console.log(formResultAsAJSObject);

        // A JSON object
        const formResultAsAJSONObject = window.sad.leadFormModelInstance.getFormAsJSON();
        console.log(formResultAsAJSONObject);

        // Here is a POST example
        const basicAuth = "Basic ba$icAuthString";
        const postURL = "https://example.com/api/3/leads";

        const myHeaders = new Headers();
        myHeaders.append("Authorization", basicAuth);
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formResultAsAJSONObject,
            redirect: "follow"
        };

        fetch(postURL, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };

    // --------------------
    // 6 . Create the form / Configuration
    // --------------------
    new SadLeadFormApp.default({
        // [required] distributorCode : Code of the distributor
        distributorCode: "XXXXXXXXXXX",

        // [required] htmlSelector : HTML selector in which to inject the <form>
        // In this example : <div id="sad-lead-form"></div>
        htmlSelector: "#sad-lead-form",

        // [required] rgpdDescription : This is the RGPD distributor description.
        rgpdDescription: "Lorem ipsum dolor sit amet..",

        // [required] callback : This is the callback function in which we can do whatever we want with the generated model (typically POST it to the API)
        callback: callBackFunction

        // [optional] agencyCode : Code of the agency
        // agencyCode: 'XXXXXXXXXXX'
    });
</script>
</body>
</html>

```
