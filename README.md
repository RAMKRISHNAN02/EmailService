# Email Sending Service

## Overview

This project implements  email sending service in JavaScript. The service utilizes multiple mock email providers, with features such as retry logic with exponential backoff, a fallback mechanism to switch providers on failure, idempotency to prevent duplicate sends, basic rate limiting, and status tracking for email sending attempts.

## Features

- **Retry Mechanism:** Implements retry logic with exponential backoff to handle transient failures.
- **Fallback Between Providers:** Automatically switches to an alternative email provider if the primary one fails.
- **Idempotency:** Ensures that duplicate emails are not sent even if the send request is retried.
- **Rate Limiting:** Limits the number of emails that can be sent in a given time period.
- **Status Tracking:** Provides detailed tracking of the status of each email sending attempt.
- **Bonus Features:**
  - **Circuit Breaker Pattern:** Prevents the system from repeatedly trying to use a failing provider.
  - **Simple Logging:** Logs key actions and events for easier debugging.
  - **Basic Queue System:** Queues emails if rate limits are exceeded.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)


