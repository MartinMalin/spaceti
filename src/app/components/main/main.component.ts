import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';

import { Day } from 'src/app/models';
import { DataService } from 'src/app/services';
import { trackByFn, makeDataMap, showWeekDays } from '../../helper/helper';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {

  datasets = [1, 2, 3, 4, 5, 6];
  weekDays = [];
  trackByFn = trackByFn;

  datasetNumber$ = new BehaviorSubject<number>(1);
  result$ = this.datasetNumber$.pipe(
    switchMap(dataset => this.dataService.loadData(dataset).pipe(
      filter<{ buckets: [Day] }>(Boolean),
      take(1))),
      tap(data => {
        this.weekDays = showWeekDays(data)
      }),
      map(data => makeDataMap(data)),
  );

  constructor(private dataService: DataService) {}
}
