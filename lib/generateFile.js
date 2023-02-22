function renderCard(data) {
    let empty = ``;
    for (let i = 0; i < data.length; i++) {
        const element = data[i].getRole();
        if (element === "Manager") {
            empty+= `<div class="row card-body bg-light" id="Manager">
              <h2 class="card-title">Manager</h2>
              <ul>
                <li>Name: ${data[i].getName()}</li>
                <li>ID: ${data[i].getId()} </li>
                <li>Email: ${data[i].getEmail()}</li>
                <li>Office Number: ${data[i].getOfficeNumber()} </li>
              </ul> 
            </div>`
        }
        else if (element === "Engineer") {
            empty+= `<div class="row card-body bg-light" id="Engineer"">
              <h2 class="card-title">Engineer</h2>
              <ul>
                <li>Name: ${data[i].getName()}</li>
                <li>ID: ${data[i].getId()} </li>
                <li>Email: ${data[i].getEmail()}</li>
                <li>Github: ${data[i].getGithub()} </li>
              </ul> 
            </div>`
        }
        else if (element === "Intern") {
            empty+= `<div class="row card-body bg-light" id="Intern"">
              <h2 class="card-title">Intern</h2>
              <ul>
                <li>Name: ${data[i].getName()}</li>
                <li>ID: ${data[i].getId()} </li>
                <li>Email: ${data[i].getEmail()}</li>
                <li>School: ${data[i].getSchool()} </li>
              </ul> 
            </div>`
        }
        
    }

// need return to hand off/ back to index.js
    
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./dist/style.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <title>Team Profile Generator</title>
</head>
<body class="bg-dark">
    <header>
        <h1 class="d-flex align-items-center bg-light">My Team</h1>
    </header>
    <main>
        <div class="container my-5" >
        ${empty}
    </main>
      </div>
</html>`

}

module.exports = renderCard;