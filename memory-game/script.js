class MemoryGame {
    constructor() {
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.gameStarted = false;
        this.timer = null;
        this.seconds = 0;
        
        this.icons = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
        this.gameBoard = document.getElementById('game-board');
        this.movesDisplay = document.getElementById('moves');
        this.timeDisplay = document.getElementById('time');
        this.resetBtn = document.getElementById('reset-btn');
        this.winMessage = document.getElementById('win-message');
        this.finalMoves = document.getElementById('final-moves');
        this.finalTime = document.getElementById('final-time');
        this.playAgainBtn = document.getElementById('play-again-btn');
        
        this.init();
    }
    
    init() {
        this.createCards();
        this.shuffleCards();
        this.renderCards();
        this.bindEvents();
    }
    
    createCards() {
        this.cards = [];
        // 為每個圖示創建兩張卡片
        this.icons.forEach(icon => {
            this.cards.push({ icon, isFlipped: false, isMatched: false });
            this.cards.push({ icon, isFlipped: false, isMatched: false });
        });
    }
    
    shuffleCards() {
        // Fisher-Yates 洗牌算法
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    
    renderCards() {
        this.gameBoard.innerHTML = '';
        this.cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.dataset.index = index;
            
            if (card.isFlipped || card.isMatched) {
                cardElement.textContent = card.icon;
                cardElement.classList.add('flipped');
                if (card.isMatched) {
                    cardElement.classList.add('matched');
                }
            }
            
            this.gameBoard.appendChild(cardElement);
        });
    }
    
    bindEvents() {
        this.gameBoard.addEventListener('click', (e) => {
            if (e.target.classList.contains('card')) {
                this.flipCard(parseInt(e.target.dataset.index));
            }
        });
        
        this.resetBtn.addEventListener('click', () => {
            this.resetGame();
        });
        
        this.playAgainBtn.addEventListener('click', () => {
            this.hideWinMessage();
            this.resetGame();
        });
    }
    
    flipCard(index) {
        const card = this.cards[index];
        
        // 如果卡片已經翻開或已配對，則忽略
        if (card.isFlipped || card.isMatched) {
            return;
        }
        
        // 如果已經有兩張卡片翻開，則忽略
        if (this.flippedCards.length >= 2) {
            return;
        }
        
        // 開始遊戲計時
        if (!this.gameStarted) {
            this.startTimer();
            this.gameStarted = true;
        }
        
        // 翻開卡片
        card.isFlipped = true;
        this.flippedCards.push(index);
        this.renderCards();
        
        // 如果翻開了兩張卡片，檢查是否配對
        if (this.flippedCards.length === 2) {
            this.moves++;
            this.movesDisplay.textContent = this.moves;
            
            setTimeout(() => {
                this.checkMatch();
            }, 1000);
        }
    }
    
    checkMatch() {
        const [index1, index2] = this.flippedCards;
        const card1 = this.cards[index1];
        const card2 = this.cards[index2];
        
        if (card1.icon === card2.icon) {
            // 配對成功
            card1.isMatched = true;
            card2.isMatched = true;
            this.matchedPairs++;
            
            // 檢查是否遊戲結束
            if (this.matchedPairs === this.icons.length) {
                this.endGame();
            }
        } else {
            // 配對失敗，翻回卡片
            card1.isFlipped = false;
            card2.isFlipped = false;
        }
        
        this.flippedCards = [];
        this.renderCards();
    }
    
    startTimer() {
        this.timer = setInterval(() => {
            this.seconds++;
            this.updateTimeDisplay();
        }, 1000);
    }
    
    updateTimeDisplay() {
        const minutes = Math.floor(this.seconds / 60);
        const seconds = this.seconds % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        this.timeDisplay.textContent = timeString;
    }
    
    endGame() {
        clearInterval(this.timer);
        this.gameStarted = false;
        
        // 顯示獲勝訊息
        this.finalMoves.textContent = this.moves;
        this.finalTime.textContent = this.timeDisplay.textContent;
        this.showWinMessage();
    }
    
    showWinMessage() {
        this.winMessage.classList.add('show');
    }
    
    hideWinMessage() {
        this.winMessage.classList.remove('show');
    }
    
    resetGame() {
        // 重置遊戲狀態
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.gameStarted = false;
        this.seconds = 0;
        
        // 清除計時器
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        // 重置顯示
        this.movesDisplay.textContent = '0';
        this.timeDisplay.textContent = '00:00';
        
        // 重新初始化遊戲
        this.createCards();
        this.shuffleCards();
        this.renderCards();
    }
}

// 當頁面載入完成後初始化遊戲
document.addEventListener('DOMContentLoaded', () => {
    new MemoryGame();
}); 