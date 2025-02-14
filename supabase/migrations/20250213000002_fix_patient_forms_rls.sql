-- First, disable RLS
ALTER TABLE patient_forms DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Allow all operations for public" ON patient_forms;
DROP POLICY IF EXISTS "Allow all operations for authenticated users" ON patient_forms;
DROP POLICY IF EXISTS "Allow public to create patient forms" ON patient_forms;
DROP POLICY IF EXISTS "Allow authenticated users to read patient forms" ON patient_forms;
DROP POLICY IF EXISTS "Allow authenticated users to update patient forms" ON patient_forms;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON patient_forms;
DROP POLICY IF EXISTS "Enable insert access for all users" ON patient_forms;
DROP POLICY IF EXISTS "Enable update access for authenticated users" ON patient_forms;

-- Re-enable RLS
ALTER TABLE patient_forms ENABLE ROW LEVEL SECURITY;

-- Create a new policy for public inserts
CREATE POLICY "Enable insert for public"
    ON patient_forms
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Create a policy for authenticated users to read all records
CREATE POLICY "Enable read for authenticated users"
    ON patient_forms
    FOR SELECT
    TO authenticated
    USING (true);

-- Create a policy for authenticated users to update records
CREATE POLICY "Enable update for authenticated users"
    ON patient_forms
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Create a policy for authenticated users to delete records
CREATE POLICY "Enable delete for authenticated users"
    ON patient_forms
    FOR DELETE
    TO authenticated
    USING (true); 