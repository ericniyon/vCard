import { NextResponse } from 'next/server';
import { getEmployee } from '@/app/lib/db';

export async function GET(
  request,
  { params }
) {
  try {
    const id = params.id;
    
    if (!id) {
      return NextResponse.json({ error: 'Missing employee ID' }, { status: 400 });
    }
    
    const employee = await getEmployee(id);
    
    if (!employee) {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }
    
    return NextResponse.json({ employee });
  } catch (error) {
    console.error('Error fetching employee:', error);
    return NextResponse.json({ error: 'Failed to fetch employee data' }, { status: 500 });
  }
}
