// license in redme
function licenseBadge(license){
  if(license !== "None"){
    return '![GitHub license](https://img.shields.io/badge/license-' + license + '-blue.svg'
 return ''
  }}



// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Github}, 
  # ${data.EMail},
  # ${data.Repository},
  # ${data.Title},
  # ${data.Description},
  # ${data.Installation},
  # ${data.Usage},
  # ${data.Guidelines},
  # ${data.Instructions},
  # ${data.License},
  ${licenseBadge(data.license)},

  
  


`;
}

module.exports = generateMarkdown;
