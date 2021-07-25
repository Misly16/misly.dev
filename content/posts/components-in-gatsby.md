---
title: "Components in Gatsby.js"
date: 2021-02-13T15:38:01+01:00
draft: false
tags: ["Gatsby", "React"]
summary: Using components in Gatsby
---

Components in Gatsby.JS are really cool, for example:

pages/index.js
```js
import * as React from "react"
import Header from '../components/header';

const IndexPage = () => {
  return (
    <main>
     <Header Title="Name" Description="Hello!"/>
    </main>
  )
}

export default IndexPage

```
components/header.js
```js
import * as React from "react"
const Header = ({ Title, Description }) => (
    <header>
    <h1 class="heading">{Title}</h1>
    <p class="description">{Description}</p>
    </header>
    )

export default Header

```
