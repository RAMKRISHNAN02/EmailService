// EmailService.js

class EmailService {
    constructor(providers, retryCount = 3, rateLimit = 10) {
      this.providers = providers;
      this.retryCount = retryCount;
      this.rateLimit = rateLimit;
      this.sentEmails = new Set(); // Used for idempotency
      this.status = new Map(); // Used for status tracking
      this.attempts = new Array(providers.length).fill(0);
    }
  
    async sendEmail(email) {
      const emailId = this.generateEmailId(email);
  
      if (this.sentEmails.has(emailId)) {
        this.status.set(emailId, "duplicate");
        return;
      }
  
      for (let i = 0; i < this.providers.length; i++) {
        try {
          await this.trySendWithRetry(this.providers[i], email, i);
          this.sentEmails.add(emailId);
          this.status.set(emailId, "sent");
          return;
        } catch (error) {
          this.status.set(emailId, `failed with ${this.providers[i].constructor.name}`);
          this.attempts[i]++;
        }
      }
  
      this.status.set(emailId, "failed all providers");
    }
  
    async trySendWithRetry(provider, email, providerIndex) {
      for (let attempt = 0; attempt < this.retryCount; attempt++) {
        try {
          if (this.attempts[providerIndex] >= this.rateLimit) throw new Error("Rate limit exceeded");
          await provider.sendEmail(email);
          return;
        } catch (error) {
          await this.sleep(this.getBackoffTime(attempt));
        }
      }
      throw new Error("Failed after retries");
    }
  
    getBackoffTime(attempt) {
      return Math.pow(2, attempt) * 1000; // Exponential backoff
    }
  
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    generateEmailId(email) {
      return `${email.to}-${email.subject}`;
    }
  
    getStatus(email) {
      const emailId = this.generateEmailId(email);
      return this.status.get(emailId) || "not attempted";
    }
  }
  
  module.exports = EmailService;
  