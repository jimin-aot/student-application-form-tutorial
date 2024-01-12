async function submitPinVerification() {
  console.log('Verify PIN clicked');
  const authToken = localStorage.getItem('authToken');
  const bpmApiUrl = localStorage.getItem('bpmApiUrl');
  const processInstanceId = localStorage.getItem('processInstanceId');

  if (!authToken || !bpmApiUrl || !processInstanceId) {
    console.error(
      'AuthToken, BPM API URL, or Process Instance ID not found in localStorage.'
    );
    return;
  }

  try {
    // Fetching and submitting the 'User Enter PIN' task
    await fetchAndSubmitTask(
      authToken,
      bpmApiUrl,
      processInstanceId,
      'User Enter PIN',
      {
        variables: {
          applicationId: { value: data.applicationId || 25 }, // fallback to random number if data.applicationId is not available
          userInputPin: { value: data.userInputPin },
        },
      }
    );

    // Fetching and handling the 'Confirm to Conclude' task
    const confirmToConcludeTaskId = await fetchAndSubmitTask(
      authToken,
      bpmApiUrl,
      processInstanceId,
      'Confirm to Conclude'
    );

    // Fetching variables for the 'Confirm to Conclude' task
    if (confirmToConcludeTaskId) {
      const variableResponse = await fetch(
        `${bpmApiUrl}/task/${confirmToConcludeTaskId}/variables`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      if (!variableResponse.ok) {
        throw new Error(`HTTP error! status: ${variableResponse.status}`);
      }

      const variablesData = await variableResponse.json();
      const pinVerificationResult = variablesData.pinVerificationResult.value;
      console.log('Pin Verification Result:', pinVerificationResult);
      if (pinVerificationResult) {
        data.pinVerificationStatus = pinVerificationResult;
        instance.parent.components[3].visible = true;
        instance.parent.components[3].redraw();
      }
    }

    // Fetching and handling the 'Confirm to Conclude' task
    await fetchAndSubmitTask(
      authToken,
      bpmApiUrl,
      processInstanceId,
      'Confirm to Conclude',
      {
        variables: {
          applicationId: { value: data.applicationId || 25 }, // fallback to random number if data.applicationId is not available
        },
      }
    );
  } catch (error) {
    console.error('Error during PIN verification:', error);
  }
}

async function fetchAndSubmitTask(
  authToken,
  bpmApiUrl,
  processInstanceId,
  taskName,
  requestBody = null
) {
  const tasksResponse = await fetch(`${bpmApiUrl}/task`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });

  if (!tasksResponse.ok) {
    throw new Error(`HTTP error! status: ${tasksResponse.status}`);
  }

  const tasksData = await tasksResponse.json();
  const activeTask = tasksData.find(
    (task) =>
      task.name === taskName && task.processInstanceId === processInstanceId
  );

  if (activeTask) {
    console.log(`Active task ID found for ${taskName}:`, activeTask.id);

    if (requestBody) {
      // Submitting task form if requestBody is provided
      const camundaUrl = `${bpmApiUrl}/task/${activeTask.id}/submit-form`;
      const submitResponse = await fetch(camundaUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!submitResponse.ok) {
        throw new Error(`HTTP error! status: ${submitResponse.status}`);
      }

      if (submitResponse.status !== 204) {
        const responseData = await submitResponse.json();
        console.log(`${taskName} form submitted successfully:`, responseData);
      } else {
        console.log(
          `${taskName} form submitted successfully, no content in response.`
        );
      }
    }

    return activeTask.id;
  } else {
    console.log(`No active ${taskName} task found.`);
    return null;
  }
}

submitPinVerification();
