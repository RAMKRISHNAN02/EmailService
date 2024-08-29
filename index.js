const EmailService = require('./EmailService');
const ProviderA = require('./MockProvidersA');
const ProviderB = require('./ProviderB');

const providers = [new ProviderA(), new ProviderB()];
const emailService = new EmailService(providers);

const email = { id: '1', to: 'test@example.com', subject: 'Test', body: 'This is a test email' };

emailService.sendEmail(email);
