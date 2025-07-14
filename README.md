# Doc Site

## Creating New Sections

1. **Documentation File Rules**: Place English version files in the `/docs/docs` folder and images in `/docs-images`.
2. **Other Language Versions**: For example, the Traditional Chinese version should be placed in `/i18n/zh-TW/docusaurus-plugin-content-docs/current/docs`.

> **Important**: File names for different languages must be absolutely identical, including case sensitivity.

-----

## URL Generation Rules

1. **Default Behavior**: URLs are generated using the filename by default. For example:

      * `datadrive-app.md` -\> `https://docs.glows.ai/`
      * `Data Drive app.md` -\> `https://docs.glows.ai/docs/Data%20Drive%20app`

2. **Custom URLs**: You can customize the URL by adding an `id` attribute within the document.

      * `id: dd-app` -\> `https://docs.glows.ai/docs/dd-app`

-----

Please add the following content to the very top of your document:

```markdown
---
id: dd-app
---
```
