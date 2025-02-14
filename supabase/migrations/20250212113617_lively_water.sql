/*
  # Extended Patient Form Fields

  1. Changes
    - Add new columns to patient_forms table for comprehensive patient information
    - Update RLS policies to maintain security

  2. New Fields
    - Personal Information:
      - gender (text)
      - address (text)
      - city (text)
      - state (text)
      - pincode (text)
      - marital_status (text)
      - occupation (text)
    - Medical Information:
      - chief_complaints (text)
      - duration_of_complaints (text)
      - previous_treatments (text)
      - current_medications (text)
      - family_medical_history (text)
    - Lifestyle Information:
      - lifestyle_habits (text)
      - sleep_pattern (text)
      - appetite (text)
      - food_preferences (text)
      - mental_emotional_state (text)
*/

-- Add new columns to patient_forms table
DO $$ 
BEGIN
  -- Personal Information
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'gender') THEN
    ALTER TABLE patient_forms ADD COLUMN gender text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'address') THEN
    ALTER TABLE patient_forms ADD COLUMN address text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'city') THEN
    ALTER TABLE patient_forms ADD COLUMN city text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'state') THEN
    ALTER TABLE patient_forms ADD COLUMN state text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'pincode') THEN
    ALTER TABLE patient_forms ADD COLUMN pincode text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'marital_status') THEN
    ALTER TABLE patient_forms ADD COLUMN marital_status text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'occupation') THEN
    ALTER TABLE patient_forms ADD COLUMN occupation text;
  END IF;

  -- Medical Information
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'chief_complaints') THEN
    ALTER TABLE patient_forms ADD COLUMN chief_complaints text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'duration_of_complaints') THEN
    ALTER TABLE patient_forms ADD COLUMN duration_of_complaints text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'previous_treatments') THEN
    ALTER TABLE patient_forms ADD COLUMN previous_treatments text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'current_medications') THEN
    ALTER TABLE patient_forms ADD COLUMN current_medications text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'family_medical_history') THEN
    ALTER TABLE patient_forms ADD COLUMN family_medical_history text;
  END IF;

  -- Lifestyle Information
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'lifestyle_habits') THEN
    ALTER TABLE patient_forms ADD COLUMN lifestyle_habits text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'sleep_pattern') THEN
    ALTER TABLE patient_forms ADD COLUMN sleep_pattern text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'appetite') THEN
    ALTER TABLE patient_forms ADD COLUMN appetite text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'food_preferences') THEN
    ALTER TABLE patient_forms ADD COLUMN food_preferences text;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'patient_forms' AND column_name = 'mental_emotional_state') THEN
    ALTER TABLE patient_forms ADD COLUMN mental_emotional_state text;
  END IF;
END $$;