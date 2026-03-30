# JSX Usage Patterns

## Props vs HTML Attributes

Ignite UI React components accept props just like any React component. Use JSX expression syntax for dynamic values:

```tsx
// ✅ Correct — JSX expression
<IgrInput label="Email" placeholder="you@example.com" type="email" />
<IgrSlider value={50} min={0} max={100} />
<IgrButton disabled={isLoading}>Submit</IgrButton>

// ❌ Wrong — string for numeric/boolean values
<IgrSlider value="50" />
```

## Children vs Slots

Ignite UI components use the web component **slot** mechanism under the hood. In JSX, pass children to the default slot and use the `slot` attribute to target named slots:

```tsx
<IgrButton>
  {/* Default slot — button label */}
  <span>Click Me</span>
</IgrButton>

<IgrCard>
  <IgrCardHeader>
    <h3 slot="title">Card Title</h3>
    <p slot="subtitle">Card subtitle</p>
  </IgrCardHeader>
  <IgrCardContent>
    <p>Default slot content inside the card body.</p>
  </IgrCardContent>
  <IgrCardActions>
    <IgrButton slot="start">Cancel</IgrButton>
    <IgrButton slot="end">Confirm</IgrButton>
  </IgrCardActions>
</IgrCard>

<IgrNavDrawerItem>
  <span slot="icon">📊</span>
  <span slot="content">Dashboard</span>
</IgrNavDrawerItem>
```

> **Tip:** Check the component documentation for available slot names. Common slots include `start`, `end`, `prefix`, `suffix`, `header`, `content`, `icon`, `title`, `subtitle`.

## Render Props (Grids & Complex Components)

Some components like the Data Grid support **render props** for custom cell rendering:

```tsx
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';

function UserGrid({ users }: { users: User[] }) {
  return (
    <IgrGrid data={users} autoGenerate={false}>
      <IgrColumn field="name" header="Name" />
      <IgrColumn field="email" header="Email" />
      <IgrColumn
        field="status"
        header="Status"
        bodyTemplate={(ctx) => (
          <IgrBadge>{ctx.cell.value}</IgrBadge>
        )}
      />
    </IgrGrid>
  );
}
```

## IgrTabs — Content Panels vs Navigation

`IgrTabs` supports two distinct usage patterns. Choosing the wrong one is a common mistake.

### Pattern 1: Tabs with Content Panels (inline content)

Use `IgrTab` with inline content when the tabbed content is rendered inline — no routing involved. The tab label can be set via a `label` prop or via a `slot="label"` element:

```tsx
import { IgrTabs, IgrTab } from 'igniteui-react';

// Simple text labels using the label prop
function SettingsPage() {
  return (
    <IgrTabs>
      <IgrTab label="Profile" selected>
        <p>Profile settings content here</p>
      </IgrTab>
      <IgrTab label="Security">
        <p>Security settings content here</p>
      </IgrTab>
      <IgrTab label="Notifications">
        <p>Notification preferences content here</p>
      </IgrTab>
    </IgrTabs>
  );
}
```

**Alternative: Using slot="label" for complex headers (e.g., with icons):**

```tsx
import { IgrTabs, IgrTab, IgrIcon } from 'igniteui-react';

function SettingsPage() {
  return (
    <IgrTabs>
      <IgrTab selected>
        <span slot="label">
          <IgrIcon name="home" collection="material" />
          Profile
        </span>
        <p>Profile settings content here</p>
      </IgrTab>
      <IgrTab>
        <span slot="label">
          <IgrIcon name="security" collection="material" />
          Security
        </span>
        <p>Security settings content here</p>
      </IgrTab>
      <IgrTab>
        <span slot="label">
          <IgrIcon name="notifications" collection="material" />
          Notifications
        </span>
        <p>Notification preferences content here</p>
      </IgrTab>
    </IgrTabs>
  );
}
```

### Pattern 2: Tabs as Navigation (with React Router — NO inline content)

> **⚠️ CRITICAL:** When using `IgrTabs` for navigation with React Router (or any router), **do NOT include inline content in `IgrTab`**. Only render tab labels (via `label` prop or `slot="label"`), and let the router's `<Outlet />` handle the content below the tabs.

```tsx
import { IgrTabs, IgrTab } from 'igniteui-react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const tabs = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/orders', label: 'Orders' },
  { path: '/customers', label: 'Customers' },
];

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabChange = (e: CustomEvent) => {
    const selectedIndex = (e.target as any).selectedIndex;
    if (selectedIndex !== undefined && tabs[selectedIndex]) {
      navigate(tabs[selectedIndex].path);
    }
  };

  return (
    <div>
      {/* Tabs for navigation — label prop only, no inline content */}
      <IgrTabs onChange={handleTabChange}>
        {tabs.map((tab) => (
          <IgrTab
            key={tab.path}
            label={tab.label}
            selected={location.pathname === tab.path}
          />
        ))}
      </IgrTabs>

      {/* Router outlet renders the routed view */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
```

**Key rules for tabs-as-navigation:**
- ✅ Use only `IgrTab` with label prop or `slot="label"` — no inline content
- ✅ Sync the active tab to the current route using the `selected` prop
- ✅ Handle `onChange` to call `navigate()` for route changes
- ✅ Use `<Outlet />` (or the equivalent in your router) for content rendering
