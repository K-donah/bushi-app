import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting Firebase initialization...');

let db = null;
let auth = null;

try {
  // Read and validate JSON file first
  const serviceAccountPath = join(__dirname, '..', 'serviceAccountKey.json');
  console.log('📁 Service account path:', serviceAccountPath);
  
  const fileContent = readFileSync(serviceAccountPath, 'utf8');
  console.log('📄 File read successfully, length:', fileContent.length);
  
  // Basic validation - check if it starts with {
  if (!fileContent.trim().startsWith('{')) {
    throw new Error('File does not start with { - may have BOM or other issues');
  }
  
  const serviceAccount = JSON.parse(fileContent);
  console.log('✅ JSON parsed successfully');
  console.log('🔧 Project ID:', serviceAccount.project_id);
  
  // Initialize Firebase
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  
  console.log('🎉 Firebase Admin initialized successfully!');
  
  db = admin.firestore();
  auth = admin.auth();
  
  console.log('📊 Firestore and Auth services ready');
  
} catch (error) {
  console.error('💥 Firebase initialization failed:');
  console.error('   Error:', error.message);
  console.error('   This is OK for now - using mock mode');
}

export { db, auth, admin };
