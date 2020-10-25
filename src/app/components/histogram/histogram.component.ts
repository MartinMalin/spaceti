import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { HistogramData } from 'src/app/models';
import { trackByFn } from '../../helper/helper';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistogramComponent {

  @Input() set data(histogram: {[key: string]: HistogramData[]}) {
    this.histogram = histogram;
  }
  @Input() weekDays: string[];
  histogram: {[key: string]: HistogramData[]};
  trackByFn = trackByFn;

  getBackgroundColor(value: number) {
    let smallNumbers = '';
    if (value >= 0 && value < 1) {
      smallNumbers = value.toString().split('.').join('');
    }
    return smallNumbers ? `rgba(0, 0, 255, 0.${smallNumbers})` : `rgba(0, 0, 255, 0.${Math.round((value / 100) * 100)})`;
  }
}
