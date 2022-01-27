
export interface FormCanDeactivate {
  podeDesativar(): boolean | import("rxjs").Observable<boolean> | Promise<boolean>;

}
