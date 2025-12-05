# Platform Crowdfunding Indonesia

Platform crowdfunding modern dengan mobile-first approach untuk membantu sesama dan mewujudkan impian bersama.

## Fitur Utama

- 🎯 **Mobile-First Design** - Dioptimalkan untuk pengalaman mobile
- 💳 **Multiple Payment Methods** - Integrasi dengan Midtrans/Xendit
- 🔒 **Secure & Verified** - Sistem verifikasi campaign yang ketat
- 📊 **Transparent** - Laporan penggunaan dana yang jelas
- 🌐 **Multi-Category** - Kesehatan, Pendidikan, Bencana Alam, dll

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Icons**: Lucide React
- **Database**: MySQL (production)
- **Payment**: Midtrans/Xendit

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Database Setup (XAMPP MySQL)

1. Salin `env.local.example` menjadi `.env.local` lalu sesuaikan kredensial (default: `root` tanpa password).
2. Buat database baru bernama `crowdfund` di MySQL (phpMyAdmin atau CLI).
3. Jalankan `npm run db:seed` untuk mengisi data sample.
4. Setelah itu jalankan `npm run dev` dan data akan diambil langsung dari MySQL lewat TypeORM.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── campaign-card.tsx # Campaign card component
│   ├── navigation.tsx    # Navigation bar
│   └── footer.tsx        # Footer
├── lib/                  # Utilities & helpers
│   ├── types.ts         # TypeScript types
│   ├── utils.ts         # Utility functions
│   ├── db/              # TypeORM data source
│   ├── entities/        # Database entities
│   └── services/        # Data access helpers
└── public/              # Static assets
```

## Development Roadmap

### Phase 1 (Current - MVP)
- [x] Project setup
- [x] Homepage design
- [x] Campaign listing
- [x] Database (MySQL + TypeORM) seeding
- [x] Campaign detail page
- [ ] Create campaign flow
- [ ] User dashboard

### Phase 2
- [ ] Authentication (email/password)
- [ ] Payment integration (Midtrans)
- [ ] MySQL database integration
- [ ] Campaign verification system
- [ ] Email notifications

### Phase 3
- [ ] Admin panel
- [ ] Analytics dashboard
- [ ] Recurring donations
- [ ] Social sharing
- [ ] Multi-language support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.
