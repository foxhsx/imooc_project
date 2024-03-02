- [什么是 Context](#什么是-context)
- [什么时候使用 Context](#什么时候使用-context)

### 什么是 Context

Context 允许通过组件树传递数据，而无需手动将 props 传递给每个级别的每个子组件。

在 React 中，数据通过 props 自上而下进行传递，但是对于一些多级嵌套的组件来说，props 传递的方式会很麻烦。

而 Context 提供了一种在组件之间共享状态的方法，这样就不用在组件树的每个层级都显式地进行 prop 传递了。

### 什么时候使用 Context

Context 旨在共享可被视为 React 组件树“全局”的数据，例如当前经过身份验证的用户、主题或首选语言。

来看一下官网中提供的例子：

```js
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.    
    // Any component can read it, no matter how deep it is.    
    // In this example, we're passing "dark" as the current value.    
    return (
      <ThemeContext.Provider value="dark">        
         <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.  
  // React will find the closest theme Provider above and use its value.  
  // In this example, the current theme is "dark".  
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;  
  }
}
```

在上面的示例代码中：

1. 首先，通过 React.createContext('light') 创建了一个名为 ThemeContext 的 Context 对象，并指定了默认值为 'light'。
2. 在 App 组件中，通过 <ThemeContext.Provider value="dark"> 来提供当前的主题值为 'dark'，这样在 ThemeContext 下的所有子组件都可以访问到这个值。
3. Toolbar 组件作为 App 的子组件，在不需要显式传递主题值的情况下，直接可以访问到 ThemeContext 中提供的值。
4. 在 ThemedButton 组件中，通过设置 static contextType = ThemeContext; 来指定该组件需要读取 ThemeContext 中的值。React 将会在组件树中找到最近的 ThemeContext.Provider 并使用它提供的值。在这个例子中，ThemedButton 组件会获取到当前的主题值 'dark' 并将其作为 Button 组件的 theme 属性进行渲染。

我们再来看看 Hook 的写法：

```js
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <Button theme={theme} />;
}
```