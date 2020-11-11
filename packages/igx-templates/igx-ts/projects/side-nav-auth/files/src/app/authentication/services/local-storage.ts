import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

class LocalStorageFallback implements Storage {
  [name: string]: any;
  readonly length: number = 0;
  clear(): void { }
  getItem(key: string): string { return null; }
  key(index: number): string { return null; }
  removeItem(key: string): void { }
  setItem(key: string, value: string): void { }
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements Storage {

  private storage: Storage;

  [name: string]: any;
  get length(): number {
    return this.storage.length;
  }

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    if (isPlatformBrowser(platformId)) {
      this.storage = localStorage;
    } else {
      this.storage = new LocalStorageFallback();
    }
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string {
    return this.storage.getItem(key);
  }

  key(index: number): string {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    return this.storage.setItem(key, value);
  }
}
