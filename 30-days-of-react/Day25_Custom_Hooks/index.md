## 自定义 Hook

我们可以在已有的 React hook 基础上创建自定义 hook。例如，当我们调用接口获取数据时，会使用 fetch 或 axios 发送 HTTP 请求，并在 useEffect Hook 中执行这个异步函数。

接下来我们来实现一个名为 useFetch 的自定义 Hook，在这个 Hook 中，我们将使用 useState 和 useEffect 来辅助实现里面的功能。

> 需要注意的是，自定义 Hook 的命名规范是驼峰命名法，并且它以单词 use 开头。

这个自定义 Hook 将具有以下几个功能：

1. 接收一个 url 参数，这样我们可以灵活得设置 API 接口

2. 在 useEffect 中调用异步函数，并得到接口的返回值

3. 将得到的结果返回出去

```js
import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }, [url)

  useEffect(() => {
    fetchData()
  }, [])

  return data
}

export default useFetch
```

然后我们就可以在需要它的地方进行引入并调用：

```js
// index.js

import React from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import useFetch from './useFetch'

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

const App = (props) => {
  const url = 'https://restcountries.eu/rest/v2/all'
  const data = useFetch(url)

  return (
    <div className='App'>
      <h1>Custom Hooks</h1>
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


