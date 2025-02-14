-- Make symptoms column nullable since we're not using it anymore
ALTER TABLE patient_forms ALTER COLUMN symptoms DROP NOT NULL;

-- Verify all required columns match our form
ALTER TABLE patient_forms ALTER COLUMN patient_name SET NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN email SET NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN phone SET NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN age SET NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN gender SET NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN address SET NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN city SET NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN state SET NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN pincode SET NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN chief_complaints SET NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN duration_of_complaints SET NOT NULL;

-- Make optional columns nullable
ALTER TABLE patient_forms ALTER COLUMN symptoms DROP NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN medical_history DROP NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN marital_status DROP NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN occupation DROP NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN previous_treatments DROP NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN current_medications DROP NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN family_medical_history DROP NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN lifestyle_habits DROP NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN sleep_pattern DROP NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN appetite DROP NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN food_preferences DROP NOT NULL;
ALTER TABLE patient_forms ALTER COLUMN mental_emotional_state DROP NOT NULL; 