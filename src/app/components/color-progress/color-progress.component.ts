import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-color-progress',
  templateUrl: './color-progress.component.html',
  styleUrls: ['./color-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorProgressComponent {}
