# 2022_ScoreKeeper
- FRC 2022 ScoreKeeper 操作說明
- 網路連結 : https://hackmd.io/@John40066/HJfsLyuCY

## 分數表
![](https://i.imgur.com/LSNcvj0.png)


## 使用說明
### :wrench: 步驟 
1. 先設定好「隊伍名單」
2. 再設定好「賽程」
3. 將每場比賽結果輸入
4. 即可以看到排名及每場對戰的結果
![](https://i.imgur.com/Xs63PWY.png =400x)

#### :busts_in_silhouette: Setup Teams
![](https://i.imgur.com/AUsf0zr.png)

- 按下 `Add New Team` 即可新增隊伍名稱(Name)及編號(Number)，按下 `Add Team / Modify Change` 即會顯示在下方，表示成功加入新的隊伍。
- 若按下紅色刪除扭並對彈出的視窗按下確定，即可刪除該隊伍
- 按下編輯即可更改隊伍名稱(Name)及編號(Number)，按下 `Add Team / Modify Change` 儲存修改並顯示新的結果在下分
- 按下 `Save & Return` 才會儲存並會到 Main DashBoard
:::danger
- 若直接返回上一頁，就不會儲存剛剛的任何動作!!!!
:::
#### :game_die: Setup Matches
![](https://i.imgur.com/PYgSFpV.png)
- 操作方式跟新增隊伍一樣(會自動排序 #Match)

:::danger
- 有可能會有不計分的代打情況，目前解決方式是
1. 新增隊伍且該編號小於等於 0 (例如 11047 有代打，就可以新增編號 -11047)
2. 再新增比賽時，將該隊伍用小於等於 0 的編號輸入
3. 計算 Ranking 時，並不會將編號小於等於 0 的顯示
:::

#### :memo: Control Match Result

![](https://i.imgur.com/jMiTe93.png)

1. 先選則左側的場次(可透過上方隊伍編號的改變知道有無選擇成功)
2. 再將結果輸入到右側的表單中
3. 按下 Summit 並按下彈出視窗的確認即可儲存該場次結果
4. 呈現綠色的場次表示完成輸入，再次點選即可重新繳交(Summit)或刪除(Delete)
5. Delete 會將表單中的數值變成初始狀態，若是已經繳交(Summit)的場次則會刪掉紀路，左側也會從綠色變回灰色。

#### :tv: Display

- :page_facing_up: Match Result

![](https://i.imgur.com/PTxZs4S.png)
會顯示每場的藍紅方隊伍編號，即結果(紅色為紅方獲勝，藍色為藍方獲勝，綠色為平手)

- :signal_strength: Ranking

![](https://i.imgur.com/3nfy5eN.png)
> 說明 : 

|Rank|Team #|RS|AMP|AHP|Auto|W-L-T|
|-|-|-|-|-|-|-|
|排名|隊伍編號|平均 RP|平均總分(不含Penalty)|平均吊掛分|平均自主分| Win(勝場數)-Lose(敗場數)-Tie(平手數)|

![](https://i.imgur.com/7qctaIk.png)

- **RS (Rank Score)計算方式** : RS = 總 RP / 場次
- **RP (Rank Point) 計算方式** : 勝場+2，平局+1，過吊掛分門檻+1，過貨物量門檻+1 (也就是一場最多+4，輸了也可以透過任務增加RP)
- 吊掛分門檻 : 16 分(含)以上
- 貨物量門檻 : 進 20 顆球(含)以上 ，若自主時間投入至少 5 顆球，則門檻降為 18 顆球(含)以上 (不分高低籃框)

## 其他
我有盡量做防呆了機制了，但有些部分做起來很麻煩也沒必要，所以盡量不要亂按或是部分功能使用到一半時做別的事情
