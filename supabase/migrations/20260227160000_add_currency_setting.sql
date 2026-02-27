-- Add currency preference to organization settings
ALTER TABLE public.organization_settings ADD COLUMN IF NOT EXISTS currency text DEFAULT 'BRL';
