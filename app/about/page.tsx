import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Heart, 
  Shield, 
  Users, 
  TrendingUp,
  Target,
  Award,
  CheckCircle2,
  Globe,
  Zap,
  Lock
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="mb-4">Tentang Kami</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Platform Crowdfunding Terpercaya untuk Indonesia
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Menghubungkan kebaikan hati para donatur dengan mereka yang membutuhkan bantuan
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Misi Kami</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Memberikan akses mudah dan aman bagi setiap orang untuk menggalang dana dan membantu sesama. 
                    Kami percaya bahwa setiap orang berhak mendapatkan bantuan dan setiap kebaikan layak diwujudkan.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Visi Kami</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Menjadi platform crowdfunding terdepan di Indonesia yang menghubungkan jutaan donatur dengan 
                    berbagai campaign sosial, kesehatan, pendidikan, dan kemanusiaan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dampak Kami</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Bersama-sama kita telah membuat perbedaan nyata dalam kehidupan ribuan orang
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  Rp 2.5M+
                </div>
                <div className="text-sm text-muted-foreground">Total Dana Terkumpul</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  10K+
                </div>
                <div className="text-sm text-muted-foreground">Donatur Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">Campaign Berhasil</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  98%
                </div>
                <div className="text-sm text-muted-foreground">Tingkat Kepuasan</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nilai-Nilai Kami</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Prinsip yang menjadi fondasi dalam setiap langkah kami
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Kepercayaan</h3>
                  <p className="text-muted-foreground">
                    Kami membangun kepercayaan melalui transparansi, verifikasi ketat, dan 
                    akuntabilitas dalam setiap campaign.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Empati</h3>
                  <p className="text-muted-foreground">
                    Kami memahami setiap cerita di balik campaign dan berkomitmen untuk 
                    membantu dengan sepenuh hati.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Transparansi</h3>
                  <p className="text-muted-foreground">
                    Setiap rupiah yang masuk dan keluar dapat dilacak dengan jelas oleh 
                    semua pihak yang terlibat.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Komunitas</h3>
                  <p className="text-muted-foreground">
                    Kami membangun komunitas yang solid dan saling mendukung untuk 
                    menciptakan dampak yang lebih besar.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Inovasi</h3>
                  <p className="text-muted-foreground">
                    Kami terus berinovasi untuk memberikan pengalaman terbaik bagi 
                    penggalang dana dan donatur.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Keamanan</h3>
                  <p className="text-muted-foreground">
                    Data dan transaksi Anda dilindungi dengan sistem keamanan berlapis 
                    dan enkripsi tingkat tinggi.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara Kerja</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Proses yang mudah dan transparan untuk menggalang dana atau berdonasi
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Buat Campaign</h3>
                <p className="text-muted-foreground">
                  Ceritakan kisah Anda, tentukan target dana, dan upload dokumen pendukung. 
                  Tim kami akan memverifikasi dalam 1x24 jam.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Bagikan</h3>
                <p className="text-muted-foreground">
                  Sebarkan campaign Anda ke keluarga, teman, dan media sosial. 
                  Semakin banyak yang tahu, semakin cepat target tercapai.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Terima Dana</h3>
                <p className="text-muted-foreground">
                  Dana yang terkumpul dapat dicairkan kapan saja. Berikan update rutin 
                  kepada para donatur tentang perkembangan campaign.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Kami?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Keunggulan yang membuat kami berbeda dari platform lainnya
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Verifikasi Ketat</h3>
                  <p className="text-sm text-muted-foreground">
                    Setiap campaign diverifikasi oleh tim kami untuk memastikan keaslian dan kredibilitas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Biaya Transparan</h3>
                  <p className="text-sm text-muted-foreground">
                    Tidak ada biaya tersembunyi. Semua biaya platform dijelaskan dengan jelas di awal.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Pencairan Cepat</h3>
                  <p className="text-sm text-muted-foreground">
                    Dana dapat dicairkan kapan saja tanpa harus menunggu campaign selesai.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Support 24/7</h3>
                  <p className="text-sm text-muted-foreground">
                    Tim customer service kami siap membantu Anda kapan saja melalui berbagai channel.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Payment Gateway Lokal</h3>
                  <p className="text-sm text-muted-foreground">
                    Integrasi dengan payment gateway lokal seperti Midtrans dan Xendit untuk kemudahan transaksi.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Mobile Friendly</h3>
                  <p className="text-sm text-muted-foreground">
                    Platform kami dioptimalkan untuk pengalaman mobile yang sempurna di semua perangkat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tim Kami</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Orang-orang yang berdedikasi untuk membuat perbedaan
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Tim Teknologi</h3>
                  <p className="text-sm text-muted-foreground mb-3">Engineering & Product</p>
                  <p className="text-sm text-muted-foreground">
                    Membangun platform yang aman, cepat, dan mudah digunakan
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Tim Verifikasi</h3>
                  <p className="text-sm text-muted-foreground mb-3">Campaign Review</p>
                  <p className="text-sm text-muted-foreground">
                    Memastikan setiap campaign terverifikasi dan kredibel
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Tim Support</h3>
                  <p className="text-sm text-muted-foreground mb-3">Customer Service</p>
                  <p className="text-sm text-muted-foreground">
                    Siap membantu Anda 24/7 dengan sepenuh hati
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 md:p-12 text-center">
                <Award className="h-16 w-16 mx-auto mb-6 opacity-90" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Siap Membuat Perbedaan?
                </h2>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  Bergabunglah dengan ribuan orang yang telah mempercayai kami untuk 
                  mewujudkan kebaikan dan membantu sesama
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/create" 
                    className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
                  >
                    Mulai Campaign
                  </a>
                  <a 
                    href="/campaigns" 
                    className="inline-flex items-center justify-center px-8 py-3 rounded-md border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    Lihat Campaign
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
