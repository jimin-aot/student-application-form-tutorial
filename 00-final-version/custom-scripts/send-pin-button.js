async function startEmailVerificationProcess() {
  resetPinFields();

  console.log('Send PIN clicked');
  const processDefinitionKey = 'vsb-email-verification';
  const bpmApiUrl = localStorage.getItem('bpmApiUrl');
  const authToken = localStorage.getItem('authToken');

  const userDetails = JSON.parse(localStorage.getItem('USER_DETAILS'));
  const tenantId = userDetails ? userDetails.tenantKey : null;

  if (!bpmApiUrl) {
    console.error('BPM API URL not found in localStorage.');
    return;
  }

  if (!authToken) {
    console.error('Authorization token is not available in localStorage.');
    return;
  }

  const url = `${bpmApiUrl}/process-definition/key/${processDefinitionKey}/start?tenantId=${tenantId}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        variables: {
          email: { value: data.email },
          applicationId: { value: data.applicationId || 25 }, // fallback to random number if data.applicationId is not available
          formName: { value: 'jmbi-studentapplication' },
          tenantKey: { value: tenantId },
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Process started successfully:', responseData);
    localStorage.setItem('processInstanceId', responseData.id);
    data.pinVerificationStatus = 'pinSent';

    // instance.root.redraw();
    if (form.components[1].components[2]) {
      form.components[1].components[2].visible = true;
      form.components[1].components[2].redraw();
    }
  } catch (error) {
    console.error('Error during the process operation:', error.message);
  }
}

// Reset function to clear PIN fields and any validation messages
function resetPinFields() {
  data.userInputPin = '';
  data.pinVerificationStatus = '';
  if (instance && instance.root) {
    instance.root.setPristine(true);
  }
}

startEmailVerificationProcess();
