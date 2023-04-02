
class ScorePanel {
  score = 0
  level = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  maxLevel: number
  shouldUpLevelScore: number
  
  constructor(maxLevel: number = 10, shouldUpLevelScore: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel
    this.shouldUpLevelScore = shouldUpLevelScore
  }

  // 设置加分
  addScore() {
    this.scoreEle.innerHTML = ++this.score + '';
    // 分数多少来调用升级
    if (this.score % this.shouldUpLevelScore === 0) {
      this.levelUp()
    }
  }

  // 提升等级
  levelUp() {
    // 等级上限
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}

export default ScorePanel