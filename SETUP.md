# Setup Guide - Platform Crowdfunding

## Prerequisites

Sebelum memulai, pastikan Anda sudah menginstall:
- **Node.js** versi 18 atau lebih tinggi
- **npm** atau **yarn** package manager

## Installation Steps

### 1. Install Node.js

Download dan install Node.js dari [nodejs.org](https://nodejs.org/)

Verifikasi instalasi:
```bash
node --version
npm --version
```

### 2. Install Dependencies

Buka terminal di folder project dan jalankan:

```bash
npm install
```

Ini akan menginstall semua dependencies yang diperlukan:
- Next.js 14
- React 18
- TailwindCSS
- TypeScript
- Lucide React (icons)
- shadcn/ui components
- Dan lainnya

### 3. Run Development Server

Setelah instalasi selesai, jalankan:

```bash
npm run dev
```

Server development akan berjalan di `http://localhost:3000`

### 4. Build untuk Production

Untuk membuat build production:

```bash
npm run build
npm start
```

## Project Structure

```
crowdfund/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── campaigns/           # Campaign listing
│   │   └── page.tsx
│   ├── campaign/[slug]/     # Campaign detail (dynamic route)
│   │   └── page.tsx
│   └── create/              # Create campaign
│       └── page.tsx
├── components/              # React components
│   ├── ui/                 # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── progress.tsx
│   ├── campaign-card.tsx   # Campaign card component
│   ├── navigation.tsx      # Navigation bar
│   └── footer.tsx          # Footer
├── lib/                    # Utilities & helpers
│   ├── types.ts           # TypeScript type definitions
│   ├── utils.ts           # Utility functions
│   ├── db/                # TypeORM data source
│   ├── entities/          # Database entity definitions
│   └── services/          # Data access helpers
├── public/                # Static assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # TailwindCSS config
└── next.config.mjs        # Next.js config
```

## Available Pages

Setelah server berjalan, Anda bisa mengakses:

- **Homepage**: `http://localhost:3000/`
  - Hero section
  - Stats
  - Featured campaigns
  - Why choose us section

- **Campaign Listing**: `http://localhost:3000/campaigns`
  - Grid view semua campaigns
  - Filter (coming soon)

- **Campaign Detail**: `http://localhost:3000/campaign/[slug]`
  - Detail lengkap campaign
  - Donation list
  - Campaign updates
  - Organizer info
  
  Contoh: `http://localhost:3000/campaign/bantu-ibu-siti-operasi-jantung`

- **Create Campaign**: `http://localhost:3000/create`
  - Multi-step form (UI only, form functionality coming soon)

## Features Implemented

### ✅ Completed
- [x] Responsive mobile-first design
- [x] Modern UI dengan TailwindCSS + shadcn/ui
- [x] Homepage dengan hero, stats, featured campaigns
- [x] Campaign listing page
- [x] Campaign detail page dengan:
  - Progress bar
  - Donation list
  - Campaign updates
  - Organizer info
  - Trust indicators
- [x] Create campaign page (UI)
- [x] Navigation dengan mobile menu
- [x] Footer dengan links
- [x] MySQL + TypeORM integration dengan data sample
- [x] TypeScript untuk type safety
- [x] Reusable components

### 🚧 Coming Next (Phase 2)
- [ ] Authentication (Login/Register)
- [ ] Payment gateway (Midtrans/Xendit)
- [ ] Campaign creation form (functional)
- [ ] User dashboard
- [ ] Advanced search & filter
- [ ] Email notifications
- [ ] Campaign verification workflow
- [ ] Admin panel

## Database & Sample Data

Project sekarang langsung memakai MySQL melalui TypeORM. Ikuti langkah berikut:

1. Salin `env.local.example` menjadi `.env.local` dan isi kredensial MySQL Anda.
2. Buat database kosong bernama `crowdfund` di MySQL (phpMyAdmin atau CLI `CREATE DATABASE crowdfund;`).
3. Jalankan `npm run db:seed` untuk membuat tabel dan memasukkan 6 campaign sample lengkap dengan donations & updates.
4. Jalankan `npm run dev` dan aplikasi akan membaca data langsung dari database.

## Customization

### Mengubah Warna Primary

Edit `app/globals.css`:

```css
:root {
  --primary: 142 76% 36%; /* Hijau default */
}
```

### Menambah Campaign Baru

Tambahkan data langsung melalui database (phpMyAdmin, TablePlus, dsb.) atau buat script seed baru pada `scripts/`.

### Mengubah Logo/Brand Name

Edit `components/navigation.tsx` dan `components/footer.tsx`, cari "KitaPeduli" dan ganti dengan nama brand Anda.

## Troubleshooting

### Port 3000 sudah digunakan

Jalankan dengan port berbeda:
```bash
npm run dev -- -p 3001
```

### Error saat npm install

Hapus folder `node_modules` dan file `package-lock.json`, lalu install ulang:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors

Errors TypeScript normal terjadi sebelum dependencies diinstall. Setelah `npm install`, errors akan hilang.

## Next Steps

1. **Install dependencies** dengan `npm install`
2. **Run development server** dengan `npm run dev`
3. **Explore pages** yang sudah dibuat
4. **Customize** sesuai kebutuhan Anda
5. **Integrate backend** (Phase 2)

## Support

Jika ada pertanyaan atau issue, silakan buka issue di repository atau hubungi tim development.

Happy coding! 🚀
