# CV Generation Feature

## Overview

Professional CV generation system that creates PDF resumes from user profile data with multiple customizable templates.

## Features

### ✅ Three Professional Templates

1. **Modern Professional** - Clean design with color accents and modern typography
2. **Classic Traditional** - Timeless formal layout for traditional industries
3. **Minimal Clean** - Simple elegant design with maximum readability

### ✅ Core Functionality

- **Template Selection** - Interactive template chooser with visual previews
- **Live PDF Preview** - Real-time CV preview before download
- **Instant Download** - Generate and download CV as PDF instantly
- **Cloud Storage** - Save CVs to user account (Supabase storage)
- **CV History** - Track all generated CVs with timestamps

### ✅ Data Integration

Automatically pulls from user profile:

- Basic Info (name, email, phone, address)
- Professional Summary (bio)
- Work Experience (company, position, dates, description)
- Education (all levels: school, college, university)
- Skills (displayed as tags)
- Hobbies/Interests

## Tech Stack

- **@react-pdf/renderer** - PDF generation library
- **React** - UI components
- **TypeScript** - Type safety
- **Supabase Storage** - Cloud CV storage
- **Framer Motion** - Smooth animations

## Usage

### For Users

1. Complete your profile with all relevant information
2. Click "Generate CV" button on Profile page
3. Select your preferred template from 3 options
4. Preview your CV in real-time
5. Download immediately or save to account

### For Developers

#### Generate CV Programmatically

```typescript
import { cvService } from "../services/cv.service";

// Generate and download
await cvService.downloadCV(profile, "modern", "MyCV.pdf");

// Upload to cloud
const url = await cvService.uploadCV(userId, profile, "classic");

// Generate blob only
const blob = await cvService.generateCVBlob(profile, "minimal");
```

#### Create Custom Template

```typescript
// src/components/cv/templates/CustomTemplate.tsx
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { Profile } from "../../../lib/supabase";

const styles = StyleSheet.create({
  // Your custom styles
});

export const CustomTemplate = ({ profile }: { profile: Profile }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Your custom layout */}
    </Page>
  </Document>
);
```

Then register in `cv.service.ts`:

```typescript
case 'custom': {
  const { CustomTemplate } = await import('../components/cv/templates/CustomTemplate');
  templateDocument = <CustomTemplate profile={profile} />;
  break;
}
```

## Templates Details

### Modern Template

- **Color Scheme**: Burgundy accents (#780000)
- **Font**: Helvetica
- **Style**: Contemporary with skill tags and section dividers
- **Best For**: Tech, creative, modern industries

### Classic Template

- **Color Scheme**: Black and white with minimal accents
- **Font**: Times Roman
- **Style**: Traditional centered header, formal layout
- **Best For**: Law, finance, government, academia

### Minimal Template

- **Color Scheme**: Grayscale with subtle accents
- **Font**: Helvetica
- **Style**: Clean lines, maximum white space, bullet points
- **Best For**: Design, startups, minimalist preference

## File Structure

```
src/
├── components/cv/templates/
│   ├── ModernTemplate.tsx      # Modern professional template
│   ├── ClassicTemplate.tsx     # Classic traditional template
│   └── MinimalTemplate.tsx     # Minimal clean template
├── pages/
│   └── CVGenerator.tsx         # Main CV generation page
└── services/
    └── cv.service.ts           # CV generation service
```

## Database Schema

### cv_documents table

```sql
CREATE TABLE cv_documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  template_used TEXT,
  file_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### profiles table (cv_link field)

```sql
ALTER TABLE profiles ADD COLUMN cv_link TEXT;
```

## Future Enhancements

- [ ] Custom color themes for each template
- [ ] LinkedIn import
- [ ] Multi-language support
- [ ] ATS-friendly template option
- [ ] Cover letter generation
- [ ] PDF editing capabilities
- [ ] Collaborative CV review
- [ ] Template marketplace

## Notes

- PDFs are generated client-side (no server required)
- All templates are mobile-responsive in preview
- Supports all education levels (school, college, university)
- Automatic formatting for dates and contact info
- Skills displayed as visual tags in Modern/Minimal templates
