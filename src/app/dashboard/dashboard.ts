import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AssetService } from '../service/asset';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private assetService = inject(AssetService);

  assetPool = this.assetService.assets;
  totalValue = this.assetService.totalPortfolioValue;

  submitAsset(nameRef: HTMLInputElement, catRef: HTMLSelectElement, valRef: HTMLInputElement) {
    const val = parseFloat(valRef.value);
    const cat = catRef.value as 'Hardware' | 'Subscription' | 'Crypto';
    this.assetService.addAsset(nameRef.value, cat, val);
    nameRef.value = '';
    valRef.value = '';
  }

  killAsset(id: string) {
    this.assetService.removeAsset(id);
  }

  startEdit(id: string) {
    this.assetService.toggleEdit(id);
  }

  saveEdit(id: string, name: string, cat: string, val: string) {
    const numericVal = parseFloat(val);
    const categoryChecked = cat as 'Hardware' | 'Subscription' | 'Crypto';
    this.assetService.updateAsset(id, name, categoryChecked, numericVal);
  }
}