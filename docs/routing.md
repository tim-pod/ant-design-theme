# Routing Documentation

## Component Page Flow

When a component page is accessed (e.g., `/layout/sidebar`), the following flow occurs:

1. The `ComponentPage` component:
   - Extracts the category ('layout') and component ('sidebar') from the URL
   - Searches the component registry for matching component data
   - Passes the title, description, and guidelines to the `PageHeader`

2. Component data in the registry (`src/data/components/index.tsx`) contains:
   - category: The section the component belongs to (e.g., 'layout')
   - key: The unique identifier for the component (e.g., 'sidebar')
   - title: Display name of the component
   - description: Brief explanation of the component's purpose
   - guidelines: Array of best practices for using the component
   - content: The actual component demonstration and documentation

Example component registration:
```typescript
{
    category: 'layout',
    key: 'sidebar',
    title: 'Sidebar',
    description: 'A collapsible sidebar menu component that provides navigation with expandable/collapsible sections.',
    guidelines: [
        'Use clear and descriptive labels for menu items',
        'Group related items into sub-menus',
        'Provide visual feedback for selected and hovered items',
        'Consider using icons to improve visual recognition',
        'Keep the menu structure shallow, preferably no more than 3 levels deep'
    ],
    content: <SidebarContent />,
}
```

## Route Structure

The application uses React Router with the following route structure:

```typescript
<Routes>
  <Route element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path=":category/:component" element={<ComponentPage />} />
    <Route path="colors/:type" element={<ColorPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Route>
</Routes>
```

- `:category`: Represents the component category (e.g., 'layout', 'general', 'data-entry')
- `:component`: Represents the specific component name (e.g., 'sidebar', 'button', 'input')

## Page Header

The `PageHeader` component displays:
- Title of the component
- Description explaining its purpose
- Usage guidelines as a bulleted list
- Back navigation button

This consistent structure helps maintain a uniform documentation experience across all components. 