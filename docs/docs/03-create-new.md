---
id: create-new
sidebar_position: 3
---

# Creating a New Instance

In this chapter, we will guide you on how to create a new instance on **Glows.AI**. Based on your project requirements, you can select either **GPU** or **CPU** models. Below are the detailed steps.

---

## **Step 1: Select Instance Type**

After navigating to the **Create New** page, the first step is to select the instance type:

- **GPU**: Select this option if you require AI training, large-scale data processing, or graphics-intensive tasks.
- **CPU**: Select this option if you prefer to debug the code on the CPU before switching to the GPU for training, or if your tasks require robust processing power without the need for GPU acceleration.

![Instance Type](../docs-images/p03/01.Instance%20type.jpg)

---

## **Step 2: Select GPU or CPU Model**

**GPU Model**:

- After selecting **GPU**, detailed specifications will be displayed, including:

  - **GPUs**: Number of GPUs available.
  - **GPU RAM**: Total memory of the GPU.
  - **CPU Model**: CPU model paired with the GPU.
  - **Avail Unit**: Number of units available for the selected GPU model.
  - **vCPUs**: Number of virtual CPUs associated with the GPU.
  - **RAM**: Total memory of the instance.
  - **Storage**: Available storage space.
  - **Price/h**: Hourly cost (in Credits).

**CPU Model**:

- After selecting **CPU**, you will see CPU-specific options only:
  - **Avail Unit**: Number of units available for the selected CPU model.
  - **vCPUs**: Number of virtual CPUs.
  - **RAM**: Memory of the instance.
  - **Storage**: Storage space of the instance.
  - **Price/h**: Hourly cost (in Credits).

![GPU Model Options](../docs-images/p03/02.GPU%20options.jpg)

---

## **Step 3: Select Official Image or Snapshot**

1. After selecting the GPU or CPU model, you can choose either `Official Image` or `Snapshot`:

   - **Official Image**: Provides a preconfigured environment for your instance.
   - **Snapshot**: Displays previously created instances saved as snapshots. Selecting a snapshot allows you to resume prior work environments and configurations, saving time on reconfiguration.

2. Once selected, the information of the chosen item will be displayed on the right:
   - **Selected Snapshot**: For example, `img-6np5vq2x - DeepSeek-R1 70B_Q4`.

![Official Image](../docs-images/p03/03.Selected%20Image.jpg)

---

## **Step 4: Set Unit Quantity**

**Unit Quantity**: Specifies the number of units required for the selected model. In our configuration, the "unit" represents a multiplier of the basic resources. One unit includes a set of predefined hardware parameters, such as GPU and VRAM. When users set the unit quantity, the system expands the resources based on the number of units. For example, setting it to 2 units will double the GPU and VRAM configuration of the base unit.

> Different parameters have their unit limits. Please adjust within the allowable range to ensure reasonable configurations.

![Unit Qty](../docs-images/p03/04.Unit%20Qty.jpg)

---

## **Step 5: Mount Data Drive (Optional)**

1. If you need to mount a data drive, click the `Mount Data Drive` button and configure the following:

   - **Data Drive List**: Displays available drive options, including:
     - **Region** (e.g., 1).
     - **Usage**: Shows used and total capacity, e.g., **0/2GB**.
   - **Mount Path**: Default is **/datadrive** (currently not editable).
   - **Permissions**: Choose the drive's access permissions:
     - **Read only**.
     - **Read & write**.

2. After selection, the data drive mounting setup will be complete.

![Mount Data Drive](../docs-images/p03/05.Mount%20Data%20Drive.jpg)

---

## **Step 6: Review Pricing and Instance Details**

After completing your configuration, a summary of your selections will be displayed at the bottom of the page:

- **Price/h**: Hourly cost of the selected instance.
- **Instance Ordered**: Number of instances you have ordered.
- **Show Detail**: Click this button to view detailed specifications of the selected instance.

Example:

- **Price/h**: 1.600 Credits
- **Instance Ordered**: 1

![Price and Detail](../docs-images/p03/06.Price%20and%20Detail.jpg)

---

## **Step 7: Create Instance**

After confirming the instance details and pricing, click `Complete Checkout` to finalize the order and create the instance.

![Confirmation](../docs-images/p03/07.Confirmation.jpg)

---

## **Notes**

- **Mount Data Drive (Optional):**  
  If you have a large amount of local data or code that needs to be used in the cloud, we recommend setting up **Datadrive** first and uploading your files there. This allows you to avoid the time-consuming process of transferring data after launching an instance.

  👉 [Click here to view the Datadrive user guide](https://docs.glows.ai/zh-TW/docs/datadrive)

  It’s recommended to store data-related files such as **models, datasets, and source code** in Datadrive. It supports **offline uploading and downloading**, so you can manage your files without launching any instance.

- **Snapshot Selection Restrictions:**  
  Only options successfully stored in the snapshot area will be displayed. If no snapshots are available, ensure you have completed the storage configuration on the "Storage Configuration" page and saved previously created instances as snapshots on the "My Instances" page.

---

Following the above steps, you will successfully create a new instance on **Glows.ai** and configure it according to your requirements. Next, we will guide you on how to manage and monitor your instances.
