---
title: Concepts
sidebar_position: 2
description: ChaosGuard concepts and how they are enforced
---
This section walks you through the concepts of [ChaosGuard](./introduction-to-chaosguard) and how they enforce advanced security policies on a chaos-enabled platform.

## Before you begin

[Harness RBAC functionality](/docs/chaos-engineering/technical-reference/security/introduction.md) acts as a first-level security check (or deterrent) that can be leveraged to prevent config-time security issues. It is a platform-wide, generic framework that counts resources from other Harness modules (such as CI/CD/Cloud Cost/Service Reliability, etc.) under its purview. However, chaos has additional requirements to enforce [execution-time security restrictions](/docs/chaos-engineering/configure-chaos-experiments/chaosguard/introduction-to-chaosguard.md). 

## ChaosGuard concepts

ChaosGuard consists of two elements: **Conditon** and **Rule**. 

### 1. Condition
It is an execution plane construct, and is static in nature, i.e. it is often pre-defined (typically configured by the admin personas) and you can store it offline (such as in a conditions library or repository).

The default structure of a condition is to block or deny a fault or set of faults on a given **execution context** associated with a cluster (or namespace), the service(s), and the service account used for the injection process.  

* **WHAT** clause describes the attribute (in this case, chaos fault) on which you can apply the condition. This field takes a regex-like pattern, that is, the * symbol, to indicate all characters preceding or succeeding a particular string.

	![what](./static/configure-chaosguard/condition-what.png)

* **WHERE** clause describes the name of the Kubernetes infrastructure where you can apply the condition. 

	![where](./static/configure-chaosguard/condition-where.png)

* **WHICH** clause describes the namespace and the app label in which you can apply the condition. You can have more than one namespace and app label associated with a condition.

	![which](./static/configure-chaosguard/condition-which.png)

* **USING** clause describes the service account under which you apply the condition. You can have more than one service account configured for a condition.

	![using](./static/configure-chaosguard/condition-using.png)

:::tip 
The service account refers to the Kubernetes or Openshift service account. This account is backed by a role (or ClusterRole) and is associated with a native or third-party security policy or admission controller within the cluster, such as PodSecurityPolicy (PSP), SecurityContextConstraint (SCC), Kyverno, OPA Gatekeeper, etc.
With ChaosGuard, by limiting the service account you (as a user) can use within your experiment definitions, HCE limits the privileges you can have within the cluster.
:::

### 2. Rule
It is a high-level construct that controls which users a given condition is applied to and for what period. It can be in an active (enabled) or passive (disabled) state. A rule can contain multiple conditions, and to ensure a successful evaluation, all constituent conditions must be met.

The example below describes the rule as **applicable on the cluster chaosday-k8s-cluster between [5 PM, Friday, Sept 15th] to [9 AM, Monday, Sept 18th] for the specific condition**.

![rules-chaosguard](./static/chaosguard-concepts/add-conditions.png)

:::tip
Creating the ChaosGuard rules is subject to Harness RBAC policies. By default, these rules are enabled only for the project admin. However, the admin can delegate this to trusted users (typically in multi- or secondary admin scenarios).

![chaosguard-access-control](./static/chaosguard-concepts/chaosguard-access-control.png)
:::

## Flow of control
The security evaluation step iterates over every active (or enabled) rule for every experiment run in the project. If the evaluation is successful, you (the user) can proceed with the experiment. Upon failure, you will be blocked from iterating further in the experiment. Below is a flowchart that summarizes the flow of control when a ChaosGuard rule is enabled for a fault or set of faults.

![flow-chart](./static/chaosguard-concepts/flow-chart-chaosguard.png)

## Next steps
* [Configuring ChaosGuard](/docs/chaos-engineering/configure-chaos-experiments/chaosguard/configuring-chaosguard.md)