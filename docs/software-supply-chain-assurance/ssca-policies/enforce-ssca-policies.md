---
title: Enforce SSCA policies
description: Use SSCA to enforce software supply chain security policies.
sidebar_position: 20
---

Enforce SBOM policies in the CI and CD stages of your Harness pipelines to ensure that your artifacts only contain approved components.

## Requirements

To enforce SSCA policies in a Harness pipeline, you need:

* A pipeline with a [CI (build) stage](/docs/continuous-integration/use-ci/prep-ci-pipeline-components), a [CD (deploy) stage](/docs/continuous-delivery/get-started/key-concepts#stage), or both. You'll add the SBOM Enforcement step to one of these stages.
* [SBOM OPA policies that you want to enforce.](./create-ssca-policies.md)
* SBOM to compare policies against. For example, you can [use SSCA to generate SBOM](../sbom/generate-sbom.md) or [import SBOM](../sbom/ingest-sbom-data.md).
* A [Harness file secret](/docs/platform/secrets/add-file-secrets) containing the public key from the [key pair used to sign and attest the SBOM](../sbom/generate-sbom.md#generate-a-key-pair).

## Add an SSCA Enforcement step

You can add the **SBOM Enforcement** step to either the **Build** or **Deploy** stage of a Harness pipeline.

* In a **Build** stage, add the **SSCA Enforcement** step after the artifact (image) has been pushed to an artifact repository.
* In a **Deploy** stage, add the **SSCA Enforcement** step before the deployment step.

:::info

SBOM Orchestration and Enforcement steps in deploy stage can only be used in the [Containerized Step Groups](/docs/continuous-delivery/x-platform-cd-features/cd-steps/containerized-steps/containerized-step-groups.md)

:::

The **SBOM Enforcement** step has the following settings:

* **Name:** Enter a name for the step.
* **Source:** Set the source, which can be DockerHub, ECR, or Repository. Depending on your selection, a unique set of fields will appear, each specific to the source you've chosen. Address these fields as required, this is similar to configuring the source in SSCA Orchestration step. For more details of what each field entails, please refer to the [documentation on SSCA Orchestration](/docs/software-supply-chain-assurance/sbom/generate-sbom#add-the-ssca-orchestration-step).
* **Container Registry:** Select the [Docker Registry connector](/docs/platform/connectors/cloud-providers/ref-cloud-providers/docker-registry-connector-settings-reference) that is configured for the Docker-compliant container registry where your artifact is stored. Given that this step is to verify the attestation, read-level permissions should be adequate.
* **Image:** Enter the repo path (in your container registry) and tag for the relevant image, such as `my-docker-repo/my-artifact:latest`.
* **Public Key:** Select the [Harness file secret](/docs/platform/secrets/add-file-secrets) containing the public key to use to verify the authenticity of the attestation.
* **Policy Sets:** Select the policy set that you want to use for enforcement. You can select multiple policy sets from Account, Org or Project.

<!-- ![](./static/policy-ssca-enforce-step.png) -->

<DocImage path={require('./static/sbom-policy-enforcement-step.png')} width="50%" height="50%" />


:::info GCR and ACR repos

If you're using Docker-compliant GCR or ACR repositories:

1. You can use `DockerHub` as the artifact source
2. Configure your [Docker Registry connector](/docs/platform/connectors/cloud-providers/ref-cloud-providers/docker-registry-connector-settings-reference) as a valid [artifact source](/docs/continuous-delivery/x-platform-cd-features/services/artifact-sources).
   * For GCR, go to [Use Docker Registry for GCR](/docs/continuous-delivery/x-platform-cd-features/services/artifact-sources#google-container-registry-gcr)
   * For ACR, go to [Use Docker Registry for ACR](/docs/continuous-delivery/x-platform-cd-features/services/artifact-sources#azure-container-registry-acr)
3. Use the full URI for the **Image** in your **SSCA Orchestration** step, such as `1234567890.dkr.ecr.REGION.amazonaws.com/IMAGE_NAME:TAG`.

:::


## Run the pipeline

When the pipeline runs, the **SSCA Enforcement** step does the following:

* Verifies the authenticity of the attestation.
* Applies policies defined in the specified policy file.
* Records policy violations and shows them on the **Artifacts** tab on the **Execution details** page.

SSCA evaluates the components described in the artifact's SBOM against your [policy definitions](./define-ssca-policies.md). For a component to pass the evaluation, it must meet these conditions:

* The component *must not* be denied based on the rules in the `deny_list`.
* The component *must* be allowed based on the rules in the `allow_list`.
* If the `allow_list` has multiple sections, the component must be allowed by *all* sections. For example, if the `allow_list` has `licenses` and `suppliers` sections, then the component's license must be allowed according to the `licenses` section, and the component's supplier must be allowed according to the `suppliers` section. If the component fails to pass either section, the policy evaluation fails for that component.

All components must meet the conditions described in *both* the `allow_list` and `deny_list` to fully pass the policy evaluation.

You can review policy violations on the **Execution details** page in Harness. For more information, go to [View attestations and violations](../ssca-view-results.md).
