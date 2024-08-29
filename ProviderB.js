class ProviderB {
  async send(email) {
    // Simulate random failure
    if (Math.random() > 0.5) {
      throw new Error('ProviderB failed to send email');
    }
    console.log('ProviderB sent email:', email);
  }
}

module.exports = ProviderB;
