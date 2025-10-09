---
id: auto-deploy
sidebar_position: 5
---

# 自動デプロイ

On the **Auto Deploy** page, you can configure and automate the deployment process to ensure your application runs efficiently and securely. Below is a detailed feature introduction:

---

## **Auto Deploy Status**

On the **Auto Deploy** page, there are two deployment statuses:

1. **Activated**: The application is deployed and running.
2. **Suspended**: The application is paused and not running.

**Each deployment task list includes the following fields:**

- **ID**: A unique identifier for each deployment task.
- **Name**: The name of the deployment task.
- **Status**: The current deployment status (Activated, Suspended).
- **Instance Status**: The current runtime status of the instance (e.g., Standby, Running).
- **Cost**: The cost of the deployment (e.g., `0.000 Credit`).
- **Last Running Time**: The most recent time the application was running.
- **Action**: Available actions for managing the deployment (see the section below).

---

## **Available Actions in Auto Deploy**

The **Action** column provides the following operations:

### **1. Edit**

- **Function**: Edit deployment configurations.
- **Use case**: Modify the deployment name, environment variables, or other settings.

### **2. Suspend**

- **Function**: Pause the deployment and stop the application.
- **Use case**: Save resources when the application is not needed.

### **3. Deploy**

- **Function**: Start or redeploy the application.
- **Use case**: Run or restore the application when needed.

### **4. Delete**

- **Function**: Remove the deployment task.
- **Use case**: Free up resources when the application is no longer needed. **Your deployment cannot be restored after the delete**.

### **5. Resume**

- **Function**: Resumes a suspended application.
- **Use Case**: When an instance is in the **Suspended** state and needs to be restarted, this action restores it to the **Activated** state. After that, you can click `Deploy` to redeploy the instance.

### **6. Release**

- **Function**: Releases instance resources and changes the instance to the **Released** state.
- **Use Case**: When an already deployed instance is no longer needed, you can click `Release` to free up resources and stop cost calculation.

---

## **New Deploy Process**

### **Step 1: Set Rule Information**

When you click the **New Deploy** button, a form will appear where you need to fill in the following details to create a new deployment:

1. **Deploy Name**: Enter the deployment name.
2. **Deploy Description** (optional): Provide a brief description.
3. **Access Method**: Choose the access method (currently, only `Public` is supported).
4. **Instance & Image**: Select the instance and image to deploy.
5. **Instance Type**: Choose the instance type.
6. **Region**: Select the deployment region.
7. **Port**: Specify the port to use.
8. **Start Command** (optional): Set the startup command for the application.
9. **Maximum Number of Instances**: Define the maximum number of instances for this deployment.

### **Step 2: Confirm Deployment**

1. After completing the form, click `Confirm`.
2. The system will start deploying the application.
3. Once deployment is successful, the application status will appear as **Activated**.

---

## **Notes**

- **Delete is irreversible**: Once an application is deleted, it cannot be restored.

- **Suspending saves resources**: Use `Suspend` if the application is not needed temporarily.

- **Verify settings before deployment**: Ensure configurations are correct to prevent deployment errors.

---

This is a complete guide to Auto Deploy. For more detailed instructions and examples, please refer to the
[**Glows.ai Auto Deploy User Guide**](https://docs.glows.ai/docs/auto-deploy-usage).
