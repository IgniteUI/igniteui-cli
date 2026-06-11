# Packages — OSS vs Licensed

> **Load this file when:** there is a 403/404 build error, the user asks about licensed vs OSS packages, needs to configure the Infragistics registry, set up a license key (v16+), or wants to switch between licensed and OSS.

## OSS (public npm)

No registry setup needed. Suitable for community-tier components.

```bash
npm install igniteui-angular
```

---

## Licensed (packages.infragistics.com)

Required for premium/enterprise components (e.g. pivot grid, advanced filtering).

### 1. Register the scoped registry

```bash
# Machine-wide (~/.npmrc)
npm config set @infragistics:registry https://packages.infragistics.com/npm/private-npm/
```

Or per-project (add to `<project-root>/.npmrc` — only commit if auth token is NOT included):
```
@infragistics:registry=https://packages.infragistics.com/npm/private-npm/
```

### 2. Authenticate interactively

```bash
npm adduser --registry=https://packages.infragistics.com/npm/private-npm/ --always-auth
```

### 3. Authenticate via token (CI/CD)

```
@infragistics:registry=https://packages.infragistics.com/npm/private-npm/
//packages.infragistics.com/npm/private-npm/:_auth=<BASE64_USER:PASS>
//packages.infragistics.com/npm/private-npm/:always-auth=true
//packages.infragistics.com/npm/private-npm/:email=<YOUR_EMAIL>
```

> **Never commit `.npmrc` files containing auth tokens.** Add to `.gitignore`.

### 4. Install

```bash
npm install @infragistics/igniteui-angular
npm list @infragistics/igniteui-angular    # verify
```

---

## License Key Setup (v16+)

From v16 onward, a runtime license key is also required.

### 1. Get your key

[Infragistics My Account](https://account.infragistics.com/subscriptions) → Subscriptions → copy key.

### 2. Apply the key

```typescript
import { IgxLicenseManager } from '@infragistics/igniteui-angular';

// Module-based (AppModule constructor) OR standalone (before bootstrapApplication)
IgxLicenseManager.setLicenseKey('YOUR_LICENSE_KEY');
```

### 3. Store securely — never hardcode in source

```typescript
// src/environments/environment.ts
export const environment = {
  igLicenseKey: process.env['IG_LICENSE_KEY'] ?? ''
};

// app.module.ts / app.config.ts
IgxLicenseManager.setLicenseKey(environment.igLicenseKey);
```

Set `IG_LICENSE_KEY` in CI/CD pipeline secrets. Add `environment.ts` with real keys to `.gitignore`.

> ⚠️ Missing or invalid key → watermark in dev, error in production builds.

---

## Switching Licensed → OSS

> ⚠️ Some premium components (pivot grid, advanced filtering) exist **only** in the licensed package and have no OSS equivalent. Switching will cause compile errors — replace or remove them first.

| Step | Action |
|------|--------|
| 1 | Remove `@infragistics:registry` from `.npmrc` |
| 2 | In `package.json`, replace `@infragistics/igniteui-angular` → `igniteui-angular` |
| 3 | Search `src/` for `@infragistics/igniteui-angular` imports and remove the scope |
| 4 | Remove all `IgxLicenseManager.setLicenseKey(...)` calls |
| 5 | `npm install` |
| 6 | Build and verify no `403` or missing module errors |

---

## Common Errors

| Error | Cause | Fix |
|-------|-------|-----|
| `403 Forbidden` on `npm install` | Not authenticated or trial account | Re-run `npm adduser` with a licensed account |
| `E404 Not Found` for `@infragistics/...` | Registry not registered | Add `@infragistics:registry` to `.npmrc` |
| Auth token rejected in CI | Token stale or wrong base64 encoding | Re-encode `user:password` and update pipeline secret |
| `ENOENT .npmrc` in Docker | File not copied into image | Add `.npmrc` to Docker build context (exclude from final image) |
| Watermark on components | License key missing | Add `IgxLicenseManager.setLicenseKey(...)` before app initializes |
| `LicenseKey is not valid` in prod | Key expired or wrong product tier | Verify key in Infragistics account portal |
