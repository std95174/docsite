# Glows.ai Team Edition User Guide

The **Team Edition** of the Glows.ai Platform enables team collaboration, centralized resource management, flexible quota allocation, and secure sharing mechanisms—designed to meet enterprise-level requirements for shared cloud resource utilization.

This guide is divided into three parts:

- [Creator Guide](../c/69154d5c-b6b0-832c-97ca-44b21e415e37#creator-guide)
- [Administrator Guide](../c/69154d5c-b6b0-832c-97ca-44b21e415e37#administrator-guide)
- [Member Guide](../c/69154d5c-b6b0-832c-97ca-44b21e415e37#member-guide)

Detailed Table of Contents:

[toc]

------

## Creator Guide

### Create a Team

After logging in to the Glows.ai platform, click on your profile at the top right corner. In the dropdown, select **`Teams`**, then click **`Create Teams`** to start the team creation process.

![image-20251106105639587](../img/01.png)

First, enter the team name and description, then click **`Next`** to proceed.

![image-20251106105804030](../img/02.png)

During the beta phase, the default team **Storage** is set to **0**. After creating your team, you can contact our assistant to increase your storage capacity. Various storage plans will be launched soon.

![image-20251106140945551](../img/03.png)

After clicking **`Confirm`**, you will see the team’s basic information. A **team creator account** will be assigned by default. Send this account info to our assistant to configure a suitable **Storage plan**.

![image-20251106110316717](../img/04.png)

### Switch to Team View

As the team creator, you can switch from your Glows.ai main account to the team version.
 Click your profile at the top right, select **`Teams`**, and then click on the team you wish to enter.

![image-20251106110954183](../img/05.png)

### Member Management

Creators or administrators can access the **`Member`** tab in the sidebar to manage team members.
 Supported features include: adding members, assigning credits, controlling resource visibility, editing member info, and managing instances.

#### Add Members

Click **`Add Members`** in the **`Member`** section to start adding new members.

![image-20251106163030537](../img/06.png)

You can set up the following for each new member:

- **Login Account**
- **Login Password**
- **Role**
- **Initial Credits**
- **Alias**
- **Note**

After configuration, click **`Add Member`** to create the account.
 Roles currently supported: **Admin (administrator)** and **Member (standard member)**.

**Assign Credits** refers to the initial balance allocated to a member for renting machines or purchasing storage. It can also be assigned later.

![image-20251106220229850](../img/07.png)

After creation, click **`Copy Login Details`** to retrieve the new member’s credentials and share them with them.
 Refer to [Member Login Guide](../c/69154d5c-b6b0-832c-97ca-44b21e415e37) for login instructions.

![image-20251106163746546](../img/08.png)

#### Assign Credits

In the **`Member`** interface, click the **Action** button next to a member and choose **`Assign Credits`**.

![image-20251107101615294](../img/09.png)

Enter the credit amount and click **`Assign`** to confirm.

![image-20251107114242664](../img/10.png)

#### Resource Visibility Control

In **`Permissions & Quota`**, you can define which GPUs, images, total instances, and storage space members can access.

You can control:

- **Machine Region**
- **Machine Type**
- **Machine Model**

For example, in the screenshot below, team members can only use **NVIDIA GeForce RTX 4090** in the **TW-03 region**.

![image-20251111112042995](../img/11.png)

Scroll down to configure visible base images.
 For instance, members may be restricted to use **CUDA12.8 Torch2.7.1 Base** only.

![image-20251111112450861](../img/12.png)

You can also define limits for instance data, snapshot count, and available storage space.

![image-20251111112632184](../img/13.png)

Click **`Save`** at the top right to apply settings. Members will only be able to select predefined hardware and environments in the **Create New** interface.

![image-20251111134625409](../img/14.png)

#### Edit Member Info

Click **`Details`** beside a member to open their detail panel.

![image-20251111105908372](../img/15.png)

You can modify **Name**, **Role**, **Account Balance**, **Note**, and **Login Password**.
 The panel also shows usage details—remaining credits, total spending, instance count, and storage usage.

![image-20251111105834255](../img/16.png)

Click **`Edit Permission`** to customize resource visibility for individual members, allowing each to see different GPU or image resources.

#### Manage Member Instances

In the **`Instances`** interface, select **`Admin View`** to monitor all members’ running instances.

![image-20251111135707737](../img/17.png)

Click **Action → Release** to directly terminate a member’s instance.

![image-20251111135835939](../img/18.png)

### Storage Management

In **`Storage Space`**, switch to **`Admin View`** to see overall and per-member storage usage.

![image-20251111164737613](../img/19.png)

Click **Manage** under **Team Storage Space** to modify **Datadrive** and **Snapshot** quotas, then click **`Update`** to save.

![image-20251106161942160](../img/20.png)

### Datadrive Management

In **`Datadrive` → `Admin View`**, you can view and manage Datadrive usage for the entire team and each member.

![image-20251111174340574](../img/21.png)

Only creators and admins can upload or delete data in the **Team Datadrive**.

![image-20251106165005102](../img/22.png)

When creating instances, members automatically mount the team drive at `/team_data`.
 Standard members have **read-only** access, while creators and admins have **read/write** permissions.

![image-20251111183708701](../img/23.png)

### Snapshot Management

In **`Snapshots` → `Admin View`**, you can view all team and individual snapshots.

![image-20251111181927368](../img/24.png)

#### Share Team Snapshots

Click **Action → Share to Team** to convert a member’s snapshot into a shared team snapshot.

![image-20251111182221888](../img/25.png)

#### Use Team Snapshots

When creating a new instance, team snapshots appear under **Snapshot**, marked with a **Team** label.

![image-20251111182908522](../img/26.png)

#### Manage Team Snapshots

Go to **`Team Shared Snapshots → Manage`** to delete unneeded team snapshots.
 **Warning:** Deleted snapshots are permanently removed and cannot be recovered.

![image-20251111183957286](../img/28.png)

### Billing Management

In **`Billing → Admin View`**, you can review all members’ billing data.
 Bills can be filtered by member or type.

![image-20251111185112362](../img/29.png)

You can also click **`Recharge`** to top up credits.
 **Note:** Only the team creator can perform recharges. Credits must then be distributed to admins and members.

### Edit Team Info

Go to **`Team Setting`** and click **`Edit`** to modify the team name and description.

![image-20251112102613576](../img/30.png)

------

## Administrator Guide

Administrators have the same permissions as creators, except they **cannot create teams or perform recharges**.
 Please refer to the **Creator Guide** for detailed instructions.

------

## Member Guide

Members can access the following functions:

- **Create Instance (Create New)**
- **Instance Management (Instances)**
- **Datadrive Management (Datadrive)**
- **Snapshot Management (Snapshots)**
- **Storage Management (Storage Space)**
- **Billing (Billing)**
- **Profile Editing (Profile)**

All operations are identical to the Glows.ai main platform.
 See: [Glows.ai User Manual](https://docs.glows.ai/docs/create-new)

![image-20251112112106430](../img/31.png)

### Join a Team

Members can join via two methods after receiving credentials from the team creator.

#### 1. Team Account Login

Open the following URL and enter your team credentials:

```bash
https://platform.glows.ai/team/login
```

![image-20251112103024351](../img/32.png)

#### 2. Join via Glows.ai Main Site

Log into the main site → click your avatar → **`Teams → Join Team`**.

![image-20251112103513271](../img/33.png)

Enter the team account and password to link your main account with the team.
 You can later switch between them directly.

![image-20251104150357896](../img/34.png)

First login requires a password reset.

![image-20251106165855089](../img/35.png)

### Request Credits

Members who need credits must apply to the creator or administrator.

### Create an Instance

Click **`Create New`**, select the GPU type and environment.

![image-20251112130821272](../img/36.png)

Scroll down to configure **Datadrive** settings, then click **`Complete Checkout`**.

- **Unit Qty:** Number of GPUs to rent (e.g., `2` means two GPUs)
- **Mount Personal Datadrive:** Optional
- **Mount Team Datadrive:** Automatically mounts to `/team_data` (read-only for members)
- **Bind Public IP Address:** Contact Glows.ai support if needed

![image-20251112131149657](../img/37.png)

### Manage Instances

After launching, view instance details in **Instances**.

- **Access:** SSH (Port 22) / JupyterLab (Port 8888)
- **Monitor:** CPU/GPU metrics
- **Billing:** Cost breakdown
- **Config:** Environment details
- **Hardware:** Hardware specifications

Use **Action → Release** to terminate or **Take Snapshot** to create an image.

![image-20251112135257508](../img/38.png)

### Other Functions

Management of **Datadrive**, **Snapshots**, **Storage**, **Billing**, and **Profile** are identical to the main platform.
 See [Glows.ai User Manual](https://docs.glows.ai/docs/create-new)

------

## Contact Us

If you have any questions or feedback while using **Glows.ai**, please reach out via email, Discord, or Line.

- **Email:** [support@glows.ai](mailto:support@glows.ai)
- **Discord:** https://discord.com/invite/Glows.ai
- **Line:** https://lin.ee/fHcoDgG

------

Would you like me to format this into a **clean, styled Markdown file (with proper headers and English TOC)** for publishing or documentation upload?
