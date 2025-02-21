---
title: Run a GameDay
sidebar_position: 2
description: Guide to create and execute a GameDay
---

Learn how to create and execute a [GameDay](/docs/chaos-engineering/configure-chaos-experiments/gameday/introduction-to-gameday.md).

## Plan your GameDay

Address the following questions before proceeding to run a Gameday:

1. Which services should I test?
2. What is the goal of the GameDay? 
3. What should I verify or determine by the end of the GameDay?

Once these questions have a viable answer, you can proceed to create a GameDay. 

## Create a GameDay and specify the details

1. Creating a GameDay involves two steps:
   * Specifying details about the GameDay,
   * Adding chaos experiments to the GameDay. 
   To create a GameDay, click **+New GameDay**. 
   ![](./static/run-gameday/1-landing-page.png)

2. Add details such as **GameDay name**, **Objectives**, and **Description** (optional). Click **Next-> Select Chaos Experiments**.
   ![](./static/run-gameday/2-create-new-gameday.png)

## Add experiments to the GameDay

1. After creating a GameDay, add experiments to the GameDay by clicking **New Chaos Experiment**.
   ![](./static/run-gameday/3-add-experiments-to-gameday.png)

2. You can add experiments by selecting the ones available in the chaos hub.  
   ![](./static/run-gameday/4-list-experiments-from-chaoshub.png)

3. Select a chaos infrastructure. Click **Add experiments to the GameDay**.
   ![](./static/run-gameday/6-add-experiments-to-gameday.png)

   You can add up to 20 experiments to every GameDay, and every chaos experiment can be executed on a different chaos infrastructure.

4. This will lead you to a page that lists the experiments you selected for the current GameDay. You can add or delete experiments from this page.
   ![](./static/run-gameday/7-add-multiple-experiments.png)

5. Select the experiment to see a preview of the experiment's pipeline.
   ![](./static/run-gameday/8-view-exp.png)

6. After adding the experiments to the GameDay, click **Save**.
   ![](./static/run-gameday/9-save-experiment.png)

## Schedule or run the GameDay

1. Now that you have the experiments in the GameDay, you are all set to run them. 
   ![](./static/run-gameday/10-gameday-created.png)

2. Click **Start GameDay**. This creates experiments within your GameDay.
   ![](./static/run-gameday/11-start-gameday.png)

3. Clicking GameDay leads you to the page that contains the experiments associated with the GameDay.
   ![](./static/run-gameday/12-gameday-in-progress.png)

4. On this page, you can **Run** the experiment. 
   ![](./static/run-gameday/13-gameday-details.png)

5. Click **Run Experiment**. This begins the execution of the experiment. 
   ![](./static/run-gameday/14-run-experiment.png)


## Record the conclusion and action items

1. You can add a summary of the experiments in the GameDay by clicking **Add/View Notes**.  
   ![](./static/run-gameday/15-summary-at-exp-level.png)

2. You can mark a GameDay run as complete by clicking **Mark Run as Complete**. After this action, you will not be able to rerun the experiments inside the GameDay run. This completed run serves as a checkpoint within the GameDay that helps keep track of how the application fared during a specific situation.
   ![](./static/run-gameday/17-run-complete.png)
