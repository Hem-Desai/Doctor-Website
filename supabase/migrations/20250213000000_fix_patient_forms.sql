-- Add any missing columns to patient_forms table
ALTER TABLE patient_forms ADD COLUMN IF NOT EXISTS symptoms text;
ALTER TABLE patient_forms ADD COLUMN IF NOT EXISTS medical_history text;
ALTER TABLE patient_forms ADD COLUMN IF NOT EXISTS status text DEFAULT 'pending';

-- Update the table to make non-required fields nullable
ALTER TABLE patient_forms ALTER COLUMN symptoms DROP NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN medical_history DROP NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN age DROP NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN phone DROP NOT NULL; 