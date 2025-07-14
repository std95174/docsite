# 管理實例

在 **My Instance** 頁面，您可以查看並管理所有實例的狀態與配置。以下是詳細功能介紹：

---

## **實例狀態**

在 **My Instance** 頁面中，您可以看到三種實例狀態：

1. **Running**：實例正在運行，您可以對其進行訪問或管理操作。
2. **Snapshotting**：實例正在執行快照操作，暫時無法進行其他管理操作。
3. **Released**：實例已被釋放，資源已回收，該狀態的實例無法再次啟動。

**每個狀態都有一個實例列表其欄位有**:

- **ID**：每個實例的唯一標識符。
- **Name**：實例名稱，方便用戶辨識。
- **Cost**：當前實例的計費狀態與累積費用。
- **Action**：可對實例進行的操作（詳見下方操作介紹）。

## ![Instance list](../../../../../docs/docs-images/p04/01.Instance%20list.jpg)

## **選項卡（Tabs）**

點擊實例列表中的其中一列，可以查看對應的實例並管理以下選項卡內容：

### **1. Access**

- **SSH Port 22**

  - 查看用於 SSH 連接的相關資訊：
    - **SSH Command**：`ssh -p <Service Port> root@<Access URL>`
    - **Service Port**：該實例的服務端口。
    - **User**：默認用戶名為 `root`。
    - **Password**：初始密碼（加密顯示）。

- **HTTP Port 8888**

  - 提供以下操作：
    - **Link**：快速跳轉到 HTTP 地址。
    - **Open**：在新標籤頁中打開該連結。
    - **Copy**：複製 HTTP 地址。
    - **Edit**：編輯端口設置（若可用）。
    - **Delete**：刪除該端口的配置。

- **New Port Forwarding**：點擊此按鈕新增端口轉發規則，填入以下資訊：

  - **Service Port**：設定服務端口。
  - **Protocol**：選擇協議類型（目前只支援 HTTPS）。

## ![Access](../../../../../docs/docs-images/p04/02.Access.jpg)

### **2. Monitor**

即時查看實例的效能與資源使用狀況。

## ![Monitor](../../../../../docs/docs-images/p04/03.Monitor.jpg)

### **3. Billing**

顯示與該實例相關的所有計費明細。

## ![Billing](../../../../../docs/docs-images/p04/04.Billing.jpg)

### **4. Config**

查看實例的配置，如映像檔相關參數設置。

## ![Config](../../../../../docs/docs-images/p04/05.Config.jpg)

### **5. Hardware**

檢查實例的硬件配置，包括 GPU 或 CPU 型號、內存、存儲等。

## ![Hardware](../../../../../docs/docs-images/p04/06.Hardware.jpg)

### **6. Network Group**

查看實例的網絡集群。

## ![Network Group](../../../../../docs/docs-images/p04/07.Network%20Group.jpg)

---

## **實例狀態是 Running 時可執行的操作**

在 action 欄位有 `Take Snapshot` 和 `Release` 兩個按鈕

### **1. Take Snapshot**

- **功能**：創建當前實例的快照，用於保存實例的狀態、配置與數據。
- **使用情境**：
  - 保存重要配置或狀態以供日後使用。
  - 為後續創建實例提供參考基礎。

#### **Take Snapshot 詳細操作流程**

1. **點擊 Action 欄位中 `Take Snapshot` 按鈕，將彈出快照創建窗口。**

## ![Take Snapshot](../../../../../docs/docs-images/p04/08.Take%20Snapshot.jpg)

2. **填寫快照資訊**：

   - **Name**：填寫快照名稱。
   - **Automatic release of machine after successful saving**：若勾選此選項，保存完成後實例將自動釋放。

3. **查看快照進程**：

   - 保存過程中，實例會顯示於 **Snapshotting** 的標籤頁，並依次顯示狀態變化：

     - **Suspending** → **Paused** → 從列表中消失。

     ## ![Snapshotting](../../../../../docs/docs-images/p04/09.Suspending.jpg)

     ## ![Snapshotting](../../../../../docs/docs-images/p04/10.Paused.jpg)

   - 實例保存完成後，不會再出現在 **My Instance** 頁面中，而是存儲為快照，可在 **Snapshots** 頁面中查看。

4. **完成後的影響**：

   - 快照保存過程中，實例將暫停運行，並在保存完成後自動恢復或釋放（取決於是否勾選自動釋放）。

#### **注意事項**

- 保存過程中實例將暫時無法使用，並自動恢復連線後才能再次操作。
- 快照保存需要足夠的個人存儲空間，請提前確認。

---

### **2. Release**

- **功能**：釋放實例資源，並將實例轉為 **Released** 狀態。
- **使用情境**：當您不再需要此實例時，可以選擇釋放來回收資源，停止費用計算。

#### **Release 詳細操作流程**

1. **點擊 Action 欄位中 `Release` 按鈕**，將彈出確認窗口。

## ![Release](../../../../../docs/docs-images/p04/11.Release.jpg)

2. **確認釋放**：

   - 系統會提示相關注意事項，例如數據刪除與不可恢復性。
   - 點擊 `Stop & Release` 確認釋放操作。

3. **釋放過程的狀態更新**：

   - 實例狀態將變為 **Releasing**，並最終更新為 **Released**。

4. **完成後的影響**：

   - **Released 狀態的實例將顯示於 Released 標籤頁中。**
   - 被釋放的實例無法再次啟動，所有未保存的數據將被刪除。

   ## ![Released](../../../../../docs/docs-images/p04/12.Released%20list.jpg)

#### **注意事項**

- **無法復原**：釋放操作無法撤銷，請確保不再需要此實例。
- **費用計算**：釋放後，該實例的資源使用費用將停止計算。
- **快照建議**：若需保留數據，請在釋放前進行 **Take Snapshot** 操作。

---

## **注意事項總結**

1. **Snapshotting 和 Released 限制**：

   - 在這兩個狀態下，僅能檢視 **Config** 和 **Hardware** 選項卡，無法執行其他操作。

2. **釋放與快照建議**：

   - 在選擇釋放操作前，請務必確認是否需要保留當前數據。
   - 定期創建快照可以幫助保存關鍵數據。

3. **操作影響**：

   - 某些操作（如快照與釋放）可能會中斷實例的正常使用，請合理安排時間進行。

以上是關於實例管理的完整指南，若需要更詳細的說明，請參考後續章節。
