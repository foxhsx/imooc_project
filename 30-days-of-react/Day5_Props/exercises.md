- React 组件中的 props 是什么？

> React 组件中的 props，我们可以理解成这个组件自身需要的一些状态，这个状态是通过外界传递进来的，一般来说是由父组件向子组件传递数据。它是一个 JavaScript 对象，包含了使用该组件时传递给该组件的所有属性。
> 
> 在父组件中，通过在子组件标签上添加属性来传递 props。而在子组件中我们可以通过解构 props 来访问这些属性。

```js
// 父组件
<Hello name="Cecil" />

// 子组件
function Hello({ name }) {
  return (
    <div>Hello, {name}</div>  
  )
}
```

- 如何访问 React 组件中的 props？

> 我们以函数组件来说，在函数组件中通过解构的方式来访问由外界传递进来的 props，也可以直接通过 `props.[属性名]` 的方式来进行访问

- 我们可以将哪些数据类型作为 props 传递给组件？

> props 对象中的类型支持：
> 
> - 基本数据类型：String、Number、Boolean 等
> 
> - 引用数据类型：对象和数组等
> 
> - 函数类型：即函数
> 
> 这里有一点需要注意，那就是对于引用数据类型，需要注意它们的引用关系。比如传递了一个对象到组件中，那只有当对象的引用地址发生变化时，才会触发组件的重新渲染，如果只是对象内的某一个属性发生变化，是不会触发组件更新的。
> 
> 反过来说，假如子组件内部修改了这个对象的属性，那么父组件中的对象也会遭受牵连，所以比较合理的做法是在传递这个对象时，先进行解构，这样就相当于我们创建了一个新的对象传递给子组件，那在子组件中随便你怎么折腾，都不会影响到父组件中的数据了。

- 什么是 propTypes？

> propTypes 是 React 中的一种属性类型检查机制，用于验证传递给组件的 props 是否符合预期的数据类型和要求。它可以帮助开发者在开发过程中捕获潜在的错误，并提供更好的代码可读性和可维护性。
> 
> 通过定义组件的 propTypes，可以指定每个 prop 所期望的数据类型，并在运行时对传递的 props 进行验证。如果传递的 prop 类型不匹配或者缺失，React 将会在控制台中显示警告信息。
> 
> 要使用 propTypes，需要先导入 `prop-types` 包，并在组件中定义一个名为 `propTypes` 的静态属性。该属性是一个对象，其中的每一个键对应一个 props 名称，值则是对应的数据类型。

```js
import React from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  render() {
    return <div>Hello, {this.props.name}!</div>;
  }
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

```

- 什么是默认 propTypes？

> 默认 propTypes 是一种用于指定组件所期望的默认 props 值的机制。当父组件没有传递某个 prop 给子组件时，可以使用默认的 propTypes 给该 prop 设置一个默认值。
> 
> 在 React 中，可以通过在组件类中定义一个名为 `defaultProps` 的静态属性来指定默认的 props 值。这个属性是一个对象，其中的每个键对应一个 prop 名称，值则是对应的默认值。
> 
> 通过提供默认的 propTypes，可以确保即使在没有传递所有必要的 props 的情况下，组件也能正常渲染。这对于提供更好的代码健壮性和可复用性非常有帮助。
> 
> 需要注意的是，默认的 propTypes 只会在父组件没有传递对应的 prop 时生效。
