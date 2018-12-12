# gatsby-plugin-amazon-onetag

Easily add Amazon oneTag to your Gatsby site.

## Install

`npm install --save gatsby-plugin-amazon-onetag`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-amazon-onetag`,
    options: {
      // Grab this from https://affiliate-program.amazon.com/home/tools/onetag
      adInstanceId: "YOUR_AD_INSTANCE_ID",
      
      // Include Amazon oneTag in development.
      // Defaults to false meaning Amazon oneTag will only be loaded in production.
      includeInDevelopment: false,
      
      // Default marketplace is US
      marketplace: "US"
    }
  }
]
```