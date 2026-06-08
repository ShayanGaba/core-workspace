import { Injectable, signal, computed } from '@angular/core';

export interface TechAsset {
  id: string;
  name: string;
  category: 'Hardware' | 'Subscription' | 'Crypto';
  value: number;
  isEditing?: boolean; 
}

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private assetsSignal = signal<TechAsset[]>([
    { id: '1', name: 'MSI Monitor 144Hz', category: 'Hardware', value: 600, isEditing: false },
    { id: '2', name: 'Vercel & Netflix Pro', category: 'Subscription', value: 450, isEditing: false },
    { id: '3', name: 'Binance Coin & Bitcoin', category: 'Crypto', value: 390, isEditing: false }
  ]);

  assets = this.assetsSignal.asReadonly();

  totalPortfolioValue = computed(() => {
    return this.assetsSignal().reduce((sum, asset) => sum + asset.value, 0);
  });

  addAsset(name: string, category: 'Hardware' | 'Subscription' | 'Crypto', value: number) {
    if (!name || value <= 0) return;
    const newAsset: TechAsset = {
      id: crypto.randomUUID(),
      name,
      category,
      value,
      isEditing: false
    };
    this.assetsSignal.update(current => [...current, newAsset]);
  }

  removeAsset(id: string) {
    this.assetsSignal.update(current => current.filter(asset => asset.id !== id));
  }

  toggleEdit(id: string) {
    this.assetsSignal.update(current =>
      current.map(asset => 
        asset.id === id ? { ...asset, isEditing: !asset.isEditing } : asset
      )
    );
  }

  updateAsset(id: string, updatedName: string, updatedCategory: 'Hardware' | 'Subscription' | 'Crypto', updatedValue: number) {
    if (!updatedName || updatedValue <= 0) return;
    
    this.assetsSignal.update(current =>
      current.map(asset =>
        asset.id === id 
          ? { ...asset, name: updatedName, category: updatedCategory, value: updatedValue, isEditing: false } 
          : asset
      )
    );
  }
}