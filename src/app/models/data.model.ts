export interface Hour {
  key_as_string: string;
  key: number;
  doc_count: number;
  data: {
    value: number;
  };
}

export interface Day {
  key: number;
  doc_count: number;
  histogram: {
    buckets: Array<Hour>;
  };
}

export interface HistogramData {
  label: string;
  value: string;
}
