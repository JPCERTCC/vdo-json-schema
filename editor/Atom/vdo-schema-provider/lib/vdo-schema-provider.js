'use babel';

const { join } = require('path');
const fileUrl = require('file-url');

function provideVdoSchema() {
  return {
    getSchemaURI(): string {
      return fileUrl(join(__dirname, '../vdo_schema.json'));
    },
    getFilePattern(): string {
      return "CVE-*.json";
    }
  };
}

module.exports = { provideVdoSchema };
