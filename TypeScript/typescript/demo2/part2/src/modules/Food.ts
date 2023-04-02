// 定义类——食物
class Food {
  // 定义一个属性表示食物所对应的元素
  element: HTMLElement;

  constructor() {
    // 因为可能会拿到 null（页面没有渲染完成）或者元素为动态加载
    // 所以这里我们直接在最后面加一个感叹号表示不会为空
    this.element = document.getElementById('food')!;
  }

  // 定义一个获取食物 X 轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  // 修改食物位置的方法
  change() {
    /**
     * 生成一个随机位置
     * 1. 食物的坐标范围，min 0 max 290 
     * 2. 每次移动 10，所以坐标也需要为整十的
     */

    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.left = top + 'px';
    this.element.style.top = left + 'px';
  }
}

export default Food
