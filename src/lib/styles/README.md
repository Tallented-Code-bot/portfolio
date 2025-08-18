# Portfolio Color System

This document provides an overview of the CSS custom properties (variables) used throughout the portfolio for consistent styling and easy theme management.

## 🎨 Color Variables

### Primary Colors
```css
--color-primary: #2563eb          /* Main brand color */
--color-primary-hover: #1d4ed8    /* Primary hover state */
--color-primary-light: #3b82f6    /* Lighter primary variant */
--color-primary-dark: #1e40af     /* Darker primary variant */
```

### Secondary Colors
```css
--color-secondary: #6366f1        /* Secondary brand color */
--color-secondary-hover: #5b21b6  /* Secondary hover state */
--color-secondary-light: #8b5cf6  /* Lighter secondary variant */
```

### Accent Colors
```css
--color-accent: #fbbf24           /* Highlight/accent color */
--color-accent-hover: #f59e0b     /* Accent hover state */
--color-accent-light: #fcd34d     /* Lighter accent variant */
```

### Text Colors
```css
--color-text-primary: #1f2937     /* Main text color */
--color-text-secondary: #374151   /* Secondary text color */
--color-text-muted: #6b7280       /* Muted/subtle text */
--color-text-light: #9ca3af       /* Light text for less emphasis */
--color-text-white: #ffffff       /* White text for dark backgrounds */
--color-text-link: #60a5fa        /* Link color */
--color-text-link-hover: #3b82f6  /* Link hover color */
```

### Background Colors
```css
--color-bg-primary: #ffffff       /* Main background */
--color-bg-secondary: #f9fafb     /* Secondary background */
--color-bg-tertiary: #f3f4f6      /* Tertiary background */
--color-bg-dark: #1f2937          /* Dark background */
--color-bg-darker: #111827        /* Darker background */
--color-bg-overlay: rgba(0, 0, 0, 0.8) /* Overlay background */
```

### Border Colors
```css
--color-border-light: #e5e7eb     /* Light border */
--color-border-medium: #d1d5db    /* Medium border */
--color-border-dark: #9ca3af      /* Dark border */
--color-border-focus: #2563eb     /* Focus ring color */
```

### Surface Colors
```css
--color-surface: #ffffff          /* Card/surface background */
--color-surface-hover: #f8fafc    /* Surface hover state */
--color-surface-active: #f1f5f9   /* Surface active state */
```

### Status Colors
```css
/* Success */
--color-success: #22c55e
--color-success-hover: #16a34a
--color-success-light: #dcfce7
--color-success-text: #065f46

/* Warning */
--color-warning: #f59e0b
--color-warning-hover: #d97706
--color-warning-light: #fef3c7
--color-warning-text: #92400e

/* Error */
--color-error: #ef4444
--color-error-hover: #dc2626
--color-error-light: #fee2e2
--color-error-text: #991b1b

/* Info */
--color-info: #06b6d4
--color-info-hover: #0891b2
--color-info-light: #cffafe
--color-info-text: #0e7490
```

### Component-Specific Colors
```css
/* Technology Tags */
--color-tech-bg: #e0e7ff
--color-tech-text: #3730a3
--color-tech-hover-bg: #c7d2fe

/* Skill Items */
--color-skill-bg: #f3f4f6
--color-skill-text: #374151
--color-skill-hover-bg: #e5e7eb

/* Header */
--color-header-bg: rgba(255, 255, 255, 0.95)
--color-header-border: #eeeeee
```

## 🌈 Gradients

```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
--gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
```

## 💫 Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 8px 25px rgba(0, 0, 0, 0.15)
--shadow-xl: 0 8px 30px rgba(0, 0, 0, 0.12)
```

## 📐 Border Radius

```css
--border-radius-sm: 4px
--border-radius-md: 6px
--border-radius-lg: 8px
--border-radius-xl: 12px
--border-radius-full: 9999px
```

## ⚡ Transitions

```css
--transition-fast: 0.15s ease
--transition-normal: 0.3s ease
--transition-slow: 0.5s ease
```

## 🌙 Dark Mode Support

The color system includes automatic dark mode support via `prefers-color-scheme: dark`. Key variables that change in dark mode:

- Text colors become lighter
- Background colors become darker
- Surface colors adjust for dark theme
- Border colors adapt for better contrast

## 📖 Usage Examples

### Basic Usage
```css
.my-component {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-light);
}
```

### With Hover States
```css
.button {
  background-color: var(--color-primary);
  color: var(--color-text-white);
  transition: background-color var(--transition-normal);
}

.button:hover {
  background-color: var(--color-primary-hover);
}
```

### Status Styling
```css
.success-message {
  background-color: var(--color-success-light);
  color: var(--color-success-text);
  border-left: 4px solid var(--color-success);
}
```

## 🎯 Best Practices

1. **Always use CSS variables** instead of hardcoded colors
2. **Use semantic naming** - choose variables based on purpose, not appearance
3. **Test in dark mode** to ensure good contrast
4. **Use status colors consistently** for success, warning, error states
5. **Leverage transition variables** for consistent animation timing
6. **Use shadow variables** for consistent depth and elevation

## 🔧 Customization

To customize the color scheme:

1. Edit `src/lib/styles/variables.css`
2. Update the color values in the `:root` selector
3. Colors will automatically update throughout the entire application
4. Consider accessibility and contrast ratios when making changes

## 🚀 Adding New Colors

When adding new colors:

1. Follow the existing naming convention
2. Add hover and light variants if needed
3. Update this documentation
4. Consider dark mode variants
5. Test across all components