import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';
// 游戏控制器
class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string = 'Right'
  isLive = true
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.init()
  }

  // 初始化
  init() {
    // 绑定键盘事件
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }

  keydownHandler(event: KeyboardEvent) {
    // 只允许上下左右
    const arrow = ['up', 'down', 'left', 'right']
    const isTrue = arrow.findIndex(key => event.key.toLocaleLowerCase().indexOf(key) > -1) > -1
    if (isTrue) {
      this.direction = event.key
    }
  }

  // 移动方法
  run() {
    /**
     * 根据方向 this.direction 来使蛇的位置改变
     * 上 top --
     * 下 top ++
     * 左 left --
     * 右 right ++
     */

    // get current position
    let X = this.snake.X
    let Y = this.snake.Y

    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10
        break;
      default:
        break;
    }

    this.checkEat(X, Y)

    // 直接捕获 Snake 里的错误
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch(e) {
      alert(e)
      this.isLive = false
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  // 吃到食物
  checkEat(x: number, y: number) {
    if (x === this.food.X && y === this.food.Y) {
      // 食物方法重置
      this.food.change()
      // 分数增加
      this.scorePanel.addScore()
      // 增加一节
      this.snake.addBody()
    }
  }
}

export default GameControl