import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { Resend } from 'resend';
import cors from 'cors';
import firebaseConfig from './firebase-applet-config.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    projectId: firebaseConfig.projectId,
  });
}
const db = getFirestore(admin.apps[0]!, firebaseConfig.firestoreDatabaseId);

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Route: Subscriber Signup
  app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    try {
      // 1. Store in Firestore
      const subscriberRef = db.collection('subscribers').doc(email);
      const doc = await subscriberRef.get();

      if (doc.exists) {
        return res.status(400).json({ error: 'Already subscribed' });
      }

      await subscriberRef.set({
        email,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        status: 'confirmed',
      });

      // 2. Send Confirmation Email (optional, if key exists)
      if (resend) {
        await resend.emails.send({
          from: 'Astrateq <updates@resend.dev>', // Note: User needs to verify their domain in Resend
          to: email,
          subject: 'Batch 01 Early Access Confirmed',
          html: `
            <div style="font-family: sans-serif; background: #050505; color: white; padding: 40px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
              <h1 style="color: #00D1FF; font-weight: 200;">ASTRATEQ <span style="font-weight: 600; font-style: italic;">PRE-LAUNCH</span></h1>
              <p style="font-size: 16px; color: #888;">Hello from Astrateq Gadgets.</p>
              <p style="font-size: 18px;">Your spot in the <strong>Batch 01 Early Access</strong> queue is confirmed.</p>
              <p style="color: #888; font-size: 14px; margin-top: 40px;">This is an automated confirmation. No further action is required.</p>
            </div>
          `,
        });
      } else {
        console.warn('RESEND_API_KEY not found. Email not sent.');
      }

      res.status(200).json({ success: true, message: 'Subscribed successfully' });
    } catch (error) {
      console.error('Subscription error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
