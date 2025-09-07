'use client';

import { TrendingUp, TrendingDown, ChevronDown } from 'lucide-react';

export default function TableauDeBordPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Aperçu</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Aujourd'hui</span>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Parcelles */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Parcelles</p>
              <p className="text-3xl font-bold text-gray-900">356</p>
            </div>
            <div className="flex items-center space-x-1 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+12.05%</span>
            </div>
          </div>
        </div>

        {/* Taux estimation */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Taux estimation</p>
              <p className="text-3xl font-bold text-gray-900">58%</p>
            </div>
            <div className="flex items-center space-x-1 text-gray-400">
              <span className="text-sm">+5.52%</span>
            </div>
          </div>
        </div>

        {/* Detail parcelle 1 */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Detail parcelle</p>
              <p className="text-3xl font-bold text-gray-900">356</p>
            </div>
            <div className="flex items-center space-x-1 text-red-500">
              <TrendingDown className="w-4 h-4" />
              <span className="text-sm font-medium">-11.52%</span>
            </div>
          </div>
        </div>

        {/* Detail parcelle 2 */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Detail parcelle</p>
              <p className="text-3xl font-bold text-gray-900">356</p>
            </div>
            <div className="flex items-center space-x-1 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+12.05%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic by Device */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Traffic by Device</h3>
          <div className="h-80">
            {/* Bar Chart */}
            <div className="flex items-end justify-between h-64 space-x-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 bg-gray-300 rounded-t" style={{ height: '60px' }}></div>
                <span className="text-xs text-gray-600">Linux</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 bg-gray-600 rounded-t" style={{ height: '120px' }}></div>
                <span className="text-xs text-gray-600">Mac</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 bg-gray-400 rounded-t" style={{ height: '90px' }}></div>
                <span className="text-xs text-gray-600">iOS</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 bg-gray-700 rounded-t" style={{ height: '140px' }}></div>
                <span className="text-xs text-gray-600">Windows</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 bg-gray-300 rounded-t" style={{ height: '40px' }}></div>
                <span className="text-xs text-gray-600">Android</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 bg-gray-500 rounded-t" style={{ height: '100px' }}></div>
                <span className="text-xs text-gray-600">Other</span>
              </div>
            </div>
            {/* Y-axis labels */}
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>0</span>
              <span>10K</span>
              <span>20K</span>
              <span>30K</span>
            </div>
          </div>
        </div>

        {/* Traffic by Location */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Traffic by Location</h3>
          <div className="flex items-center justify-center h-80">
            {/* Donut Chart */}
            <div className="relative">
              <svg width="200" height="200" className="transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="20"
                />
                {/* Terrain nu - 52.1% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="20"
                  strokeDasharray="261 500"
                  strokeDashoffset="0"
                />
                {/* Terrain bâti - 22.8% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="20"
                  strokeDasharray="114 500"
                  strokeDashoffset="-261"
                />
                {/* Commerce - 13.9% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="20"
                  strokeDasharray="70 500"
                  strokeDashoffset="-375"
                />
                {/* Autres - 11.2% */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="20"
                  strokeDasharray="56 500"
                  strokeDashoffset="-445"
                />
              </svg>
            </div>
            
            {/* Legend */}
            <div className="ml-8 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Terrain nu</p>
                  <p className="text-xs text-gray-600">52.1%</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Terrain bâti</p>
                  <p className="text-xs text-gray-600">22.8%</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Commerce</p>
                  <p className="text-xs text-gray-600">13.9%</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Autres</p>
                  <p className="text-xs text-gray-600">11.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
