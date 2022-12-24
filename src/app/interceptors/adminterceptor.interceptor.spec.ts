import { TestBed } from '@angular/core/testing';

import { AdminterceptorInterceptor } from './adminterceptor.interceptor';

describe('AdminterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AdminterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AdminterceptorInterceptor = TestBed.inject(AdminterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
