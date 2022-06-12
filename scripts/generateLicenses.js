const licensesList = require('licenses-list-generator');
const fs = require('fs')
const licenses = licensesList();
// console.log(licenses);

licenses.forEach((license) => {
    fs.appendFile('./scripts/cache/licenses.html', 
    `
    <hr/>
    <p>The following software may be included in this product: ${license.name}. A copy of the source code may be downloaded from <a href="https://www.npmjs.com/package/${license.name}" target="_blank">https://www.npmjs.com/package/${license.name}</a>. This software contains the following license and notice below:</p>
    <p>${license.text.replace(`\n`, '<br/>')}</p>`,
    () => console.log(`Added ${license.name}`))
})