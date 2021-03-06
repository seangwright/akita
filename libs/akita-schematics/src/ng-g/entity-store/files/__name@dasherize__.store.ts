import { Injectable } from '@angular/core';
import { EntityState<% if (withActive) { %>, ActiveState<%}%>, EntityStore, StoreConfig } from '@datorama/akita';
import { <%= singular(classify(name)) %> } from './<%= singular(dasherize(name)) %>.model';

export interface <%= classify(name) %>State extends <%= extensionState %> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: '<%= name %>' })
export class <%= classify(name) %>Store extends EntityStore<<%= classify(name) %>State> {

  constructor() {
    super();
  }

}
