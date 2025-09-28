---
id: mesh-clustering
sidebar_position: 11
---

# Mesh Clustering

在 **Mesh Clustering** 頁面，您可以管理和創建不同類型的網絡資源，包括網絡群組 (Network Group)、負載平衡器 (Load Balancer)，以及集群 (Cluster)。目前僅支持 **Network Group** 的管理。以下是頁面介紹與操作指南：

---

## **標籤頁介紹**

- **Network Group**：顯示所有網絡群組的列表。
- **Load Balancer**：將來會顯示負載平衡的列表（目前尚未開放）。
- **Cluster**：將來會顯示集群的列表（目前尚未開放）。

### **列表欄位**

- **ID**：網絡資源的唯一標識符。
- **Name**：網絡資源的名稱。
- **Capacity**：當前已使用的實例數量與總容量，例如 0/5。
- **Action**：可執行的操作，包括 **Edit** 和 **Delete**。
  ![Mesh list](../../../../../docs/docs-images/p09/01.Mesh%20list.jpg)

---

## **創建新 Mesh**

點擊右上角的 `Create New` 按鈕，進入創建新 Mesh 的頁面：

1. **選擇 Mesh Type**：目前僅支持 **Network Group**。
2. **填入 Name**：為新 Mesh 指定一個名稱。

![Create New Mesh](../../../../../docs/docs-images/p09/02.Create%20Mesh.jpg)

---

## **新增 Instance 到 Mesh**

創建 Mesh 後，您可以將實例加入其中：

1. 在列表中點擊剛剛新增的 Mesh，進入詳細頁面。
2. 點擊 `Add Instance` 按鈕，彈出添加實例的畫面。
3. 左側列表顯示所有目前處於 **Running** 狀態的實例。
4. 勾選想要加入的實例，然後點擊箭頭按鈕將其加入到 Mesh 中。
5. 加入的實例將出現在右側列表中。

![Add Instance](../../../../../docs/docs-images/p09/03.Add%20Instance.jpg)

### **移除 Instance**

- 在右側列表中勾選要移除的實例，然後點擊 `Remove Selected` 按鈕。
- 或者直接點擊實例 **Action** 欄位中的垃圾桶圖示，該實例會移回左側列表。

![Remove Instance](../../../../../docs/docs-images/p09/04.Remove%20Instance.jpg)

---

## **查看加入的 Instance 資訊**

成功加入 Mesh 後，點擊該 Mesh，將顯示已加入的實例信息，包括：

- **IP CIDR**：表示實例的 IP 地址範圍，例如 **192.168.3.2/24**，這個範圍定義了實例可用的 IP 地址和子網路遮罩。
- **ID**：實例的唯一標識符。
- **Name**：實例名稱。
- **Brandwidth**：實例的頻寬，例如 **100 Mbps**。
- **Status**：實例當前狀態。
- **Action**：包含 **Disconnect** 操作，用於移除該實例。

![Mesh Instance Info](../../../../../docs/docs-images/p09/05.Mesh%20Instance%20Info.jpg)

---

此設置讓您能夠靈活管理網絡資源，根據需求調整網絡配置。
