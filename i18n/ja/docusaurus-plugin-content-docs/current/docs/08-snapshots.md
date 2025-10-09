---
id: snapshots
sidebar_position: 10
---

# スナップショット機能

On the **Snapshots** page, you can manage all created snapshots. The snapshot and restore features simplify your project's workflow. Below is an introduction and operation guide for these features:

---

## Two Tabs on the **Snapshots** Page:

- **Available**: The list of all available snapshots that you can view and manage.
- **Restorable**: The list of deleted snapshots that can still be restored within a certain period.

### **Snapshot List Fields**

- **ID**: The unique identifier of the snapshot.
- **Name**: The snapshot name, making it easy for users to identify.
- **Size**: The storage space occupied by the snapshot.
- **Status**: The current status of the snapshot (e.g., Available).
- **Create Time**: The creation time of the snapshot.
- **Action**: The executable operations (detailed below).

### **Action Buttons**

- **Edit**: Modify the name of the snapshot.
- **Delete**:
  - In **Available**, deleting a snapshot will move it to the **Restorable** tab.
  - In **Restorable**, deleting a snapshot will permanently remove it, and it cannot be restored.

![Snapshots list](../../../../../docs/docs-images/p08/01.Snapshots%20list.jpg)

## **Notes**

1. **Deletion and Restoration**:

   - After deleting a snapshot, it will move to the **Restorable** tab, where you can choose to restore or permanently delete it.

2. **Name Modification**:

   - You can modify the snapshot name at any time for easier management and identification.

3. **Storage Management**:
   - Regularly cleaning up unnecessary snapshots can free up storage space and ensure effective resource utilization.

With these features, you can easily manage and protect your data, ensuring you can quickly restore to a specific state when needed.
