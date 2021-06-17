# SAD Lead Form Template

## Usage
### Installation
```python
# Install
npm init
npm install sad-lead-form-template

# Go to dist/
cd node_modules/sad-lead-form-template/dist

# Open index.html
file:///path/to/project/node_modules/sad-lead-form-template/dist/index.html
```

### Library content
```python
dist/
├── index.html
├── css
│   ├── sad-lead-form.css
│   └── sad-lead-form-optional.css
└── js
    └── sad-lead-form-app.js
```

### Integration
```HTML
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Formulaire</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- ––––––––––––––––––
     1 . CSS
    ––––––––––––––––––– -->
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

<!-- ––––––––––––––––––
 2 . HTML element
––––––––––––––––––– -->
<!-- HTML node in which to insert the form  -->
<div id="sad-lead-form"></div>

<!-- ––––––––––––––––––
 4 . JAVASCRIPT
––––––––––––––––––– -->
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
        // A JSON object
        const formResultAsAJSONObject = window.sad.leadFormModelInstance.getFormAsJSON();
        console.log(formResultAsAJSONObject);
        // Or, a JS object
        const formResultAsAJSObject = window.sad.leadFormModelInstance.getFormAsObject();
        console.log(formResultAsAJSObject);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formResultAsAJSONObject,
            redirect: "follow"
        };

        // POST the Lead to your backend project where you'll use your credentials to send it to our API.
        fetch("https://your-project-backend/uri", requestOptions)
            .then((response) => response.text())
            .then(() => {
                // Success : replace the form with a message
                document.getElementById('sad-lead-form').innerHTML = '<p>Le formulaire a bien été transmis.</p>';
            })
            .catch(error => {
                // Error : Print an error and re-enable form edition
                alert('Une erreur est survenue lors de la soumission du formulaire.');
                document.getElementById('sad-lead-form').style.pointerEvents = 'auto';
                console.log(error);
            });
    };

    // --------------------
    // 6 . Create the form / Configuration
    // --------------------
    new SadLeadFormApp.default({
        // [required] distributorCode : Code of the distributor
        distributorCode: "XXXXXXXXXXX",

        // [required] agencyCode : Code of the agency
        agencyCode: 'XXXXXXXXXXX',

        // providerConfig : List of providers
        providerConfig: {
            type: 'agency',
            selections: [{code: 'code1', name: 'Name1'}, {code: 'code2', name: 'Name2'}]
        }

        // [required] htmlSelector : HTML selector in which to inject the <form>
        // In this example : <div id="sad-lead-form"></div>
        htmlSelector: "#sad-lead-form",

        // [required] rgpdDescription : This is the RGPD distributor description.
        rgpdDescription: "Lorem ipsum dolor sit amet..",

        // [required] callback : This is the callback function in which we can do whatever we want with the generated model (typically POST it to the API)
        callback: callBackFunction
    });
</script>
</body>
</html>

```

## Development (Senioradom)
### Build

```python
rm -rf dist;
mkdir ./dist/
parcel build src/js/sad-lead-form-app.js --public-url ./ --out-dir ./dist/js  --no-minify --global SadLeadFormApp
parcel build src/css/sad-lead-form.scss --public-url ./ --out-dir ./dist/css
parcel build src/css/sad-lead-form-optional.scss --public-url ./ --out-dir ./dist/css
cp to-dist/index.html ./dist/
```

### Dist
Increment package.json version.

```python
# If not logged
npm login

npm publish
```
