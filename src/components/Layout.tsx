import React from "react";
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/plugins/babel';
import prettierPluginEstree from 'prettier/plugins/estree';
import { Plugin } from "prettier";
import './index.css';
const Layout = () => {

  const onFormat = async () => {
    const value = await prettier.format('.abc{ height: 1px;        fontWeight: 2px;}', {
      parser: "html",
      plugins: [parserBabel, prettierPluginEstree]
    })
    console.log('onFormat', value)
  }

  const style = {
    // transform: 'translateZ(20px)',
  }

  return (
    <div className="wrapper">
      <span className="test">twitch测试</span>
      <span className="test">twitch测试</span>
      <span className="test">twitch测试</span>
      <span className="test">twitch测试</span>
      <span className="test">twitch测试</span>
      <span className="test">twitch测试</span>
      <span className="test">twitch测试</span>
      <span className="test">twitch测试</span>
      <span className="test">twitch测试</span>
      <span className="test">twitch测试</span>
      <span className="test">twitch测试</span>
      <span className="test">twitch测试</span>
    </div>
  )
}

export default Layout;