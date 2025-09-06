'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserHeader } from '@/components/dashboard/UserHeader';
import { TaxCard } from '@/components/dashboard/TaxCard';
import { ActionButton } from '@/components/dashboard/ActionButton';
import { PaymentSuccessModal } from '@/components/dashboard/PaymentSuccessModal';
import { RecentPaymentsSection } from '@/components/ui/RecentPaymentsSection';
import { BottomNav } from '@/components/ui/BottomNav';
import { PageLayout } from '@/components/ui/PageLayout';
import { Folder, QrCode } from 'lucide-react';

export default function AccueilPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'accueil' | 'historique' | 'simulateur' | 'moi'>('accueil');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Données d'exemple
  const recentPayments = [
    {
      id: '1',
      title: 'Impôt 2024',
      date: '15 Dec. 2024, 11.05',
      amount: 67523
    },
    {
      id: '2',
      title: 'Impôt 2024',
      date: '15 Dec. 2024, 11.05',
      amount: 67523
    },
    {
      id: '3',
      title: 'Impôt 2024',
      date: '15 Dec. 2024, 11.05',
      amount: 67523
    },
    {
      id: '4',
      title: 'Impôt 2024',
      date: '15 Dec. 2024, 11.05',
      amount: 67523
    }
  ];

  const handlePay = () => {
    setShowPaymentModal(true);
  };

  const handleScan = () => {
    // TODO: Implémenter la fonctionnalité de scan QR
    console.log('Scanner QR code');
  };

  const handleViewAllPayments = () => {
    router.push('/fr/historique');
  };

  const handleTabChange = (tab: 'accueil' | 'historique' | 'simulateur' | 'moi') => {
    const routes = {
      accueil: '/fr/accueil',
      historique: '/fr/historique', 
      simulateur: '/fr/simulateur',
      moi: '/fr/moi'
    };
    router.push(routes[tab]);
  };

  return (
    <PageLayout activeTab={activeTab}>
      {/* Layout responsive: mobile first, puis desktop */}
      <div className="w-full max-w-md mx-auto lg:max-w-6xl lg:mx-auto">
        
        {/* En-tête utilisateur */}
        <UserHeader 
          username="Losterne" 
          hasNotification={true}
        />

        {/* Contenu principal */}
        <div className="flex-1 lg:flex lg:gap-8 lg:p-8">
          
          {/* Colonne principale (mobile: full width, desktop: 2/3) */}
          <div className="flex-1 lg:w-2/3">
            
            {/* Bloc principal d'impôt à payer */}
            <div className="bg-[#1A1A1A] pt-4 pb-8 lg:rounded-xl lg:mb-8">
              <TaxCard 
                amount={68574}
                deadline="15 Sep. 2025"
              />
              
              {/* Boutons d'action */}
              <div className="flex gap-4 px-4 mt-6">
                <ActionButton
                  label="Payer"
                  icon={<Folder className="w-5 h-5" />}
                  onClick={handlePay}
                  className="flex-1"
                />
                <ActionButton
                  label="Scan"
                  icon={<QrCode className="w-5 h-5" />}
                  onClick={handleScan}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Section des paiements récents - Mobile */}
            <div className="pt-6 pb-4 lg:hidden">
              <RecentPaymentsSection 
                items={recentPayments} 
                onViewAllClick={handleViewAllPayments}
              />
            </div>
          </div>

          {/* Sidebar droite (desktop uniquement) */}
          <div className="hidden lg:block lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-medium text-black mb-4">Paiements récents</h3>
              <RecentPaymentsSection 
                items={recentPayments.slice(0, 3)} 
                onViewAllClick={handleViewAllPayments}
                showViewAll={true}
              />
            </div>

            {/* Statistiques rapides */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h3 className="text-lg font-medium text-black mb-4">Résumé</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total payé cette année</span>
                  <span className="font-medium">270 092 XOF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Paiements en attente</span>
                  <span className="font-medium text-orange-500">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Prochaine échéance</span>
                  <span className="font-medium">15 Sep. 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - Mobile uniquement */}
        <div className="lg:hidden">
          <BottomNav 
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </div>
      </div>

      {/* Modal de paiement */}
      <PaymentSuccessModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={68574}
        paymentId="88291058212495"
      />
    </PageLayout>
  );
}
