# Language Switching Implementation

This project now supports language switching between English, Arabic, and Hebrew without RTL (Right-to-Left) support.

## Features

- **Multi-language Support**: English, Arabic, and Hebrew
- **Language Persistence**: Selected language is saved in localStorage
- **No RTL Support**: All languages display left-to-right as requested
- **Responsive Design**: Language switcher works on both desktop and mobile
- **Fallback Support**: Falls back to English if translations fail to load

## Components

### 1. Language Context (`src/contexts/LanguageContext.tsx`)

- Manages the current language state
- Provides translation function `t(key)`
- Handles language switching and persistence
- Loads translation files dynamically

### 2. Language Switcher (`src/components/LanguageSwitcher.tsx`)

- Dropdown component for language selection
- Shows current language with flag and name
- Responsive design for mobile and desktop
- Visual indicators for selected language

### 3. Translation Files

- `src/translations/en.json` - English translations
- `src/translations/ar.json` - Arabic translations
- `src/translations/he.json` - Hebrew translations

## Usage

### Basic Translation

```tsx
import { useLanguage } from "../contexts/LanguageContext";

function MyComponent() {
  const { t } = useLanguage();

  return <h1>{t("header.home")}</h1>;
}
```

### Language Switching

```tsx
import { useLanguage } from "../contexts/LanguageContext";

function MyComponent() {
  const { currentLanguage, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: "en" | "ar" | "he") => {
    setLanguage(lang);
  };

  return (
    <button onClick={() => handleLanguageChange("ar")}>Switch to Arabic</button>
  );
}
```

## Translation File Structure

```json
{
  "header": {
    "home": "Home",
    "about": "About Us",
    "services": "Services",
    "servicesList": {
      "electronics": "Electronics & Gadgets",
      "fashion": "Fashion & Apparel"
    }
  }
}
```

## Implementation Details

### Header Integration

- Language switcher is positioned before the dark mode toggle
- All navigation text is now translatable
- Mobile menu also supports translations
- Services dropdown items are dynamically translated

### Context Provider

- Wraps the entire application in `_app.tsx`
- Loads translations asynchronously
- Provides fallback to English on errors
- Persists language choice in localStorage

### Next.js Configuration

- Added i18n configuration in `next.config.ts`
- Supports locale detection
- Default locale is English

## Adding New Languages

1. Create a new translation file in `src/translations/`
2. Add the language code to the `Language` type in `LanguageContext.tsx`
3. Add the language to the `languages` array in `LanguageSwitcher.tsx`
4. Update the Next.js i18n configuration if needed

## Adding New Translations

1. Add the translation key to all language files
2. Use the `t()` function in your components
3. Follow the nested key structure (e.g., `header.services.electronics`)

## Notes

- **No RTL Support**: As requested, all languages display left-to-right
- **Font Support**: Ensure your application supports Arabic and Hebrew fonts
- **Performance**: Translations are loaded dynamically and cached
- **Accessibility**: Language switcher includes proper ARIA labels

## Testing

1. Start the development server: `npm run dev`
2. Navigate to any page with the header
3. Click the language switcher (globe icon)
4. Select different languages to see the interface change
5. Refresh the page to verify language persistence
