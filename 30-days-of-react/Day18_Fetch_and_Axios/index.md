- [Fetch 和 Axios](#fetch-和-axios)
  - [Fetch](#fetch)
  - [Axios](#axios)
- [练习](#练习)
  - [练习1](#练习1)
  - [练习2](#练习2)
  - [练习3](#练习3)

## Fetch 和 Axios

### Fetch

目前，JavaScript 提供了 fetch API 来发出 HTTP 请求。现在基本所有浏览器都支持 fetch。但是，目前开发中，大多数项目还是用的 axios 来进行 API 请求。

关于各大浏览器对于 fetch 的支持情况，我们可以在 [caniuse](https://caniuse.com/?search=fetch) 上进行搜索查看：

![](../imgs/day18_fetch_support.png)

可以看到 PC 浏览器基本都支持，除了 IE，不过 IE 已经被淘汰了。而在手机端 除了 Opera 之外，其他浏览器的支持度也都OK，总得支持度已经达到了 97.8%。

接下来让我们看一个例子：

```js
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Country = ({
  country: { name, capital, flag, languages, population, currency },
}) => {
  const formatedCapital =
    capital.length > 0 ? (
      <>
        <span>Capital: </span>
        {capital}
      </>
    ) : (
      ''
    )
  const formatLanguage = languages.length > 1 ? `Languages` : `Language`
  console.log(languages)
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>
      <h3 className='country_name'>{name.toUpperCase()}</h3>
      <div class='country_text'>
        <p>{formatedCapital}</p>
        <p>
          <span>{formatLanguage}: </span>
          {languages.map((language) => language.name).join(', ')}
        </p>
        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>Currency: </span>
          {currency}
        </p>
      </div>
    </div>
  )
}

function App() {
  const [data, setData] = useState([])

  const fetchCountryData = async () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    try {
      const response = await fetch(url)
      const res = await response.json()
      setData(res)
    } catch(error) {}
  }

  useEffect(() => {
    fetchCountryData()
  }, [])

  return (
    <div className='App'>
      <h1>Fetching API using Fetch</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {data.length} countries in the api</p>
        <div className='countries-wrapper'>
          {data.map((country) => (
            <Country country={country} />
          ))}
        </div>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```
接下来，让我们看看如何使用 axios 执行相同的 API 调用。

### Axios

因为 axios 是第三方库，我们需要使用 npm 去安装它。它支持 GET\POST\PUT\PATCH\DELETE 请求，在本节实例中，我们将仅举例 GET 请求。

```js
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Country = ({ country: { name, flag, population } }) => {
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>
      <h3 className='country_name'>{name.toUpperCase()}</h3>
      <div class='country_text'>
        <p>
          <span>Population: </span>
          {population}
        </p>
      </div>
    </div>
  )
}

function App() {
  const [data, setData] = useState([])

  const fetchCountryData = async () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    try {
      const response = await axios.get(url)
      setData(response.data)
    } catch(error) {}
  }

  useEffect(() => {
    fetchCountryData()
  }, [])

  return (
    <div className='App'>
      <h1>React Component Life Cycle</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {data.length} countries in the api</p>
        <div className='countries-wrapper'>
          {data.map((country) => (
            <Country country={country} />
          ))}
        </div>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

可以看到，fetch 和 axios 之间没有太大区别。但建议多使用 axios 而不是 fetch，因为所有浏览器都支持且易于使用。

## 练习

### 练习1

1. 什么是HTTP请求？

> HTTP请求是指客户端向服务器发送的请求，用于获取或传输网络资源。这些请求包括GET请求、POST请求、PUT请求、DELETE请求等，用于不同的操作和目的。

2. 最常见的 HTTP 请求有哪些？

> - GET：用于从服务器获取数据。
> - POST：向服务器提交数据。
> - PUT：用于修改服务器上的资源。
> - DELETE：用于删除服务器上的资源。

3. 什么是 fetch？

> Fetch是一个在浏览器中内置的现代API，用于发送HTTP请求并获取响应。通过使用Fetch API，可以异步地从服务器获取数据，而无需使用传统的XMLHttpRequest（XHR）对象。它返回一个Promise，可以使用.then()和.catch()方法处理异步响应。
>
> Fetch提供了一种更简单、更直观的方法来发出和处理HTTP请求，同时支持多种数据格式和CORS跨域资源共享。与XMLHttpRequest对象相比，Fetch API更加灵活且易于使用，具有更好的可读性和可维护性。总的来说，Fetch API是现代Web开发中的常见技术之一，已经成为了许多前端框架和库的标准选择。

4. 什么是 axios？

> axios是一个基于Promise的HTTP客户端，可以在浏览器和Node.js中使用。它使得在客户端和服务器之间发送异步HTTP请求变得更加容易。

5. fetch 和 axios 有什么区别？

> fetch 的特点：
> - 内置浏览器API，无需额外的依赖。
> - 支持现代浏览器，包括跨域请求和CORS。
> - 符合Web标准，较为简洁和直观。
>
> axios 的特点：
> - 作为第三方库，提供了更多的功能和扩展性。
> - 支持浏览器和Node.js环境。
> - 提供了拦截请求和响应、转换数据等功能。
> - 兼容性更好，支持旧版本浏览器。

6. 您是否更喜欢 fetch 而不是 axios 来发出 HTTP 请求？

> Fetch和axios都有自己的优势和适用场景，没有明确的答案来确定哪个的适用性更广泛。
>
> 根据具体的项目需求和开发环境，你可以选择适合的工具。如果你只关注现代浏览器环境，并且希望使用内置的API，那么Fetch是一个不错的选择。如果你需要更多的功能、拦截器、兼容性和扩展性，或者在Node.js环境下使用，那么axios可能更适合你。
> 
> 最终的选择取决于你的具体需求、团队偏好和项目要求。

### 练习2

1. 在这个 [API](https://api.thecatapi.com/v1/breeds) 中查找猫的平均公制体重和寿命。 API 中有 67 个品种的猫。

![](../imgs/day18_average_cat_weight_and_age.png)

### 练习3

1. 有多少个国家有猫品种？
2. 哪个国家的猫品种数量最多？
3. 根据国家拥有猫品种的数量按升序排列国家？
