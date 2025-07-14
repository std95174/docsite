# Auto Scaling Feature

On the **Auto Scaling** page, you can manage and create new scaling rules to automatically adjust resource allocation. This allows dynamic scaling up or down of resources based on system load, optimizing operational efficiency. Below is an introduction to the feature and a step-by-step guide:

---

## The **Auto Scaling** page displays two tabs:

- **Auto Scaling**: Shows all active scaling rules, allowing you to view and manage the current list of rules.
- **Suspended**: Displays a list of paused rules, which can be reactivated when needed.

### **Rule List Columns**

- **ID**: The unique identifier for the rule.
- **Name**: The name designated for the Auto Scaling rule for easy identification.
- **Status**: The operational status of the Auto Scaling rule (e.g., Running, Suspended).
- **Cost**: The accumulated cost.
- **Last Execution Time**: The latest execution time.
- **Action**: The available actions (detailed below).

### **Action Buttons**

- **Edit**: Modify the rule's detailed settings.
- **Suspend**: Stop the rule's execution. This action stops monitoring system load and adjusting resources, moving the rule to the Suspended tab. Suspended rules can be reactivated when needed.
- **Delete**: Remove the rule.

![Auto scaling list](../docs-images/p07/01.Auto%20scaling%20list.jpg)

---

## **Creating a New Rule**

### **Step 1: Set Rule Information**

Click the `New Scaling Rule` button in the top right corner to create a new rule.

- Fill in **Rule Name** and select **Resource Type** (currently only **Instance** is available).
  ![New Scaling Rule](../docs-images/p07/02.New%20Scaling%20Rules.jpg)

### **Step 2: Set Scaling Target**

- Select **Instance** and review the related information.
- Set the **Protocol** (currently only **http** is supported) and fill in the **Port**.
- Set the **Start Command**:

  - **Start Command**: These are the internal commands executed by new instances after startup during Auto Scaling, used to launch custom services or models within the instance. If left blank, the system will use a default start command. For example, on Linux, it might use `systemctl start <service>` or `/etc/init.d/<service> start`. If a specific command is required, enter it based on your needs.

  ![New Scaling Rule](../docs-images/p07/03.Scaling%20Target.jpg)

### **Step 3: Set Scaling Rules**

- Fill in **Elastic Quantity Control Minimum** and **Elastic Quantity Control Maximum**:

  > **Elastic Quantity Control Minimum**: Sets the minimum number of resources the system can scale down to, ensuring basic operation during low load. This value is typically set to 0 or 1, depending on your service requirements.

  > **Elastic Quantity Control Maximum**: Sets the maximum number of resources the system can scale up to, preventing over-scaling and controlling costs. This value should be based on anticipated traffic or load.

  ![Scaling Rule](../docs-images/p07/04.Elastic%20Quantity%20Control.jpg)

### **Step 4: Set Load Metric (Optional)**

- Click the `More Load Metric` button:

  - **More Load Metric** allows adding additional load metrics to adjust resources based on more specific performance needs.

- Fill in **Metric Name**, **Description**, select **Baseline Type**, and fill in **Baseline Value**:

  > **Numeric Baseline**: Sets a specific numeric baseline. Scaling is triggered when resource usage exceeds or falls below this baseline.

  > **Ratio Baseline**: Sets a proportional baseline, adjusting based on the ratio of specific resources.

- Fill in **Retrieve Address**:

  - **Retrieve Address** is the data source address for load metrics, usually an API URL or a monitoring system endpoint. It provides load data to help decide if scaling should be triggered. For example, it might be a URL like `http://your-monitoring-system/api/metrics`.

  ![Scaling Rule](../docs-images/p07/05.More%20Load%20Metric.jpg)

### **Step 5: Successfully Create the Rule**

After confirming all settings, click the confirm button at the bottom right to complete the creation. You will see the newly created rule in the list.
![Rule list](../docs-images/p07/06.Rule%20list.jpg)

---

## **Notes**

- **Managing Rules**:
  Created rules can be edited, suspended, or deleted in the **Auto Scaling** or **Suspended** list.

- **Setting Scaling Conditions**:
  Correctly setting scaling conditions (such as **Elastic Quantity Control** and **Baseline Type**) helps efficiently utilize system resources.

- **Resource Optimization**:
  Regularly review and adjust rule settings to ensure resources are scaled appropriately based on actual load.

---

With these settings, you can automate resource management, enhancing system flexibility and reliability.
