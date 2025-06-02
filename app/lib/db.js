// This file handles server-side storage of employee data in JSON files
import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Save employee data to a JSON file
export async function saveEmployee(id, data) {
  try {
    const filePath = path.join(dataDir, `${id}.json`);
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving employee data:', error);
    throw error;
  }
}

// Get employee data from a JSON file
export async function getEmployee(id) {
  try {
    const filePath = path.join(dataDir, `${id}.json`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const data = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error getting employee data:', error);
    throw error;
  }
}

// Get all employee IDs
export async function getAllEmployeeIds() {
  try {
    const files = await fs.promises.readdir(dataDir);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''));
  } catch (error) {
    console.error('Error getting employee IDs:', error);
    return [];
  }
}
