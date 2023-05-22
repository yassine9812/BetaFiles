var pdf = require('pdf-creator-node')
var fs = require('fs')

var html = fs.readFileSync('./cv-templates/template-1.html', 'utf8')

var options = {
  format: 'A4',
  orientation: 'portrait',
  border: '10mm',

}

var form = {
  firstName: 'Test',
  lastName: 'User',
  Mail: 'test@gmail.com',
  education: ['School', 'College', 'University'],
  employmentHistory: ['IT Company1', 'IT Company2', 'IT Company3'],
  skills: ['Java', 'Javascript', 'React', 'NodeJS', 'Blockchain']
}

var document = {
  html: html,
  data: {
    form: form
  },
  path: './template-1.pdf',
  type: ''
}

pdf
  .create(document, options)
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
