import { Button } from '@/components/ui/button'
import { CampaignCard } from '@/components/campaign-card'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SpecialBannerCarousel } from '@/components/special-banner-carousel'
import { getFeaturedCampaigns, getUrgentCampaigns } from '@/lib/services/campaign-service'
import { ArrowRight, Heart, Shield, TrendingUp, Users, ChevronRight, HandHeart, Coins, Building2, Briefcase, Lightbulb, Sprout, GraduationCap, HeartPulse } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [urgentCampaigns, featuredCampaigns] = await Promise.all([
    getUrgentCampaigns(10),
    getFeaturedCampaigns(6),
  ])

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Wujudkan Kebaikan Bersama
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Platform crowdfunding terpercaya untuk membantu sesama dan mewujudkan impian bersama
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild>
                  <Link href="/campaigns">
                    Jelajahi Campaign
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/create">Buat Campaign</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Action Categories */}
        <section className="py-8 md:py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">
              Mau berbuat baik apa hari ini?
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 max-w-5xl mx-auto">
              {/* Donasi */}
              <Link href="/campaigns" className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <HandHeart className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <span className="text-xs md:text-sm text-center font-medium">Donasi</span>
              </Link>

              {/* Zakat */}
              <Link href="/category/zakat" className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <Coins className="h-7 w-7 md:h-8 md:w-8 text-green-600" />
                </div>
                <span className="text-xs md:text-sm text-center font-medium">Zakat</span>
              </Link>

              {/* Galang Dana */}
              <Link href="/create" className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <TrendingUp className="h-7 w-7 md:h-8 md:w-8 text-blue-600" />
                </div>
                <span className="text-xs md:text-sm text-center font-medium">Galang Dana</span>
              </Link>

              {/* Donasi Otomatis */}
              <Link href="/auto-donate" className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Building2 className="h-7 w-7 md:h-8 md:w-8 text-purple-600" />
                </div>
                <span className="text-xs md:text-sm text-center font-medium">Donasi Otomatis</span>
              </Link>

              {/* Kitabisa Experience */}
              <Link href="/experience" className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Lightbulb className="h-7 w-7 md:h-8 md:w-8 text-orange-600" />
                </div>
                <span className="text-xs md:text-sm text-center font-medium">Experience</span>
              </Link>

              {/* Kolaborasi CSR */}
              <Link href="/corporate" className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Briefcase className="h-7 w-7 md:h-8 md:w-8 text-cyan-600" />
                </div>
                <span className="text-xs md:text-sm text-center font-medium">Kolaborasi CSR</span>
              </Link>

              {/* Asuransi SalingJaga */}
              <Link href="/programs/salingjaga" className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Shield className="h-7 w-7 md:h-8 md:w-8 text-emerald-600" />
                </div>
                <span className="text-xs md:text-sm text-center font-medium">Asuransi SalingJaga</span>
              </Link>

              {/* Dana Abadi */}
              <Link href="/dana-abadi" className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <Sprout className="h-7 w-7 md:h-8 md:w-8 text-teal-600" />
                </div>
                <span className="text-xs md:text-sm text-center font-medium">Dana Abadi</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  Rp 2.5M+
                </div>
                <div className="text-sm text-muted-foreground">Dana Terkumpul</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  10K+
                </div>
                <div className="text-sm text-muted-foreground">Donatur</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">Campaign Sukses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Transparan</div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Campaigns - Horizontal Scroll */}
        {urgentCampaigns.length > 0 && (
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="text-lg md:text-xl font-bold">Penggalangan Dana Mendesak</h2>
                <Link href="/campaigns?filter=urgent" className="text-sm text-primary font-medium hover:underline">
                  Lihat Semua
                </Link>
              </div>
              
              {/* Horizontal Scrollable Container */}
              <div className="overflow-x-auto -mx-4 px-4">
                <div className="flex gap-3 md:gap-4 pb-2">
                  {urgentCampaigns.map((campaign) => (
                    <Link 
                      key={campaign.id} 
                      href={`/campaign/${campaign.slug}`}
                      className="flex-shrink-0 w-64 md:w-72 group"
                    >
                      <div className="bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
                        {/* Image */}
                        <div className="relative h-36 md:h-40 overflow-hidden">
                          <img 
                            src={campaign.imageUrl} 
                            alt={campaign.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {campaign.isUrgent && (
                            <div className="absolute top-2 left-2">
                              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                MENDESAK
                              </span>
                            </div>
                          )}
                          {campaign.isVerified && (
                            <div className="absolute top-2 right-2">
                              <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                                <Shield className="h-3 w-3" />
                                Terverifikasi
                              </span>
                            </div>
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className="p-3 md:p-4">
                          <h3 className="font-semibold text-sm md:text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors h-10">
                            {campaign.title}
                          </h3>
                          
                          {/* Organizer */}
                          <div className="flex items-center gap-2 mb-3">
                            <img 
                              src={campaign.organizer.avatarUrl} 
                              alt={campaign.organizer.name}
                              className="w-5 h-5 rounded-full"
                            />
                            <span className="text-xs text-muted-foreground truncate">
                              {campaign.organizer.name}
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="mb-2">
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary rounded-full transition-all"
                                style={{ 
                                  width: `${Math.min((campaign.currentAmount / campaign.targetAmount) * 100, 100)}%` 
                                }}
                              />
                            </div>
                          </div>
                          
                          {/* Stats */}
                          <div className="flex items-center justify-between text-xs">
                            <div>
                              <div className="font-bold text-sm">
                                Rp {(campaign.currentAmount / 1000000).toFixed(1)}jt
                              </div>
                              <div className="text-muted-foreground">
                                terkumpul
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold">
                                {campaign.daysRemaining} hari
                              </div>
                              <div className="text-muted-foreground">
                                tersisa
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Special Banner - Spesial Buat Kamu */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Spesial Buat Kamu</h2>
            <SpecialBannerCarousel />
          </div>
        </section>

        {/* Featured Campaigns - Horizontal Scroll */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl font-bold">Campaign Pilihan</h2>
              <Link href="/campaigns" className="text-sm text-primary font-medium hover:underline">
                Lihat Semua
              </Link>
            </div>
            
            {/* Horizontal Scrollable Container */}
            <div className="overflow-x-auto -mx-4 px-4">
              <div className="flex gap-3 md:gap-4 pb-2">
                {featuredCampaigns.map((campaign) => (
                  <Link 
                    key={campaign.id} 
                    href={`/campaign/${campaign.slug}`}
                    className="flex-shrink-0 w-64 md:w-72 group"
                  >
                    <div className="bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
                      {/* Image */}
                      <div className="relative h-36 md:h-40 overflow-hidden">
                        <img 
                          src={campaign.imageUrl} 
                          alt={campaign.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {campaign.isUrgent && (
                          <div className="absolute top-2 left-2">
                            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                              MENDESAK
                            </span>
                          </div>
                        )}
                        {campaign.isVerified && (
                          <div className="absolute top-2 right-2">
                            <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                              <Shield className="h-3 w-3" />
                              Terverifikasi
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="p-3 md:p-4">
                        <h3 className="font-semibold text-sm md:text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors h-10">
                          {campaign.title}
                        </h3>
                        
                        {/* Organizer */}
                        <div className="flex items-center gap-2 mb-3">
                          <img 
                            src={campaign.organizer.avatarUrl} 
                            alt={campaign.organizer.name}
                            className="w-5 h-5 rounded-full"
                          />
                          <span className="text-xs text-muted-foreground truncate">
                            {campaign.organizer.name}
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mb-2">
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full transition-all"
                              style={{ 
                                width: `${Math.min((campaign.currentAmount / campaign.targetAmount) * 100, 100)}%` 
                              }}
                            />
                          </div>
                        </div>
                        
                        {/* Stats */}
                        <div className="flex items-center justify-between text-xs">
                          <div>
                            <div className="font-bold text-sm">
                              Rp {(campaign.currentAmount / 1000000).toFixed(1)}jt
                            </div>
                            <div className="text-muted-foreground">
                              terkumpul
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">
                              {campaign.daysRemaining} hari
                            </div>
                            <div className="text-muted-foreground">
                              tersisa
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Compact Horizontal */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Mengapa KitaPeduli?</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div className="bg-card rounded-lg p-4 border hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm">Aman & Terpercaya</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    Verifikasi ketat
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-4 border hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm">Transparan</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    Laporan jelas
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-4 border hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm">Komunitas Solid</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    Ribuan donatur
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-4 border hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm">Mudah Digunakan</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    Interface simpel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Mulai Berbagi Kebaikan Hari Ini
              </h2>
              <p className="text-lg opacity-90">
                Buat campaign atau berdonasi untuk membantu sesama yang membutuhkan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/create">Buat Campaign Gratis</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                  <Link href="/campaigns">Mulai Berdonasi</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section - Before Footer */}
        <section className="py-8 md:py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Tentang Platform */}
              <div className="flex gap-3 md:gap-4 items-start">
                <div className="w-24 md:w-40 flex-shrink-0">
                  <img 
                    src="https://picsum.photos/seed/about1/200/150" 
                    alt="Tentang KitaPeduli"
                    className="rounded-lg w-full h-20 md:h-24 object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-bold mb-1 md:mb-2">Tentang KitaPeduli</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2 line-clamp-2">
                    Platform crowdfunding terpercaya yang menghubungkan para dermawan dengan mereka yang membutuhkan bantuan. 
                    Kami berkomitmen untuk transparansi dan kemudahan dalam setiap transaksi.
                  </p>
                  <Link href="/about" className="text-xs md:text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Baca selengkapnya
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Salingjaga Keluarga */}
              <div className="flex gap-3 md:gap-4 items-start">
                <div className="w-24 md:w-40 flex-shrink-0">
                  <img 
                    src="https://picsum.photos/seed/family1/200/150" 
                    alt="Salingjaga Keluarga"
                    className="rounded-lg w-full h-20 md:h-24 object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-bold mb-1 md:mb-2">Salingjaga Keluarga</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2 line-clamp-2">
                    Bergabunglah dalam gerakan saling menjaga untuk keluarga Indonesia. 
                    Bersama-sama kita bisa memberikan perlindungan dan bantuan untuk keluarga yang membutuhkan.
                  </p>
                  <Link href="/programs/salingjaga" className="text-xs md:text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Baca selengkapnya
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Kolaborasi Perusahaan */}
              <div className="flex gap-3 md:gap-4 items-start">
                <div className="w-24 md:w-40 flex-shrink-0">
                  <img 
                    src="https://picsum.photos/seed/corporate1/200/150" 
                    alt="Kolaborasi Perusahaan"
                    className="rounded-lg w-full h-20 md:h-24 object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-bold mb-1 md:mb-2">Kolaborasi Perusahaan dan Brand</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2 line-clamp-2">
                    Wujudkan tanggung jawab sosial perusahaan Anda bersama kami. 
                    Kami menawarkan berbagai program CSR yang dapat disesuaikan dengan visi perusahaan Anda.
                  </p>
                  <Link href="/corporate" className="text-xs md:text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Baca selengkapnya
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 pt-6 border-t">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Terdaftar sejak 2025. KitaPeduli memiliki izin Penggalangan Dana secara Nasional dari Kementerian Sosial RI. 
                KitaPeduli juga diawasi dengan ketat oleh Kominfo dan OJK (Otoritas Jasa Keuangan).
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
