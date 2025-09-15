import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const Index = () => {
  const [simulationType, setSimulationType] = useState('NPT');
  const [duration, setDuration] = useState('100');
  const [externalField, setExternalField] = useState(true);
  const [showWarning, setShowWarning] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">MDP-генератор</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-16">
        {/* Main Generator Card */}
        <Card className="mx-auto max-w-md shadow-sm border-gray-200">
          <CardContent className="p-12 space-y-12">
            {/* Simulation Type */}
            <div className="space-y-4">
              <Label htmlFor="simulation-type" className="text-base font-medium text-gray-900">
                Тип симуляции
              </Label>
              <Select value={simulationType} onValueChange={setSimulationType}>
                <SelectTrigger id="simulation-type" className="h-12 text-base border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="NPT">NPT</SelectItem>
                  <SelectItem value="NVT">NVT</SelectItem>
                  <SelectItem value="NVE">NVE</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Duration */}
            <div className="space-y-4">
              <Label htmlFor="duration" className="text-base font-medium text-gray-900">
                Длительность, нс
              </Label>
              <Input
                id="duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="h-12 text-base border-gray-300"
              />
            </div>

            {/* External Field with Warning */}
            <div className="space-y-4 relative">
              <div className="flex items-center space-x-4">
                <Checkbox
                  id="external-field"
                  checked={externalField}
                  onCheckedChange={setExternalField}
                  className="w-5 h-5"
                />
                <Label htmlFor="external-field" className="text-base font-medium text-gray-900">
                  Внешнее электрическое поле
                </Label>
                
                {/* Warning Lightbulb with exact text */}
                {simulationType === 'NPT' && externalField && (
                  <Popover open={showWarning} onOpenChange={setShowWarning}>
                    <PopoverTrigger asChild>
                      <div className="ml-2 cursor-help">
                        <span className="text-xl">💡</span>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent 
                      className="w-80 p-4 bg-amber-50 border-amber-200 shadow-lg"
                      side="right"
                      align="start"
                    >
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-amber-800">Внимание!</p>
                        <p className="text-sm text-amber-700 leading-relaxed">
                          Выбран NPT-ансамбль и внешнее поле. Рекомендуется использовать NVT для избежания артефактов.
                        </p>
                      </div>
                    </PopoverContent>
                  </Popover>
                )}
              </div>
            </div>

            {/* Generate Button */}
            <div className="pt-8">
              <Button className="w-full h-12 text-base font-medium bg-blue-600 hover:bg-blue-700">
                Сгенерировать конфигурацию
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;