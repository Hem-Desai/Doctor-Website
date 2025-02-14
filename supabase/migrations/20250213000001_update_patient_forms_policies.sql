-- First disable RLS temporarily
ALTER TABLE patient_forms DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Allow public to create patient forms" ON patient_forms;
DROP POLICY IF EXISTS "Allow authenticated users to read patient forms" ON patient_forms;
DROP POLICY IF EXISTS "Allow authenticated users to update patient forms" ON patient_forms;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON patient_forms;
DROP POLICY IF EXISTS "Enable insert access for all users" ON patient_forms;
DROP POLICY IF EXISTS "Enable update access for authenticated users" ON patient_forms;

-- Re-enable RLS
ALTER TABLE patient_forms ENABLE ROW LEVEL SECURITY;

-- Create a simple policy that allows all operations for public
CREATE POLICY "Allow all operations for public"
    ON patient_forms
    FOR ALL
    TO public
    USING (true)
    WITH CHECK (true);

-- Create a policy for authenticated users to manage all records
CREATE POLICY "Allow all operations for authenticated users"
    ON patient_forms
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true); 