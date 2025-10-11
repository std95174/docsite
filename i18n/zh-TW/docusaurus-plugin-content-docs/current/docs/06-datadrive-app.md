---
id: datadrive-app
sidebar_position: 6
---

# Datadrive 桌面版

本教學將帶您快速上手 **Glows.ai Datadrive 桌面版**，它是由 Glows.ai 網頁版的 **Datadrive** 功能延伸開發的桌面應用程式， 提供更靈活的雲端資料管理體驗，讓您在本機與雲端間的檔案上傳、下載、同步都能更高效穩定。

透過 Datadrive 桌面版，您可以方便地瀏覽、編輯及管理多個 Drives，同時支援從外部資源（如 GitHub 與 Hugging Face ）匯入，協助團隊或個人專案快速整合、部署與備份。

---

## 步驟 1：安裝 Datadrive 桌面版

請前往 **Glows.ai** 官方網站，點選頂部選單中的 `Product`，  
於下拉選單選擇 `Datadrive`（如下圖），即可進入下載頁面。

![OfficialWebsite](../../../../../docs/docs-images/p06App/01.OfficialWebsite.png)

或直接造訪下載頁面：  
👉 [https://glows.ai/datadrive](https://glows.ai/datadrive)

![Download](../../../../../docs/docs-images/p06App/02.png)

請依您的作業系統下載對應版本，目前支援 Windows 與 Mac，未來將陸續支援更多作業系統版本，敬請期待。

---

### Windows 版本

1. 下載安裝檔後，雙擊執行安裝程式。
2. 依畫面指示完成安裝，即可啟用 Datadrive 桌面版。

---

### Mac 版本

1. 下載後，將應用程式 `Drive PC` 拖曳到 `Applications` 資料夾（如下圖）。
2. 於 `Dock` 中點擊以開啟應用程式。

![Mac Download](../../../../../docs/docs-images/p06App/03.png)

> 若開啟時出現  
> `"Drive PC" is damaged and can't be opened...`  
> 請開啟 `Terminal`，執行以下指令以解除限制：

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Drive PC.app"
```

![Mistake](../../../../../docs/docs-images/p06App/04.png)

---

## 步驟 2：登入帳號

開啟 Datadrive 桌面版後，可使用以下方式登入：

1. 點擊 `Continue with Google`，使用 Google 帳號快速登入。
2. 輸入 **Email** 與 **Password**，點擊 `Login`。
3. 若尚未註冊帳號，請點擊 `Sign up` 前往註冊頁面。

![Sign In](../../../../../docs/docs-images/p06App/05.png)

---

## 步驟 3：管理現有資料

登入後將進入 `Dashboard`，可即時檢視各區域 Drive 的已用與剩餘容量，
後續亦會陸續新增 `Instance`、`Snapshot` 等管理功能。

![Dashboard](../../../../../docs/docs-images/p06App/06.png)

點擊左下角選單中的 `Drive #0`，可展開檢視您所擁有的各區域 Drives，如下圖所示：

![Drive #0](../../../../../docs/docs-images/p06App/07.png)

進入所選 Drive 後，將看到檔案與資料夾清單，勾選項目後，畫面下方會顯示四個操作選項：

- **Download**：下載到本機
- **Move**：移動到其他目錄
- **Rename**：重新命名
- **Delete**：刪除檔案

![List](../../../../../docs/docs-images/p06App/08.png)

---

### 下載進度

執行下載後，可在 `Transfer` 頁面查看進度。

![TransferDownload](../../../../../docs/docs-images/p06App/09.png)

---

## 步驟 4：上傳或匯入檔案/資料夾

點擊 `Upload or Import`，可使用以下三種方式將檔案/資料夾上傳至雲端 Drive：

![UploadOrImport](../../../../../docs/docs-images/p06App/10.png)

### 1. 直接上傳

選擇 `Upload File` 或 `Upload Folder`，從本機挑選欲上傳的檔案或資料夾。

### 2. 從 GitHub 匯入

- 點擊 `Import from GitHub`，輸入專案連結後按 `View`。
- 在 GitHub 檔案總管中選擇所需檔案或分支，按 `Import` 開始匯入。

![GitHubList](../../../../../docs/docs-images/p06App/11.png)

![GitHubList](../../../../../docs/docs-images/p06App/12.png)

---

### 3. 從 Hugging Face 匯入

- 點擊 `Import from Hugging Face`，輸入專案連結後按 `View`。
- 於 Hugging Face 檔案總管中瀏覽與選擇，點擊 `Import` 開始匯入。

![HuggingFace](../../../../../docs/docs-images/p06App/13.png)

![HuggingFaceList](../../../../../docs/docs-images/p06App/14.png)

---

### 上傳進度

在 `Transfer` 介面可查看上傳進度，完成後即可於對應 Drive 中看到檔案。

![TransferUploading](../../../../../docs/docs-images/p06App/15.png)

---

## 步驟 5：其他設定

點擊右上角頭像，再選擇 `Settings` 以進行更多功能設定。

![Setting](../../../../../docs/docs-images/p06App/16.png)

---

### Drive Setting

- 調整語言、時區或 12/24 小時制。
- 若遇到問題，可點擊 `Export Log File` 匯出日誌檔並回報給 Glows.ai 協助排查。
- 若您下載檔案時網速較慢或受網路限制，可在此設定 `Proxy Server` 與 `Proxy Port`，讓 `Datadrive` 桌面版透過您本機或公司內部的代理伺服器進行傳輸，以改善下載與上傳效能。
- 點選 `Check for Updates`，隨時手動檢查並下載最新版本。

![DriveSetting1](../../../../../docs/docs-images/p06App/17.png)

![DriveSetting2](../../../../../docs/docs-images/p06App/18.png)

---

### Transfer Setting

- 上傳大型檔案時，請勾選 `Prevent Sleep When Cloud Drive is Active`，以避免電腦進入睡眠影響傳輸。
- 可於 **Download Directory** 自訂下載檔案的預設路徑。
- 若下載 `Hugging Face` 資料需授權，可在 **Hugging Face Token** 中設定。

![TransferSetting](../../../../../docs/docs-images/p06App/19.png)

---

## 聯繫我們

若您在使用 Datadrive 桌面版的過程中有任何疑問或建議，歡迎透過以下方式聯繫我們：

**Email：** [support@glows.ai](mailto:support@glows.ai)

**Discord**: [https://discord.com/invite/glowsai](https://discord.com/invite/glowsai)

**Line：** [https://lin.ee/fHcoDgG](https://lin.ee/fHcoDgG)
