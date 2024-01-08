if (data.pinVerificationStatus === 'Matched') {
  next = 'step1';
} else {
  next = 'emailVerification';
}
