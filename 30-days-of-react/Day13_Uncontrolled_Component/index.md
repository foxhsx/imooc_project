- [非受控组件](#非受控组件)
  - [从非受控组件中获取数据](#从非受控组件中获取数据)
  - [从表单中获取多个数据](#从表单中获取多个数据)
- [练习](#练习)
  - [练习1](#练习1)

### 非受控组件

在 React 中，大多数时间我们都按照 React 官方文档的建议使用受控组件。而如果要编写非受控组件，我们可以使用 ref 来从 DOM 中获取表单元素的值，而不会为每个状态的更新编写事件处理程序。

#### 从非受控组件中获取数据

我们使用 `useRef` 来创建一个 ref 对象，并将其挂载到对应的元素上。ref 对象包含一个 `current` 属性，这个属性可以用来引用被 ref 所标识的 DOM 元素或者组件实例。来看一个例子：

```js
import React, { useRef } from 'react';
import ReactDOM from 'react-dom'

function App() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name: </label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='First Name'
          ref={inputRef}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

#### 从表单中获取多个数据

我们可以使用多个 ref 从 DOM 中获取多个数据。

```js
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value1 = input1Ref.current.value;
    const value2 = input2Ref.current.value;
    console.log("Input 1:", value1);
    console.log("Input 2:", value2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={input1Ref} />
      <input type="text" ref={input2Ref} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

一般情况来说，我们使用 ref 来获取 DOM 元素的场景是比较少的，基本上都是使用受控组件。而还有一个需要注意的点就是当我们在开发 React 项目时，避免不要直接使用 DOM，这是因为在 React 内部有自己处理 DOM 操作的方式。

### 练习

#### 练习1

1. 什么是受控组件

> 受控组件是指在 React 中，表单元素的值由 React 组件的状态 state 来控制和管理的组件。具体来说，受控组件通过将表单元素的值绑定到组件的状态，并在表单元素的改变事件中更新状态的方式来实现。
>
> 使用受控组件时，我们可以通过在表单元素上设置 `value` 属性来指定当前的值，并通过设置 `onChange` 事件来更新状态。这样，每当用户输入内容的时候，React 组件的状态将相应地更新，从而与表单元素的值保持同步。

2. 什么是非受控组件

> 非受控组件是指在 React 中，表单元素的值不受 react 组件的状态控制和管理的组件。相反，表单元素的值由 DOM 自身来处理。
>
> 使用非受控组件时，我们可以通过在表单元素上设置 defaultValue 和 defaultChecked 属性来指定初始值，然后通过其他方式（比如 ref）来获取用户输入的值或者进行操作。
>
> 与受控组件相比，非受控组件更适用于简单的交互，或者我们需要直接操作 DOM 元素而不是通过状态来控制时。但是，由于非受控组件的值不受 React 管理，因此在某些情况下可能需要额外的验证和处理来确保数据的正确性。

3. 在 React 中如何获取某个 HTML 元素的内容

> 在 React 中，我们可以使用 `ref` 来获取某个 HTML 元素的内容。通过创建一个 ref 对象，并将其绑定到所需的元素上，然后可以通过访问 ref 的 current 属性来获取该元素的内容。
>
> 需要注意的是，使用 ref 来获取元素的内容通常是在用户与页面交互或者特定操作发生时触发的事件处理程序中进行的。这样可以确保在需要获取内容时，元素已经被正确渲染到 DOM 中。

4. 为什么在 React 中直接操作 DOM 不是一个好的事情

> 这是因为 React 是一个基于虚拟 DOM 的库。在 React 中，我们通过创建组件来描述页面的结构和行为，然后由 React 自动管理和更新实际的 DOM 元素。这使得 React 应用可以更快地相应用户交互，并且更容易维护和更新。
>
> 如果我们直接操作 DOM，那么就会破坏 React 的虚拟 DOM 和实际 DOM 之间的同步关系。这可能导致一些问题，比如：
> * 可能会与 React 的事件处理程序冲突，导致事件无法正确地触发或者处理
> * 可能会影响 React 组件的状态和生命周期方法
> * 可能会导致 React 组件重新渲染，从而降低应用性能
>
> 因此，我们要尽量避免直接在 React 中直接操作 DOM。相反，我们应该使用 React 提供的 API 和模式来管理和更新页面元素。例如：
> * 通过使用 ref 来获取某个元素的引用，并在必要时进行操作；
> * 通过使用 state 和 props 来管理组件的状态和属性，并使其自动更新等等。
>
> 这样可以确保应用的正确性、性能和可维护性。

5. React 中最常用的是受控还是非受控组件？

> 通常情况下，受控组件比非受控组件更常用。理由如下：
> 1. 更可靠的数据流向：受控组件将表单元素的值（或者其他状态）存储在组件的 state 中，并通过 props 传递 value 或者 onChange 方法来与表单元素进行交互。这种数据流向更可靠，可以确保 React 组件始终反映表单元素的当前值，而不会出现不一致的情况。
> 2. 更易于实现表单验证：由于受控组件将表单元素的值存储在组件的 state 中，因此可以在组件中轻松实现表单验证。通过在 onChange 等方法中检查用户输入的值，并根据需要更新组件的 state，可以有效地控制提交数据的准确性和安全性。
> 3. 更易于集成到 React 应用中：大多数 React 应用都使用状态管理库（比如 Redux 或者 Mobx）来管理全局状态。由于受控组件的值存储在组件的 state 中，因此更容易与这些状态管理库进行集成。相比之下，非受控组件的值存储在 DOM 中，可能需要额外的步骤才能将其转换为应用的状态。
>
> 非受控组件更适用于简单的交互和较少的数据处理。

6. 在开发非受控组件时需要什么？

> 在开发非受控组件时，需要考虑以下几点：
> 1. Refs：使用 refs 来获取对底层 DOM 元素的引用。这可以让我们在需要时直接访问 DOM 元素，而无需将其值存储在组件的 state 中
> 2. 默认值：为非受控组件提供适当的默认值。这样，即使组件未受控，用户仍然会看到一些初始值，并能够在需要时进行交互
> 3. 事件处理：编写事件处理程序来相应用户输入，并根据需要更新底层 DOM 元素的状态。这通常涉及到直接操作 DOM，而不是通过 React 的 state 和 props。
> 4. 副作用和数据同步：由于非受控组件的值存储在 DOM 中，因此需要格外注意副作用和数据同步的问题。确保在需要时正确地同步数据，以避免出现不一致的情况
> 5. 清理工作：在组件卸载时，需要进行必要的清理工作，例如取消订阅事件、解绑等操作。
>
> 总的来说，开发非受控组件需要更多地关注底层的 DOM 操作和状态管理，而不是依赖于 React 组件的 state 和 props。这种方式更适合一些简单的交互或与第三方库集成的情况，但需要开发人员更加小心地处理数据流和状态同步的问题。

7. 什么时候使用非受控组件

> 非受控组件通常在以下情况时使用：
>
> 1. 集成第三方库：当需要将 React 应用与不受 React 控制的第三方库（如 jquery 插件）进行集成时，非受控组件会更加方便。通过使用非受控组件，可以让第三方库自行管理组件的状态和行为，而不必受限于 React 的数据流模型。
> 2. 表单重置：对于需要频繁重置或者不需要进行表单验证的简单表单，可以考虑使用非受控组件。这样可以减少 React 组件中的状态管理逻辑，并简化开发过程。
> 3. 输入组件：对于一些输入组件，例如上传文件 input 或者富文本编辑器，由于其值无法完全由 React 状态来控制，因此通常会选择使用非受控组件。
> 4. 快速原型开发：在快速原型开发阶段，为了简化开发流程，可以选择使用非受控组件。这样可以更快地建立起交互界面，而无需过多关注状态管理和数据流。
>
> 总的来说，非受控组件更适合于一些简单的、自包含的交互元素，或者需要与非 React 代码进行集成的情况。但在实际使用时，需要谨慎处理数据同步和副作用，避免出现不一致的情况。

8. 什么时候需要使用受控组件

> 1. 表单验证：受控组件可以更轻松地实现表单验证逻辑，因为组件的状态始终会反映表单元素的值。这样可以通过在组件中编写逻辑来实现各种表单验证需求，例如必填字段、最小长度、邮箱格式验证等。
> 2. 动态表单：如果需要根据用户输入或其他条件动态更新表单的结构和内容，受控组件会更加方便。通过在组件的 state 中存储表单元素的值，可以方便地根据需要添加或删除表单元素，并重新渲染表单。
> 3. 多个输入组件之间的同步：如果多个输入组件之间需要进行数据同步（如选项卡中的表单），受控组件会更合适。通过在父组件中维护所有子组件的状态，并将其传递给每个子组件，可以确保各个组件之间的数据一致性。
> 4. 数据处理：如果需要对表单提交的数据进行处理（例如格式转换、过滤或加密），受控组件可以更好地满足这些需求。通过在组件的 state 中存储表单元素的值，并在提交表单时对其进行处理，可以更好地控制提交的数据。
>
> 总的来说，受控组件更适合于需要进行表单验证、动态更新表单结构、数据同步和数据处理的情况，能够更好地满足复杂交互元素的需求。但需要开发人员付出更多的状态管理和组件通信的成本。

9.  是否有用过受控或者非受控组件来完成表单验证？

> 有。
>
> - 受控组件：使用受控组件时，可以通过在组件的状态中存储表单元素的值，并编写逻辑来验证这些值。例如，可以在 onChange 事件处理程序中更新组件的状态，并在 onSubmit 事件处理程序中验证表单数据。这种方式需要在组件中显式地管理表单的状态和验证逻辑。
> - 非受控组件：对于非受控组件，可以使用 ref 来获取表单元素的值，并在提交表单时进行验证。可以使用原生 JavaScript 或其他验证库（如 Yup、Joi）来处理表单验证逻辑。这种方式相对于受控组件来说更加简洁，但需要更多的手动处理。

10. 在非受控组件中，是否需要将状态写入组件的输入中

> 在非受控组件中，通常不需要将状态写入组件的输入中。相反，可以通过 ref 属性获取表单元素的值，并在提交表单时进行验证。