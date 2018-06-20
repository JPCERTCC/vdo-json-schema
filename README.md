# VDO JSON Schema

VDO JSON Schema is an implementation of [JSON Schema](http://json-schema.org/) for Vulnerability Description Ontology (VDO).

Vulnerability Description Ontology (VDO) is a framework for describing vulnerabilities and is defined in [NISTIR 8138 (Draft)](https://csrc.nist.gov/publications/detail/nistir/8138/draft). VDO defines basic building blocks of vulnerability and a set of values they should take. So it will free you from using free format text description and assist in the automation of vulnerability management process.

VDO JSON Schema displays possible autocomplete suggestions and inserts a suggestion in an editor that can understand the structure of JSON Schema.

![autocompletion-demo](https://github.com/JPCERTCC/vdo-study/wiki/images/cve-2014-8606_02.mov.gif)

## Getting started

Currently we have schema for two major editors, Atom and Visual Studio Code.

### Atom

1. Install [vdo-schema-provider](/editor/Atom/vdo-schema-provider) and [autocomplete-json](http://atom-packages.directory/package/autocomplete-json/) packages
1. Run `npm install` in the vdo-schema-provider directory (vdo-schema-provider requires [file-url](https://www.npmjs.com/package/file-url))
1. Copy [vdo_schema.json](/vdo_schema.json) to vdo-schema-provider directory
1. By default settings, the autocompletion will be enabled if a file name matches `CVE-*.json`.

vdo-schema-provider is a custom schema provider for VDO JSON Schema. See [SchemaProvider · bali182/autocomplete\-json Wiki](https://github.com/bali182/autocomplete-json/wiki/SchemaProvider) for additional information about custom schema provider.

### Visual Studio Code

Copy [.vscode](/editor/VisualStudioCode/.vscode) and [vdo_schema.json](/vdo_schema.json) to your working directory. By default settings, the autocompletion will be enabled if a file name matches `CVE-*.json`.

See [JSON editing in Visual Studio Code](https://code.visualstudio.com/docs/languages/json) for additional information.

### Other editors

If you with to have this in other editors, please inform us. We also appreciate if you make it by yourself and create a pull request.

## Notes

 - JSON Schema version: draft-07
 - Our VDO representation does NOT completely compliant with NISTIR 8138.
