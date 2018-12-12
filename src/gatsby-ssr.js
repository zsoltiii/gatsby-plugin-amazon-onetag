import React from "react"

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  const { adInstanceId, includeInDevelopment = false, marketplace = `US` } = pluginOptions
  
  const amznId = `amzn-assoc-ad-${adInstanceId}`
  const amznSrc = `//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=${marketplace}&adInstanceId=${adInstanceId}`
  
  if (process.env.NODE_ENV === `production` || includeInDevelopment) {
    setPostBodyComponents([
      <div id={amznId}></div>,
      <script
        key="plugin-amazon-onetag"
        async={true}
        defer={true}
        src={amznSrc}
      ></script>,
    ])
  }
}
