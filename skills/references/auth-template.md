# Authentication Template

> **Load this file when:** the user is using or asking about `--template=side-nav-auth`, needs the generated file structure, wants to enable external providers (Google, Microsoft, Facebook), or is preparing to deploy an app that was scaffolded with the auth template.

Angular `igx-ts` only. Scaffolds a full client-side auth module on top of the side-nav shell.

```bash
ig new "MyApp" --framework=angular --type=igx-ts --template=side-nav-auth
```

---

## Files Generated under `src/app/authentication/`

| File | Purpose |
|------|---------|
| `authentication.module.ts` | Exports all auth components and services |
| `authentication-routing.module.ts` | Login-related routes |
| `services/user.service.ts` | Current user state |
| `services/authentication.service.ts` | JWT logic wired to REST endpoints |
| `services/fake-backend.service.ts` | **Dev-only mock — remove before deployment** |

---

## Enable External Providers

Uncomment in `app.module.ts`:

```typescript
// this.externalAuthService.addGoogle('<CLIENT_ID>');
// this.externalAuthService.addMicrosoft('<CLIENT_ID>');
// this.externalAuthService.addFacebook('<CLIENT_ID>');
```

Supply a real `<CLIENT_ID>` from each provider's developer console. Never commit these values — use environment variables.

---

## Production Checklist

- [ ] Remove `fake-backend.service.ts` and its `BackendProvider` from `app.module.ts`
- [ ] Replace localStorage JWT with HttpOnly cookies (localStorage is XSS-vulnerable)
- [ ] Set correct redirect URLs and allowed origins in each provider's developer console
- [ ] Inject `<CLIENT_ID>` values via environment variables — never commit them to source control
