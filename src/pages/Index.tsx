import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [simulationType, setSimulationType] = useState('NPT');
  const [duration, setDuration] = useState('100');
  const [externalField, setExternalField] = useState(true);
  const [showWarning, setShowWarning] = useState(true);
  const [activeTab, setActiveTab] = useState('generator');

  const configurations = [
    { id: 1, name: 'NPT Water Simulation', type: 'NPT', duration: '500 нс', field: true, date: '2024-01-15' },
    { id: 2, name: 'NVT Protein Analysis', type: 'NVT', duration: '200 нс', field: false, date: '2024-01-14' },
    { id: 3, name: 'Membrane Dynamics', type: 'NPT', duration: '1000 нс', field: true, date: '2024-01-13' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Atom" className="w-5 h-5 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold text-foreground">MDP-генератор</h1>
              </div>
            </div>
            <nav className="flex space-x-6">
              <button 
                onClick={() => setActiveTab('generator')}
                className={`text-sm font-medium transition-colors ${activeTab === 'generator' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Генератор
              </button>
              <button 
                onClick={() => setActiveTab('docs')}
                className={`text-sm font-medium transition-colors ${activeTab === 'docs' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Документация
              </button>
              <button 
                onClick={() => setActiveTab('history')}
                className={`text-sm font-medium transition-colors ${activeTab === 'history' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                История
              </button>
              <button 
                onClick={() => setActiveTab('settings')}
                className={`text-sm font-medium transition-colors ${activeTab === 'settings' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Настройки
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'generator' && (
          <div className="space-y-8 animate-fade-in">
            {/* Main Generator Section */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Генератор MDP конфигураций</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Создавайте конфигурации для молекулярно-динамического моделирования с интеллектуальными подсказками
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Configuration Panel */}
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Settings" className="w-5 h-5" />
                    <span>Параметры симуляции</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Simulation Type */}
                  <div className="space-y-2">
                    <Label htmlFor="simulation-type" className="text-sm font-medium">
                      Тип симуляции
                    </Label>
                    <Select value={simulationType} onValueChange={setSimulationType}>
                      <SelectTrigger id="simulation-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="NPT">NPT (изотермическо-изобарный)</SelectItem>
                        <SelectItem value="NVT">NVT (канонический)</SelectItem>
                        <SelectItem value="NVE">NVE (микроканонический)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Duration */}
                  <div className="space-y-2">
                    <Label htmlFor="duration" className="text-sm font-medium">
                      Длительность, нс
                    </Label>
                    <Input
                      id="duration"
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      placeholder="100"
                    />
                  </div>

                  {/* External Field */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="external-field"
                        checked={externalField}
                        onCheckedChange={setExternalField}
                      />
                      <Label htmlFor="external-field" className="text-sm font-medium">
                        Внешнее электрическое поле
                      </Label>
                      
                      {/* Warning Tooltip */}
                      {simulationType === 'NPT' && externalField && (
                        <Popover open={showWarning} onOpenChange={setShowWarning}>
                          <PopoverTrigger asChild>
                            <div className="ml-2">
                              <Icon 
                                name="Lightbulb" 
                                className="w-5 h-5 text-yellow-500 animate-pulse-warning cursor-help" 
                              />
                            </div>
                          </PopoverTrigger>
                          <PopoverContent className="w-80 bg-yellow-50 border-yellow-200">
                            <div className="flex space-x-2">
                              <Icon name="AlertTriangle" className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                              <div className="space-y-1">
                                <p className="text-sm font-medium text-yellow-800">Внимание!</p>
                                <p className="text-sm text-yellow-700">
                                  Выбран NPT-ансамбль и внешнее поле. Рекомендуется использовать NVT для избежания артефактов.
                                </p>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      )}
                    </div>
                  </div>

                  {/* Additional Parameters */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Температура, K</Label>
                      <Input type="number" placeholder="300" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Давление, бар</Label>
                      <Input type="number" placeholder="1" disabled={simulationType !== 'NPT'} />
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    <Icon name="Play" className="w-4 h-4 mr-2" />
                    Сгенерировать конфигурацию
                  </Button>
                </CardContent>
              </Card>

              {/* Preview Panel */}
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="FileText" className="w-5 h-5" />
                    <span>Предварительный просмотр</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                    <div className="space-y-1">
                      <div className="text-muted-foreground">; MDP файл сгенерирован автоматически</div>
                      <div>integrator = md</div>
                      <div>dt = 0.002</div>
                      <div>nsteps = {Math.floor(Number(duration) * 500000)}</div>
                      <div>nstenergy = 5000</div>
                      <div>nstlog = 5000</div>
                      <div className="mt-2 pt-2 border-t border-border">
                        <div>tcoupl = {simulationType === 'NVE' ? 'no' : 'V-rescale'}</div>
                        <div>tc-grps = System</div>
                        <div>tau-t = 0.1</div>
                        <div>ref-t = 300</div>
                        {simulationType === 'NPT' && (
                          <>
                            <div className="mt-1">pcoupl = Parrinello-Rahman</div>
                            <div>pcoupltype = isotropic</div>
                            <div>tau-p = 2.0</div>
                            <div>ref-p = 1.0</div>
                          </>
                        )}
                        {externalField && (
                          <div className="mt-1 text-yellow-600">electric-field-x = 0.1 0 0</div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'docs' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Документация</h2>
              <p className="text-lg text-muted-foreground">Руководство по использованию MDP-генератора</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="BookOpen" className="w-5 h-5" />
                    <span>Основы</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Изучите основные принципы молекулярной динамики и типы ансамблей.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• NPT - изотермическо-изобарный</li>
                    <li>• NVT - канонический</li>
                    <li>• NVE - микроканонический</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Settings2" className="w-5 h-5" />
                    <span>Параметры</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Подробное описание всех доступных параметров симуляции.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Температурные режимы</li>
                    <li>• Контроль давления</li>
                    <li>• Электрические поля</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Zap" className="w-5 h-5" />
                    <span>Примеры</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Готовые шаблоны для различных типов симуляций.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Белковая динамика</li>
                    <li>• Липидные мембраны</li>
                    <li>• Растворители</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">История конфигураций</h2>
              <p className="text-lg text-muted-foreground">Управляйте созданными конфигурациями</p>
            </div>

            <div className="space-y-4">
              {configurations.map((config) => (
                <Card key={config.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">{config.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="Clock" className="w-4 h-4" />
                            <span>{config.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Calendar" className="w-4 h-4" />
                            <span>{config.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={config.type === 'NPT' ? 'default' : 'secondary'}>
                          {config.type}
                        </Badge>
                        {config.field && (
                          <Badge variant="outline" className="text-yellow-600 border-yellow-300">
                            <Icon name="Zap" className="w-3 h-3 mr-1" />
                            Поле
                          </Badge>
                        )}
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Download" className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Copy" className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Настройки приложения</h2>
              <p className="text-lg text-muted-foreground">Персонализируйте ваш опыт работы</p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Общие настройки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-medium">Автосохранение конфигураций</Label>
                      <p className="text-sm text-muted-foreground">Автоматически сохранять созданные конфигурации</p>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-medium">Показывать предупреждения</Label>
                      <p className="text-sm text-muted-foreground">Отображать советы по совместимости параметров</p>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-medium">Темная тема</Label>
                      <p className="text-sm text-muted-foreground">Использовать темное оформление интерфейса</p>
                    </div>
                    <Checkbox />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Параметры по умолчанию</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Тип симуляции</Label>
                      <Select defaultValue="NPT">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="NPT">NPT</SelectItem>
                          <SelectItem value="NVT">NVT</SelectItem>
                          <SelectItem value="NVE">NVE</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Длительность, нс</Label>
                      <Input defaultValue="100" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;