import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDataGroup, IGroupMetadata } from './types';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _destinationGroups = new BehaviorSubject<IDataGroup[]>([]);
  destinationGroups$ = this._destinationGroups.asObservable();
  private _originGroups = new BehaviorSubject<IDataGroup[]>([]);
  originGroups$ = this._originGroups.asObservable();
  private _destinationMetadata = new BehaviorSubject<IGroupMetadata>({
    name: '',
    icon: '',
  });
  destinationMetadata$ = this._destinationMetadata.asObservable();
  private _originMetadata = new BehaviorSubject<IGroupMetadata>({
    name: '',
    icon: '',
  });
  originMetadata$ = this._originMetadata.asObservable();

  syncContacts() {
    console.log('contacts synced');
  }

  setDestinationGroups(destinationGroups: IDataGroup[]) {
    console.log('setting destination groups');
    this._destinationGroups.next(destinationGroups);
  }

  setOriginGroups(originGroups: IDataGroup[]) {
    console.log('setting origin groups');
    this._originGroups.next(originGroups);
  }

  setDestinationMetadata(destinationMetadata: IGroupMetadata) {
    console.log('setting destination metadata');
    this._destinationMetadata.next(destinationMetadata);
  }

  setOriginMetadata(originMetadata: IGroupMetadata) {
    console.log('setting origin metadata');
    this._originMetadata.next(originMetadata);
  }
}
