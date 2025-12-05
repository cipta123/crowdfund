import Link from 'next/link'
import Image from 'next/image'
import { Campaign } from '@/lib/types'
import { formatCurrency, calculateProgress, getDaysRemaining } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Clock, Users, CheckCircle2 } from 'lucide-react'

interface CampaignCardProps {
  campaign: Campaign
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const progress = calculateProgress(campaign.currentAmount, campaign.targetAmount)
  const daysLeft = getDaysRemaining(campaign.endDate)

  return (
    <Link href={`/campaign/${campaign.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="relative h-48 w-full">
          <Image
            src={campaign.imageUrl}
            alt={campaign.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {campaign.isUrgent && (
            <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
              Mendesak
            </Badge>
          )}
          {campaign.isVerified && (
            <div className="absolute top-3 right-3 bg-white rounded-full p-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </div>
          )}
        </div>
        
        <CardContent className="p-4">
          <div className="mb-2">
            <Badge variant="secondary" className="text-xs">
              {campaign.category.replace('-', ' ').toUpperCase()}
            </Badge>
          </div>
          
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
            {campaign.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {campaign.description}
          </p>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-semibold text-primary">
                  {formatCurrency(campaign.currentAmount)}
                </span>
                <span className="text-muted-foreground">
                  {progress}%
                </span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="text-xs text-muted-foreground mt-1">
                dari {formatCurrency(campaign.targetAmount)}
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{campaign.donorCount} donatur</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{daysLeft} hari lagi</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 pt-2 border-t">
              {campaign.organizer.avatarUrl && (
                <Image
                  src={campaign.organizer.avatarUrl}
                  alt={campaign.organizer.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              )}
              <span className="text-sm text-muted-foreground truncate">
                {campaign.organizer.name}
              </span>
              {campaign.organizer.isVerified && (
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
