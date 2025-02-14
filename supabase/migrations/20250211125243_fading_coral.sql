/*
  # Initial Schema Setup for Homeopathic Doctor Website

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `status` (text)
    - `patient_forms`
      - `id` (uuid, primary key)
      - `patient_name` (text)
      - `email` (text)
      - `phone` (text)
      - `age` (integer)
      - `symptoms` (text)
      - `medical_history` (text)
      - `created_at` (timestamp)
      - `status` (text)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users (doctor) to read all submissions
    - Add policies for public users to create submissions
*/

-- Contact Submissions Table
CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Patient Forms Table
CREATE TABLE patient_forms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  email text NOT NULL,
  phone text,
  age integer,
  symptoms text NOT NULL,
  medical_history text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE patient_forms ENABLE ROW LEVEL SECURITY;

-- Policies for contact_submissions
CREATE POLICY "Allow public to create contact submissions"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for patient_forms
CREATE POLICY "Allow public to create patient forms"
  ON patient_forms
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read patient forms"
  ON patient_forms
  FOR SELECT
  TO authenticated
  USING (true);

-- Add new policy for updates
CREATE POLICY "Allow authenticated users to update patient forms"
  ON patient_forms
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);