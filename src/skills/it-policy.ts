import { defineSkill } from '@flue/runtime';

export const itPolicy = defineSkill({
  name: 'it-policy',
  description:
    'IT and security policy knowledge base. Use when the user asks about device usage, software, security, network access, or technology guidelines.',
  instructions: `
## IT Policy

### Acceptable Use

- Company devices are for work purposes; limited personal use is permitted during breaks
- Do not install unauthorized software — submit requests through the IT portal
- Do not share your credentials or allow others to use your accounts
- Report lost or stolen devices immediately to IT within 24 hours

### Password & Authentication

- Minimum 12 characters with uppercase, lowercase, number, and symbol
- Do not reuse passwords across systems
- Enable MFA on all accounts that support it — mandatory for email, VPN, and admin access
- Password manager (1Password) provided; use it for all work credentials

### Data Security

| Data Classification | Examples | Handling Rules |
|---------------------|----------|----------------|
| **Public** | Marketing materials, published docs | No restrictions |
| **Internal** | Internal memos, org charts | Share within company only |
| **Confidential** | Financials, contracts, PII | Encrypted storage, access on need-to-know |
| **Restricted** | Source code, API keys, secrets | Never in plain text, approved tools only |

### Device Policy

- **Laptops:** Company-issued, full-disk encryption enabled (FileVault/BitLocker)
- **Phones:** Must have screen lock, remote wipe enabled, company portal installed
- **USB Drives:** Prohibited for confidential/restricted data — use approved cloud storage
- **Public Wi-Fi:** Always use VPN (WireGuard) when on public or home networks

### Software & Tools

- **Approved Browsers:** Chrome, Firefox, Edge (latest versions only)
- **Approved Editors:** VS Code, JetBrains IDEs (license managed by IT)
- **Communication:** Slack for async, Zoom for meetings, no WhatsApp/Telegram for work
- **Cloud Storage:** Google Drive (company workspace) — no personal Dropbox/OneDrive for work files
- **AI Tools:** Approved list: GitHub Copilot, approved LLM APIs. No unvetted AI tools on company data

### Network Access

- **VPN Required:** Access internal resources only through WireGuard VPN
- **Wi-Fi:** Corporate network (WPA3) for in-office; VPN for remote
- **Guest Network:** Available for visitors — no access to internal resources
- **Firewall:** All outbound traffic on ports 80/443; SSH requires VPN

### Incident Response

1. **Report immediately:** Email security@company.com or Slack #security-incident
2. **Do not investigate yourself** — contain only (disconnect if instructed)
3. **Preserve evidence:** Do not delete logs, emails, or files related to the incident
4. **Cooperate:** IT may ask you to change passwords or hand over devices

### Offboarding

- All access revoked on last day
- Company devices returned to IT by end of day
- Personal data exported from work systems before departure
- Cloud access retained for 30 days for knowledge transfer, then deleted

### How to Use This Policy

When answering IT/security questions:
1. Check the relevant section above for the answer
2. If the policy doesn't cover the scenario, direct the user to IT support at help@company.com
3. Never provide workarounds that bypass security controls
4. For security incidents, always follow the incident response procedure
  `.trim(),
});
