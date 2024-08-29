class ProviderA {
    async send(email) {
      // Simulate random failure
      if (Math.random() > 0.5) {
        throw new Error('ProviderA failed to send email');
      }
      console.log('ProviderA sent email:', email);
    }
  }
  
  module.exports = ProviderA;
  
