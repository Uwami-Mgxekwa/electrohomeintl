# Contact Form Setup Guide

Your contact form now supports multiple submission methods without redirecting users. Here are your options:

## Option 1: EmailJS (Recommended - No Backend Required)

EmailJS allows you to send emails directly from your frontend without a server.

### Setup Steps:

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account (1000 emails/month free)

2. **Create Email Service**
   - In EmailJS dashboard, go to "Email Services"
   - Add your email service (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create Email Template**
   - Go to "Email Templates"
   - Create a new template with these variables:
     ```
     Subject: New Callout Request from {{from_name}}
     
     New callout request received:
     
     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     Address: {{address}}
     Appliance: {{appliance}}
     
     Issue Description:
     {{message}}
     
     Sent from ElectroHome International website
     ```

4. **Update Your Code**
   - In `script.js`, replace these values:
     ```javascript
     const EMAILJS_PUBLIC_KEY = 'your_actual_public_key';
     const EMAILJS_SERVICE_ID = 'your_service_id';
     const EMAILJS_TEMPLATE_ID = 'your_template_id';
     ```

### Benefits:
- ✅ No backend server required
- ✅ Emails sent directly to your inbox
- ✅ Free tier available
- ✅ Works immediately after setup

## Option 2: Backend API (For Advanced Users)

If you want to set up your own backend server:

### PHP Example (contact.php):
```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $to = 'electrohomeintl@gmail.com';
    $subject = 'New Callout Request from ' . $data['name'];
    $message = "
    New callout request received:
    
    Name: {$data['name']}
    Email: {$data['email']}
    Phone: {$data['phone']}
    Address: {$data['address']}
    Appliance: {$data['appliance']}
    
    Issue Description:
    {$data['message']}
    ";
    
    $headers = "From: noreply@yourwebsite.com\r\n";
    $headers .= "Reply-To: {$data['email']}\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send email']);
    }
}
?>
```

### Node.js Example:
```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, address, appliance, message } = req.body;
        
        await transporter.sendMail({
            from: 'noreply@yourwebsite.com',
            to: 'electrohomeintl@gmail.com',
            subject: `New Callout Request from ${name}`,
            text: `
            New callout request received:
            
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Address: ${address}
            Appliance: ${appliance}
            
            Issue Description:
            ${message}
            `
        });
        
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send email' });
    }
});
```

## Option 3: WhatsApp Only (Current Fallback)

The form always creates a WhatsApp message as a fallback. This:
- ✅ Always works
- ✅ No setup required
- ✅ Direct communication with customers
- ❌ Requires manual response

## Current Form Behavior

1. **User fills out form and clicks submit**
2. **Form validates all fields**
3. **If EmailJS is configured**: Sends email to your inbox
4. **Always**: Creates WhatsApp message and opens WhatsApp
5. **Shows success notification**
6. **Form resets automatically**
7. **User stays on the page**

## Recommended Setup

1. **Start with EmailJS** (easiest, no backend required)
2. **Keep WhatsApp as backup** (already configured)
3. **Later add backend API** if you need more control

## Testing

To test your setup:
1. Fill out the contact form
2. Check if you receive an email (if EmailJS is configured)
3. Verify WhatsApp message is created correctly
4. Confirm user sees success notification
5. Ensure form resets after submission

## Security Notes

- EmailJS handles email security
- Form includes validation
- No sensitive data is stored in frontend
- WhatsApp provides end-to-end encryption

Your contact form is now ready to handle submissions professionally without redirecting users!