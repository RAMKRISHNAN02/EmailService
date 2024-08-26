// MockProvider.js

class MockProvider1 {
    async sendEmail(email) {
      if (Math.random() > 0.7) throw new Error("MockProvider1 failed");
      console.log(`MockProvider1 sent email to ${email.to}`);
    }
  }
  
  class MockProvider2 {
    async sendEmail(email) {
      if (Math.random() > 0.7) throw new Error("MockProvider2 failed");
      console.log(`MockProvider2 sent email to ${email.to}`);
    }
  }
  
  module.exports = { MockProvider1, MockProvider2 };
  