class Snake {
  head: HTMLElement; // 舌头
  bodies: HTMLCollection;
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('snake')!
    // 使用类型断言
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div')
  }

  // 获取蛇头的坐标
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }

  // 设置蛇头的坐标
  set X(value: number) {
    if (this.X === value) return
    // 是否撞墙
    if (value < 0 || value > 290) {
      throw new Error('撞墙了！')
    }

    // 修改 X 时，是在修改水平坐标，不能直接调头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      // 不让调头呗
      // 如果发生了调头，让蛇反方向进行移动
      if (value > this.X) {
        // 如果新值 value 大于之前的值，说明蛇在往右走
        // 此时发生调头，应该使蛇继续往左走
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }

    this.moveBody()

    this.head.style.left = value + 'px'
    this.checkHeadBody()
  }
  set Y(value: number) {
    if (this.Y === value) return
    // 是否撞墙
    if (value < 0 || value > 290) {
      throw new Error('撞墙了！')
    }

    // 修改 X 时，是在修改水平坐标，不能直接调头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      // 不让调头呗
      // 如果发生了调头，让蛇反方向进行移动
      if (value > this.Y) {
        // 如果新值 value 大于之前的值，说明蛇在往右走
        // 此时发生调头，应该使蛇继续往左走
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }
    
    this.moveBody()

    this.head.style.top = value + 'px'
    this.checkHeadBody()
  }

  // 增加身体
  addBody() {
    this.element.insertAdjacentHTML('beforeend', "<div></div>")
  }

  moveBody() {
    // 从后往前改
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  checkHeadBody() {
    // 获取所有坐标，检查其是否和蛇头的坐标发生重叠
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error("撞自己了");
        
      }
    }
  }
}

export default Snake