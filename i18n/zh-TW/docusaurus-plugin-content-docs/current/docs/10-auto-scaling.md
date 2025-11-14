---
id: auto-scaling
sidebar_position: 10
---

# Auto Scaling 功能

在 **Auto Scaling** 頁面，您可以管理和創建新的擴展規則，以自動調整資源的分配，根據系統負載動態擴展或縮減資源，優化運行效率。以下是功能介紹與操作指南：

---

## **Auto Scaling** 頁面顯示兩種標籤頁：

- **Auto Scaling** 顯示所有正常運行的擴展規則，您可以查看並管理當前的規則列表。
- **Suspended** 顯示已暫停的規則列表，這些規則可在需要時重新啟動。

### **規則列表欄位**

- **ID**：規則的唯一標識符。
- **Name**：為 Auto Scaling 規則制定的名稱，以方便辨識。
- **Status**：Auto Scaling 規則的是否處於運行狀態（例如：Running, Suspended）。
- **Cost**：當前累積的費用。
- **Last Execution Time**：最新執行的時間。
- **Action**：可執行的操作（如下詳細說明）。

### **操作按鈕（Actions）**

- **Edit**：修改規則的詳細設置。
- **Suspend**：停止執行規則。選擇此操作後，該規則將停止對系統負載的監控和資源調整操作，並被移至 Suspended 標籤頁。暫停的規則可以在需要時重新啟動。
- **Delete**：刪除規則。

![Auto scaling list](../../../../../docs/docs-images/p07/01.Auto%20scaling%20list.jpg)

---

## **創建新規則**

### **步驟 1：設定規則資訊**

點擊右上角的 `New Scaling Rule` 按鈕，出現創建新規則的畫面。

- 填入 **Rules Name** 和選擇 **Resource Type**（目前僅有 **Instance**）。
  ![New Scaling Rule](../../../../../docs/docs-images/p07/02.New%20Scaling%20Rules.jpg)

### **步驟 2：設定 Scaling Target**

- 選擇 **Instance** 並查看相關資訊。
- 設定 **Protocol**（目前僅支持 **http**），並填入 **Port**。
- 設定 **Start Command**：

  - **Start Command**：在 Auto Scaling 過程中，新的實例在啟動後所執行的內部命令，用於啟動實例內部的自定義服務或模型。如果不填，系統將使用預設的啟動命令。例如，Linux 系統可能使用 `systemctl start <service>` 或 `/etc/init.d/<service> start`。如果需要特定命令來啟動應用，請根據實際需求填寫。

  ![New Scaling Rule](../../../../../docs/docs-images/p07/03.Scaling%20Target.jpg)

### **步驟 3：設定 Scaling Rules**

- 填入 **Elastic Quantity Control Minimum** 和 **Elastic Quantity Control Maximum**：

  > **Elastic Quantity Control Minimum**：設置系統可以縮減到的最小資源數量，確保系統在低負載時保持基本運行。這個值應設為服務運行所需的最少實例數量，通常為 0 或 1，具體根據你的服務需求來決定。

  > **Elastic Quantity Control Maximum**：設置系統可以擴展到的最大資源數量，防止過度擴展並控制成本。這個值應設為服務能夠承擔的最大實例數量，通常根據預計的流量或負載來設定。

  ![Scaling Rule](../../../../../docs/docs-images/p07/04.Elastic%20Quantity%20Control.jpg)

### **步驟 4：設定 Load Metric（可選）**

- 點擊 `More Load Metric` 按鈕：

  - **More Load Metric** 是用來添加額外的負載指標，以便根據更具體的性能需求調整資源。

- 填入 **Metric Name**、**Description**

- 選擇 **Baseline Type**，填入 **Baseline Value**：

  > **Numeric Baseline**：設定一個具體的數值基線，當資源的使用量超過或低於這個基線時觸發擴展或縮減。

  > **Ratio Baseline**：設定一個比例基線，根據特定資源的比例來調整。

- 填入 **Retrieve Address**：

  - **Retrieve Address** 是指向負載指標數據來源的地址，通常是一個 API URL 或監控系統的終端點。這個地址用於向系統或應用提供負載數據，幫助決定是否觸發擴展或縮減。舉例來說，這可能是從監控系統獲取負載數據的 URL，像是 `http://your-monitoring-system/api/metrics`。

  ![Scaling Rule](../../../../../docs/docs-images/p07/05.More%20Load%20Metric.jpg)

### **步驟 5：成功創建規則**

確認所有設定後，點擊頁面右下角的確認按鈕完成創建，就能在列表中看到創建成功的規則。
![Rule list](../../../../../docs/docs-images/p07/06.Rule%20list.jpg)

---

## **注意事項**

- **規則的管理：**
  已創建的規則可在 **Auto Scaling** 或 **Suspended** 列表中進行編輯、暫停或刪除操作。

- **擴展條件設置**：
  正確設置擴展條件（如 **Elastic Quantity Control** 和 **Baseline Type**）有助於系統資源的高效使用。

- **資源優化**：
  定期檢查和調整規則設定，確保資源根據實際負載進行適當的擴展或縮減。

---

通過這些設置，您可以自動化資源管理，提升系統的彈性和可靠性。
