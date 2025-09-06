'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProfileHeader } from '@/components/dashboard/ProfileHeader';
import { ProfileSection } from '@/components/dashboard/ProfileSection';
import { BottomNav } from '@/components/ui/BottomNav';
import { PageLayout } from '@/components/ui/PageLayout';

export default function MoiPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'accueil' | 'historique' | 'simulateur' | 'moi'>('moi');

  const handleTabChange = (tab: 'accueil' | 'historique' | 'simulateur' | 'moi') => {
    const routes = {
      accueil: '/fr/accueil',
      historique: '/fr/historique', 
      simulateur: '/fr/simulateur',
      moi: '/fr/moi'
    };
    router.push(routes[tab]);
  };

  const handleCompleteProfile = () => {
    // TODO: Implémenter la navigation vers la complétion du profil
    console.log('Compléter le profil');
  };

  const handleLogout = () => {
    // TODO: Implémenter la déconnexion
    console.log('Déconnexion');
  };

  const handleNavigation = (section: string) => {
    // TODO: Implémenter la navigation vers les différentes sections
    console.log(`Naviguer vers: ${section}`);
  };

  // Sections de la page profil
  const moiSection = [
    {
      id: 'mes-parcelles',
      label: 'Mes parcelles',
      onClick: () => handleNavigation('mes-parcelles')
    },
    {
      id: 'mes-infos',
      label: 'Mes infos',
      onClick: () => handleNavigation('mes-infos')
    },
    {
      id: 'general',
      label: 'General',
      onClick: () => handleNavigation('general')
    }
  ];

  const parametresSection = [
    {
      id: 'modifier-profil',
      label: 'Modifier profil',
      onClick: () => handleNavigation('modifier-profil')
    },
    {
      id: 'notification',
      label: 'Notification',
      onClick: () => handleNavigation('notification')
    },
    {
      id: 'securite',
      label: 'Sécurité',
      onClick: () => handleNavigation('securite')
    },
    {
      id: 'langue',
      label: 'Langue',
      onClick: () => handleNavigation('langue')
    }
  ];

  const autresSection = [
    {
      id: 'autres',
      label: 'Autres',
      onClick: () => handleNavigation('autres')
    },
    {
      id: 'confidentialite',
      label: 'Confidentialité',
      value: '24 MB',
      onClick: () => handleNavigation('confidentialite')
    }
  ];

  const infoGeneralSection = [
    {
      id: 'centre-aide',
      label: 'Centre d\'aide',
      onClick: () => handleNavigation('centre-aide')
    },
    {
      id: 'termes-conditions',
      label: 'Termes & conditions',
      onClick: () => handleNavigation('termes-conditions')
    },
    {
      id: 'privacy-policy',
      label: 'Privacy Policy',
      onClick: () => handleNavigation('privacy-policy')
    }
  ];

  const deconnexionSection = [
    {
      id: 'deconnexion',
      label: 'Déconnexion',
      isLogout: true,
      onClick: handleLogout
    }
  ];

  return (
    <PageLayout activeTab={activeTab}>
      {/* Layout responsive: mobile first, puis desktop */}
      <div className="w-full max-w-md mx-auto lg:max-w-6xl lg:mx-auto">

        {/* En-tête profil */}
        <ProfileHeader
          username="Losterne Brice"
          npi="8756450012"
          completionText="Complétez vos vos infos"
          completionSubtext="(1/3) Entrez vos infos perso"
          onCompleteProfile={handleCompleteProfile}
        />

        {/* Contenu principal */}
        <div className="flex-1 lg:flex lg:gap-8 lg:p-8">

          {/* Colonne principale (mobile: full width, desktop: 2/3) */}
          <div className="flex-1 lg:w-2/3">

            {/* Sections du profil */}
            <div className="pt-6 pb-4">
              
              {/* Section Moi */}
              <ProfileSection
                title="Moi"
                items={moiSection}
              />

              {/* Section Paramètres */}
              <ProfileSection
                title="Paramètres"
                items={parametresSection}
              />

              {/* Section Autres */}
              <ProfileSection
                title="Langue"
                items={autresSection}
              />

              {/* Section Info général */}
              <ProfileSection
                title="Info général"
                items={infoGeneralSection}
              />

              {/* Section Déconnexion */}
              <ProfileSection
                title=""
                items={deconnexionSection}
              />

            </div>
          </div>

          {/* Sidebar droite (desktop uniquement) */}
          <div className="hidden lg:block lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-medium text-black mb-4">Profil</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Profil complété</span>
                  <span className="font-medium text-orange-500">33%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Parcelles enregistrées</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dernière connexion</span>
                  <span className="font-medium">Aujourd'hui</span>
                </div>
              </div>
            </div>

            {/* Aide rapide */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h3 className="text-lg font-medium text-black mb-4">Aide rapide</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-sm font-medium">Comment ajouter une parcelle ?</span>
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-sm font-medium">Modifier mes informations</span>
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-sm font-medium">Centre d'aide</span>
                </button>
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
    </PageLayout>
  );
}
