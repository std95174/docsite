---
id: bind-public-ip
sidebar_position: 13
---

# Bind Public IP

**Bind Public IP** is a newly released feature on Glows.ai, currently in beta testing.
If you would like to enable this feature, please contact us through the methods listed at the end of this document.
This guide will walk you through how to use it.

---

## Using the Feature After Activation

Once the **Bind Public IP** feature is enabled, the instance creation process is almost the same as before — start by selecting the image you need.

![image-20250821143651042](../docs-images/bind-public-ip/01.png)

The difference is that you can now click the **Bind** button to assign a static IP to your instance.
After clicking, select the static IP allocated to you, then click **Complete Checkout** to finish creating an instance with a fixed IP.

![image-20250829141252240](../docs-images/bind-public-ip/02.png)

---

## Viewing and Modifying Port Bindings

After the instance is created, the interface will display links to some default services.
However, because the default HTTP ports are relatively low, directly accessing them via a browser may result in a “failed to load” error.
(This happens because modern browsers have security restrictions on accessing low ports directly with IP addresses.)

To resolve this, click **New Port Binding** as shown below, and map the instance’s port 8888 to the static IP’s port 8888.

![image-20250821144056702](../docs-images/bind-public-ip/03.png)

After mapping, you can visit `StaticIP:8888` to access the default **JupyterLab** service running inside the instance.
Other custom services can be configured and accessed in the same way.

![image-20250821144246043](../docs-images/bind-public-ip/04.png)

For example, you can map **ComfyUI**’s port 8188 to the static IP’s port 8188 and access the service via that address.

![image-20250821144417955](../docs-images/bind-public-ip/05.png)

---

## Adding Custom Ports

In addition to the default services, you can also add new ports to host custom services.
For example, click **New Port Binding** and create a mapping from port 8080 in the instance to port 8080 on the static IP.

![image-20250821144534908](../docs-images/bind-public-ip/06.png)

Next, start a simple HTTP service inside the instance listening on port 8080:

![image-20250821144708764](../docs-images/bind-public-ip/07.png)

Once the service is running, you can simply access it in your browser via `StaticIP:8080`, making it very convenient.

![image-20250821144746527](../docs-images/bind-public-ip/08.png)

---

## Binding a Custom Domain

You can also map the static IP to your own domain name, and then access the services using your custom domain.

---

## Contact Us

If you have any questions or suggestions while using **Glows.ai**, feel free to reach out through the following channels:

**Email:** [support@glows.ai](mailto:support@glows.ai)

**Discord:** [https://discord.com/invite/glowsai](https://discord.com/invite/glowsai)

**Line:** [https://lin.ee/fHcoDgG](https://lin.ee/fHcoDgG)
