---
id: mesh-clustering
sidebar_position: 11
---

# メッシュクラスタリング

On the **Mesh Clustering** page, you can manage and create different types of network resources, including Network Groups, Load Balancers, and Clusters. Currently, only **Network Groups** are supported for management. Below is an introduction to the page and the operation guide:

---

## **Tab Overview**

- **Network Group**: The list of all network groups.
- **Load Balancer**: The list of load balancers (currently not available).
- **Cluster**: The list of clusters (currently not available).

### **List Columns**

- **ID**: The unique identifier for the network resource.
- **Name**: The name of the network resource.
- **Capacity**: The current number of instances in use and the total capacity, e.g., 0/5.
- **Action**: Actions that can be performed, including **Edit** and **Delete**.
  ![Mesh list](../../../../../docs/docs-images/p09/01.Mesh%20list.jpg)

---

## **Create New Mesh**

Click the `Create New` button in the top right corner to enter the page for creating a new Mesh:

1. **Select Mesh Type**: Currently, only **Network Group** is supported.
2. **Enter Name**: Provide a name for the new Mesh.

![Create New Mesh](../../../../../docs/docs-images/p09/02.Create%20Mesh.jpg)

---

## **Add Instance to Mesh**

After creating a Mesh, you can add instances to it:

1. Click on the newly created Mesh in the list to go to its details page.
2. Click the `Add Instance` button to open the add instance page.
3. The left-side list shows all instances that are currently in the **Running** state.
4. Select the instances you want to add and click the arrow button to add them to the Mesh.
5. The added instances will appear in the right-side list.

![Add Instance](../../../../../docs/docs-images/p09/03.Add%20Instance.jpg)

### **Remove Instance**

- In the right-side list, select the instances you want to remove, and click the `Remove Selected` button.
- Alternatively, click the trash icon in the **Action** column for the instance you wish to remove, and it will return to the left-side list.

![Remove Instance](../../../../../docs/docs-images/p09/04.Remove%20Instance.jpg)

---

## **View Added Instance Information**

After successfully adding instances to a Mesh, click on the Mesh to view the added instance information, including:

- **IP CIDR**: Represents the IP address range of the instance, such as **192.168.3.2/24**, which defines the available IP addresses and subnet mask for the instance.
- **ID**: The unique identifier for the instance.
- **Name**: The name of the instance.
- **Bandwidth**: The bandwidth of the instance, e.g., **100 Mbps**.
- **Status**: The current status of the instance.
- **Action**: Includes the **Disconnect** action for removing the instance.

![Mesh Instance Info](../../../../../docs/docs-images/p09/05.Mesh%20Instance%20Info.jpg)

---

This setup allows you to flexibly manage network resources and adjust network configurations according to your needs.
