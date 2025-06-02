import { NextResponse } from 'next/server';
import { saveEmployee } from '@/app/lib/db';

export async function POST(request) {
  try {
    const body = await request.json();
    const { id, data } = body;
    
    if (!id || !data) {
      return NextResponse.json({ error: 'Missing id or data' }, { status: 400 });
    }
    
    await saveEmployee(id, data);
    
    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Error saving employee:', error);
    return NextResponse.json({ error: 'Failed to save employee data' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Use POST to save employee data' });
}
