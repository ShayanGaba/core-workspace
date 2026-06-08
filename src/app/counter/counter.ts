import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './counter.html'
})
export class Counter {
  pulseCount = signal<number>(0);
  stepValue = signal<number>(1);

  pulseIntensity = computed(() => {
    const val = this.pulseCount();
    if (val === 0) return 'STABLE_IDLE';
    return val > 0 ? `POSITIVE_SHIFT (+${val})` : `NEGATIVE_SHIFT (${val})`;
  });

  adjustPulse(direction: 'UP' | 'DOWN') {
    const step = this.stepValue();
    if (direction === 'UP') {
      this.pulseCount.update(c => c + step);
    } else {
      this.pulseCount.update(c => c - step);
    }
  }

  setStep(size: number) {
    this.stepValue.set(size);
  }

  purgePulse() {
    this.pulseCount.set(0);
  }
}